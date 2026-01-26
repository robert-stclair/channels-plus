<template>
  <SmCard :show-border-on-top="false" class="pp-tile-container">
    <SmCardActions>
      <SmButton
        type="text"
        suffix-icon="arrow-go-forward"
        href="#"
      >
        Reservations report
      </SmButton>
    </SmCardActions>
    <SmCardContent>
      <div class="pp-tile-header-container">
        <div class="pp-flex pp-gap-8">
          <h2 class="pp-tile-header">Today's reservations</h2>
          <SmTooltip class="pp-text-grey-neu-dark" trigger="hover" placement="bottom" title="These are today's reservations">
            <SmIcon name="utility-information-alt" />
          </SmTooltip>
        </div>
      </div>

      <div class="pp-flex pp-justify-between">
        <div v-for="metric in metrics" :key="metric.label" class="pp-flex pp-flex-col pp-items-center">
          <span class="pp-font-semibold pp-leading-h2 pp-text-h2">{{ metric.value }}</span>
          <p class="pp-text-grey-neu-dark">{{ metric.label }}</p>
        </div>
      </div>
    </SmCardContent>
  </SmCard>
</template>

<script setup>
import { ref } from 'vue'

const metrics = ref([
  { label: 'arrivals', value: 12 },
  { label: 'departures', value: 15 },
  { label: 'new bookings', value: 8 },
  { label: 'stays', value: 47 },
  { label: 'cancellations', value: 2 }
])
</script>

