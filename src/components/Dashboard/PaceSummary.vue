<template>
  <SmCard :show-border-on-top="false" class="pp-tile-container">
    <SmCardActions>
      <SmButton
        type="text"
        suffix-icon="arrow-go-forward"
        href="#"
      >
        Pace report
      </SmButton>
    </SmCardActions>
    <SmCardContent>
      <div class="pp-tile-header-container">
        <div class="pp-flex pp-gap-8">
          <h2 class="pp-tile-header">Pace summary</h2>
          <SmTooltip class="pp-text-grey-neu-dark" trigger="hover" placement="bottom" title="Pace summary report">
            <SmIcon name="utility-information-alt" />
          </SmTooltip>
        </div>
      </div>

      <div class="pp-flex pp-flex-col">
        <!-- Last 7 Days Section -->
        <div class="pace-section">
          <h3 class="pp-tile-header pp-mb-12">Last 7 days</h3>
          <div class="pp-flex pp-justify-between pp-mb-8">
            <span>Room nights sold</span>
            <div class="pp-flex pp-items-center">
              <span class="pp-font-semibold pp-mr-12">{{ paceData.last7Days.roomNightsSold }}</span>
              <div class="pp-flex pp-justify-start">
                <span class="pp-leading-para-small pp-px-8 pp-rounded-full pp-text-para-small pp-icon-neutral">
                  0%
                </span>
              </div>
            </div>
          </div>
          <div class="pp-flex pp-justify-between pp-mb-8">
            <span>Revenue (AUD)</span>
            <div class="pp-flex pp-items-center">
              <span class="pp-font-semibold pp-mr-12">{{ paceData.last7Days.revenue }}</span>
              <div class="pp-flex pp-justify-start">
                <span class="pp-leading-para-small pp-px-8 pp-rounded-full pp-text-para-small pp-icon-neutral">
                  0%
                </span>
              </div>
            </div>
          </div>
          <div class="pp-flex pp-justify-between">
            <span>ADR (AUD)</span>
            <div class="pp-flex pp-items-center">
              <span class="pp-font-semibold pp-mr-12">{{ paceData.last7Days.adr }}</span>
              <div class="pp-flex pp-justify-start">
                <span class="pp-leading-para-small pp-px-8 pp-rounded-full pp-text-para-small pp-icon-neutral">
                  0%
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Next 7 Days Section -->
        <div class="pace-section">
          <h3 class="pp-tile-header pp-mb-12">Next 7 days</h3>
          <div class="pp-flex pp-justify-between pp-mb-8">
            <span>Room nights sold</span>
            <div class="pp-flex pp-items-center">
              <span class="pp-font-semibold pp-mr-12">{{ paceData.next7Days.roomNightsSold }}</span>
              <div class="pp-flex pp-justify-start">
                <span class="pp-leading-para-small pp-px-8 pp-rounded-full pp-text-para-small pp-icon-neutral">
                  0%
                </span>
              </div>
            </div>
          </div>
          <div class="pp-flex pp-justify-between pp-mb-8">
            <span>Revenue (AUD)</span>
            <div class="pp-flex pp-items-center">
              <span class="pp-font-semibold pp-mr-12">{{ paceData.next7Days.revenue }}</span>
              <div class="pp-flex pp-justify-start">
                <span class="pp-leading-para-small pp-px-8 pp-rounded-full pp-text-para-small pp-icon-neutral">
                  0%
                </span>
              </div>
            </div>
          </div>
          <div class="pp-flex pp-justify-between">
            <span>ADR (AUD)</span>
            <div class="pp-flex pp-items-center">
              <span class="pp-font-semibold pp-mr-12">{{ paceData.next7Days.adr }}</span>
              <div class="pp-flex pp-justify-start">
                <span class="pp-leading-para-small pp-px-8 pp-rounded-full pp-text-para-small pp-icon-neutral">
                  0%
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="pp-border-top pp-flex pp-items-center pp-py-16">
          <SmBadge lightThemeType="success" size="large">
            <SmIcon name="arrow-go-up" />
          </SmBadge>
          <SmBadge lightThemeType="warning" size="large">
            <SmIcon name="arrow-go-down" />
          </SmBadge>
          <span class="pp-disabled-text pp-ml-8 sm-text--small">Comparison is versus the previous corresponding period</span>
        </div>
      </div>
    </SmCardContent>
  </SmCard>
</template>

<script setup>
import { ref } from 'vue'

const paceData = ref({
  last7Days: {
    roomNightsSold: 0,
    revenue: 0,
    adr: 0
  },
  next7Days: {
    roomNightsSold: 0,
    revenue: 0,
    adr: 0
  }
})
</script>

<style scoped>
.pace-section {
  margin-bottom: 32px;
}
</style>
