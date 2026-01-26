<template>
  <SmCard :show-border-on-top="false" class="pp-tile-container">
    <SmCardActions>
      <SmButton
        type="text"
        suffix-icon="arrow-go-forward"
        href="#"
      >
        Performance
      </SmButton>
    </SmCardActions>
    <SmCardContent>
      <div class="pp-tile-header-container">
        <div class="pp-flex pp-gap-8">
          <h2 class="pp-tile-header">Demand Plus</h2>
        </div>
      </div>

      <div class="pp-text-grey-neu-dark pp-text-para-small pp-mb-24">Property Metasearch • Last 30 days</div>

      <div class="pp-flex pp-flex-col pp-gap-32">
        <div v-for="metric in metrics" :key="metric.label" class="pp-flex pp-items-center pp-justify-between">
          <div class="pp-flex pp-items-center">
            <img :src="metric.icon" class="pp-mr-8" alt="" />
            <span>{{ metric.label }}</span>
            <SmTooltip
              v-if="metric.tooltip"
              :title="metric.tooltip"
              class="pp-ml-8 pp-text-grey-neu-dark"
              trigger="hover"
              placement="bottom"
            >
              <SmIcon name="utility-information-alt" />
            </SmTooltip>
          </div>
          <span class="pp-font-semibold">{{ metric.value }}</span>
        </div>

        <!-- Footer -->
        <div class="pp-flex pp-items-center pp-justify-between">
          <div class="unmatched-channel-message-warning">
            <p class="pp-mb-8">
              Your direct booking engine is not currently shown on some metasearch sites.
            </p>
            <a href="#" class="fix-it-now-link">
              Fix it now
              <SmIcon
                name="arrow-go-forward"
                class="pp-ml-8"
                width="14"
                height="14"
              />
            </a>
          </div>
          <img
            :src="warningIcon"
            alt="Warning"
          />
        </div>
      </div>
    </SmCardContent>
  </SmCard>
</template>

<script setup>
import { ref } from 'vue'
import impressionsIcon from './images/impressions.svg'
import clicksIcon from './images/clicks.svg'
import reservationsIcon from './images/reservations.svg'
import revenueIcon from './images/revenue.svg'
import directBookingIcon from './images/direct-booking.svg'
import warningIcon from './images/utility-warning.svg'

const metrics = ref([
  {
    label: 'Impressions',
    value: '12,485',
    icon: impressionsIcon,
    tooltip: 'Number of times your property was shown in search results'
  },
  {
    label: 'Clicks',
    value: '342',
    icon: clicksIcon,
    tooltip: 'Number of times a potential guest clicked on your direct booking link'
  },
  {
    label: 'Reservations',
    value: '18',
    icon: reservationsIcon
  },
  {
    label: 'Revenue (AUD)',
    value: '$3,456',
    icon: revenueIcon
  },
  {
    label: 'Direct Booking %',
    value: '15.2%',
    icon: directBookingIcon,
    tooltip: 'The percentage of direct booking reservations from Demand Plus'
  }
])
</script>

<style scoped>
.unmatched-channel-message-warning {
  border-left: 2px solid #d11d1d;
  padding-left: 10px;
}

.unmatched-channel-message-warning p {
  color: #333;
  margin: 0 0 8px 0;
}

.fix-it-now-link {
  color: #006ADD;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
}

.fix-it-now-link:hover {
  text-decoration: underline;
}

.fix-it-now-link .pp-ml-8 {
  color: #006ADD;
}
</style>
