<template>
  <SmCard :show-border-on-top="false" class="pp-tile-container">
    <SmCardActions>
      <div class="pp-flex pp-gap-8">
        <SmSelect
          v-model="selectedRoomIndex"
          name="selectedRoomIndex"
          :clearable="false"
          :label-hidden="true"
          :filterable="false"
          :options="roomTypesOptions"
          :error-disabled="true"
          :allow-empty="false"
          class="pp-tile-select"
        />
        <SmButton
          type="text"
          suffix-icon="arrow-go-forward"
          href="#"
        >
          Inventory
        </SmButton>
      </div>
    </SmCardActions>
    <SmCardContent>
      <div class="pp-tile-header-container">
        <div class="pp-flex pp-gap-8">
          <h2 class="pp-tile-header">Available room types</h2>
          <SmTooltip class="pp-text-grey-neu-dark" trigger="hover" placement="bottom" title="Room type availability for the coming days">
            <SmIcon name="utility-information-alt" />
          </SmTooltip>
        </div>
      </div>

      <div class="pp-flex pp-justify-between">
        <div
          v-for="(day, index) in availability"
          :key="day.date"
          class="pp-flex pp-flex-col pp-items-center"
        >
          <span
            class="pp-font-semibold pp-uppercase pp-text-xs"
            :class="{
              'pp-text-app-warning': day.isWeekend,
              'pp-text-app-success': index === 0
            }"
          >
            {{ day.day }}
          </span>

          <p class="pp-capitalize pp-leading-para-small pp-mb-8 pp-text-grey-neu-dark pp-text-para-small">
            {{ day.date }}
          </p>

          <span
            class="pp-available pp-font-semibold pp-leading-para-large pp-rounded-lg pp-text-para-large"
            :class="{ 'zero': day.count < 1 }"
          >
            {{ day.count }}
          </span>
        </div>
      </div>
    </SmCardContent>
  </SmCard>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedRoomIndex = ref(0)

const roomTypes = ref([
  { name: 'All rooms' },
  { name: 'Apartamento' },
  { name: 'Apartment' },
  { name: 'Apartment - Ground Floor Test Sharky DB Rates' },
  { name: 'Apartment with Balcony' }
])

const roomTypesOptions = computed(() =>
  roomTypes.value.map((roomType, code) => ({ code, label: roomType.name }))
)

const availability = ref([
  { day: 'TODAY', date: 'Jan 22', count: 8, isWeekend: false },
  { day: 'THU', date: 'Jan 23', count: 12, isWeekend: false },
  { day: 'FRI', date: 'Jan 24', count: 5, isWeekend: false },
  { day: 'SAT', date: 'Jan 25', count: 2, isWeekend: true },
  { day: 'SUN', date: 'Jan 26', count: 0, isWeekend: true },
  { day: 'MON', date: 'Jan 27', count: 15, isWeekend: false },
  { day: 'TUE', date: 'Jan 28', count: 18, isWeekend: false },
  { day: 'WED', date: 'Jan 29', count: 14, isWeekend: false },
  { day: 'THU', date: 'Jan 30', count: 11, isWeekend: false },
  { day: 'FRI', date: 'Jan 31', count: 6, isWeekend: false }
])
</script>
