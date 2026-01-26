<template>
  <SmCard :show-border-on-top="false" class="pp-tile-container">
    <SmCardContent>
      <div class="pp-tile-header-container">
        <div class="pp-flex pp-gap-8">
          <h2 class="pp-tile-header">Connectivities status</h2>
          <SmTooltip class="pp-text-grey-neu-dark" trigger="hover" placement="bottom" title="The number of room rates mapped to your connectivities. Review to ensure all rates are mapped.">
            <SmIcon name="utility-information-alt" />
          </SmTooltip>
        </div>
      </div>

      <div class="pp-flex pp-flex-col pp-justify-between">
        <div v-for="item in connectivityItems" :key="item.name" class="pp-flex pp-items-center pp-justify-between">
          <span class="pp-span-button">{{ item.name }}</span>
          <SmButton
            type="text"
            suffix-icon="arrow-go-forward"
            :href="item.href"
          >
            {{ item.ratesMapped }} of {{ item.totalRates }} rates mapped
          </SmButton>
        </div>
      </div>
    </SmCardContent>
  </SmCard>
</template>

<script setup>
import { ref } from 'vue'

const connectivityItems = ref([
  {
    name: 'Opera ADS',
    ratesMapped: 24,
    totalRates: 27,
    href: '#'
  },
  {
    name: 'SIHOT',
    ratesMapped: 18,
    totalRates: 27,
    href: '#'
  },
  {
    name: 'Opera eXchange Interface',
    ratesMapped: 27,
    totalRates: 27,
    href: '#'
  },
  {
    name: 'LMS',
    ratesMapped: 15,
    totalRates: 27,
    href: '#'
  }
])
</script>
