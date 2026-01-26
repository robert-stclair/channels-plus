<template>
  <div class="dashboard">
    <div class="gap-24 grid grid-cols-3">
      <!-- Left section: 2 columns -->
      <div class="auto-rows-min col-span-2 gap-24 grid grid-cols-2">
        <TodaysReservations class="col-span-2" />

        <AvailableRoomTypes class="col-span-2" />

        <PaceSummary class="col-span-1" />

        <TopChannels class="col-span-1" />

        <DemandPlusPerformance class="col-span-1 dashboard__long_card" />
      </div>

      <!-- Right section: 1 column -->
      <div class="col-span-1 gap-24 grid grid-cols-1">
        <SmartGuide v-if="viewMode === 'smart-guide'" />
        <ErrorAlert v-else />

        <ChannelOffers />

        <PropertyStatus />

        <ConnectivityStatus />

        <ChannelStatus class="dashboard__long_card" />

        <HelpCentre />

        <AppStore />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import TodaysReservations from '../components/dashboard/TodaysReservations.vue'
import AvailableRoomTypes from '../components/dashboard/AvailableRoomTypes.vue'
import PaceSummary from '../components/dashboard/PaceSummary.vue'
import TopChannels from '../components/dashboard/TopChannels.vue'
import DemandPlusPerformance from '../components/dashboard/DemandPlusPerformance.vue'
import SmartGuide from '../components/dashboard/SmartGuide.vue'
import ErrorAlert from '../components/dashboard/ErrorAlert.vue'
import ChannelOffers from '../components/dashboard/ChannelOffers.vue'
import PropertyStatus from '../components/dashboard/PropertyStatus.vue'
import ConnectivityStatus from '../components/dashboard/ConnectivityStatus.vue'
import ChannelStatus from '../components/dashboard/ChannelStatus.vue'
import HelpCentre from '../components/dashboard/HelpCentre.vue'
import AppStore from '../components/dashboard/AppStore.vue'

const props = defineProps({
  viewMode: {
    type: String,
    default: 'smart-guide'
  }
})

const propertyName = 'Harbour Rocks Hotel Sydney'
const originalTitle = document.title

onMounted(() => {
  document.title = `Dashboard | ${propertyName}`
})

onUnmounted(() => {
  document.title = originalTitle
})
</script>

<style scoped>
.dashboard {
  background-color: #f5f9ff;
  min-height: calc(100vh - 64px);
  padding: 58px 24px 24px;
  width: 100%;
}

.gap-24 {
  gap: 24px;
}

.grid {
  display: grid;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.col-span-1 {
  grid-column: span 1 / span 1;
}

.col-span-2 {
  grid-column: span 2 / span 2;
}

.auto-rows-min {
  grid-auto-rows: min-content;
}

.dashboard__long_card {
  max-height: 536px;
  overflow-y: auto;
}

/* Responsive breakpoints */
@media (max-width: 1200px) {
  .grid-cols-3 {
    grid-template-columns: repeat(2, 1fr);
  }

  .col-span-2 {
    grid-column: span 2 / span 2;
  }
}

@media (max-width: 768px) {
  .grid-cols-3,
  .grid-cols-2 {
    grid-template-columns: 1fr;
  }

  .col-span-1,
  .col-span-2 {
    grid-column: span 1 / span 1;
  }

  .dashboard {
    padding: 16px;
  }
}
</style>
