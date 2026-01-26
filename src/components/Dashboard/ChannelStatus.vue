<template>
  <SmCard :show-border-on-top="false" class="pp-tile-container">
    <SmCardActions>
      <SmButton
        type="text"
        suffix-icon="arrow-go-forward"
        href="#"
      >
        My channels
      </SmButton>
    </SmCardActions>
    <SmCardContent>
      <div class="pp-tile-header-container">
        <div class="pp-flex pp-gap-8">
          <h2 class="pp-tile-header">Channel status</h2>
          <SmTooltip class="pp-text-grey-neu-dark" trigger="hover" placement="bottom" title="Shows channel status of connected channels">
            <SmIcon name="utility-information-alt" />
          </SmTooltip>
        </div>
      </div>

      <SmExpandableCard>
        <template #default>
          <!-- Enabled Channels Section -->
          <SmExpandableCardBody
            :custom-collapsible="true"
            :expanded="expandedSections.enabled"
            @close="expandedSections.enabled = false"
            @open="toggleSection('enabled')"
          >
            <template #header>
              <span>Enabled channels</span>
              <SmBadge light-theme-type="success" size="large" style="float:right">
                {{ enabledChannels.length }}
              </SmBadge>
            </template>

            <template #body>
              <div>
                <div
                  v-for="channel in visibleEnabledChannels"
                  :key="typeof channel === 'string' ? channel : channel.name"
                  class="pp-mr-12"
                >
                  <div
                    class="channel-description pp-cursor-pointer pp-flex pp-flex-row pp-items-center pp-justify-between pp-mb-12"
                    :class="{ 'indicator__warning': typeof channel === 'object' }"
                  >
                    <div class="pp-flex pp-flex-col pp-mb-5 pp-ml-10">
                      <span class="pp-flex pp-items-center">
                        <SmIcon
                          v-if="(typeof channel === 'string' ? channel : channel.name) === 'DIRECT BOOKING'"
                          name="products-booking-engine"
                          class="booking-engine-icon"
                        />
                        <span class="pp-font-semibold pp-uppercase">{{ typeof channel === 'string' ? channel : channel.name }}</span>
                      </span>
                      <span v-if="typeof channel === 'object'" class="pp-text-grey-neu-dark">{{ channel.message }}</span>
                    </div>
                    <img v-if="typeof channel === 'string'" :src="successIcon" alt="Success" />
                    <img v-else :src="warningIcon" alt="Warning" />
                  </div>
                </div>

                <SmButton
                  v-if="enabledChannels.length > 3"
                  type="text"
                  suffix-icon="arrow"
                  @click="showAllEnabled = !showAllEnabled"
                  class="toggle-channels-button"
                >
                  {{ showAllEnabled ? 'Less channels' : 'More channels' }}
                </SmButton>
              </div>
            </template>
          </SmExpandableCardBody>

          <!-- Disabled Channels Section -->
          <SmExpandableCardBody
            :custom-collapsible="true"
            :expanded="expandedSections.disabled"
            @close="expandedSections.disabled = false"
            @open="toggleSection('disabled')"
          >
            <template #header>
              <span>Disabled channels</span>
              <SmBadge light-theme-type="info" size="large" style="float:right">
                {{ disabledChannels.length }}
              </SmBadge>
            </template>

            <template #body>
              <SmHtmlTruncator v-if="disabledChannels.length > 0" max-height="100%">
                <div
                  v-for="channel in disabledChannels"
                  :key="channel.name"
                  class="pp-mr-12"
                >
                  <div class="channel-description pp-cursor-pointer pp-flex pp-flex-row pp-items-center pp-justify-between pp-mb-12 indicator__warning">
                    <div class="pp-flex pp-flex-col pp-mb-5 pp-ml-10">
                      <span class="pp-flex">
                        <span class="pp-font-semibold pp-uppercase">{{ channel.name }}</span>
                      </span>
                      <span class="pp-text-grey-neu-dark">{{ channel.message }}</span>
                    </div>
                    <img :src="warningIcon" alt="Warning" />
                  </div>
                </div>
              </SmHtmlTruncator>
            </template>
          </SmExpandableCardBody>

          <!-- Awaiting Setup Section -->
          <SmExpandableCardBody
            :custom-collapsible="true"
            :expanded="expandedSections.awaiting"
            @close="expandedSections.awaiting = false"
            @open="toggleSection('awaiting')"
          >
            <template #header>
              <span>Awaiting setup</span>
              <SmBadge light-theme-type="info" size="large" style="float:right">
                {{ awaitingSetupChannels.length }}
              </SmBadge>
            </template>

            <template #body>
              <SmHtmlTruncator v-if="awaitingSetupChannels.length > 0" max-height="100%">
                <div
                  v-for="channel in awaitingSetupChannels"
                  :key="channel"
                  class="pp-mr-12"
                >
                  <div class="channel-description pp-cursor-pointer pp-flex pp-flex-row pp-items-center pp-justify-between pp-mb-12 indicator__warning">
                    <div class="pp-flex pp-flex-col pp-mb-5 pp-ml-10">
                      <span class="pp-flex">
                        <span class="pp-font-semibold pp-uppercase">{{ channel }}</span>
                      </span>
                      <span class="pp-text-grey-neu-dark">Channel awaiting setup</span>
                    </div>
                    <img :src="warningIcon" alt="Warning" />
                  </div>
                </div>
              </SmHtmlTruncator>
            </template>
          </SmExpandableCardBody>
        </template>
      </SmExpandableCard>
    </SmCardContent>
  </SmCard>
</template>

<script setup>
import { ref, computed } from 'vue'
import successIcon from './images/utility-icon__success.svg'
import warningIcon from './images/utility-icon__warning.svg'

const expandedSections = ref({
  enabled: true,
  disabled: false,
  awaiting: false
})

const showAllEnabled = ref(false)

const enabledChannels = ref([
  'DIRECT BOOKING',
  'Booking.com',
  'Expedia',
  { name: 'Bing Hotel Ads', message: 'Channel room rate disabled' },
  'ALTURA DESTINATION SERVICES',
  'ASIAYO',
  'Agoda',
  'Hotels.com',
  'Vrbo',
  'TripAdvisor',
  'Google Hotel Ads',
  'Ctrip'
])

const disabledChannels = ref([
  'Hostelworld',
  'Hotelbeds'
])

const awaitingSetupChannels = ref([
  'Airbnb',
  'Despegar',
  'Trivago'
])

const visibleEnabledChannels = computed(() => {
  return showAllEnabled.value
    ? enabledChannels.value
    : enabledChannels.value.slice(0, 3)
})

const toggleSection = (section) => {
  // Close all sections
  Object.keys(expandedSections.value).forEach(key => {
    expandedSections.value[key] = false
  })
  // Open the selected section
  expandedSections.value[section] = true
}
</script>

<style scoped>
.channel-description {
  height: auto;
}

.channel-description.indicator__warning {
  border-left: 2px solid #D57800;
  padding-left: 10px;
  margin-left: 2px;
}

.channel-icon {
  color: #4caf50;
}

.booking-engine-icon {
  margin-right: 5px;
  position: relative;
  top: 2px;
}

.toggle-channels-button {
  margin-top: 8px;
  margin-left: -10px;
}
</style>
