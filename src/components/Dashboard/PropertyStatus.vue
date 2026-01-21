<template>
  <SmCard :show-border-on-top="false" class="pp-tile-container">
    <SmCardActions>
      <SmButton
        type="text"
        :disabled="true"
        shape="square"
      >
        <SmIcon
          name="utility-warning"
          class="pp-property-status-icon pp-text-app-warning"
        />
      </SmButton>
    </SmCardActions>
    <SmCardContent>
      <div class="pp-tile-header-container">
        <div class="pp-flex pp-gap-8">
          <h2 class="pp-tile-header">Property status</h2>
          <SmTooltip class="pp-text-grey-neu-dark" trigger="hover" placement="bottom" title="The overall status of the property">
            <SmIcon name="utility-information-alt" />
          </SmTooltip>
        </div>
      </div>

      <div class="pp-flex pp-flex-col pp-justify-between">
        <div v-for="item in statusItems" :key="item.label" class="status-item pp-flex pp-items-center pp-justify-between">
          <SmButton
            v-if="item.hasLink"
            type="text"
            suffix-icon="arrow-go-forward"
            :href="item.href"
            class="status-link"
          >
            {{ item.label }}
          </SmButton>
          <span v-else class="pp-span-button">{{ item.label }}</span>
          <span
            class="pp-px-8 pp-rounded-full"
            :class="item.badgeClass"
          >
            {{ item.count }}
          </span>
        </div>
      </div>
    </SmCardContent>
  </SmCard>
</template>

<script setup>
import { ref } from 'vue'

const statusItems = ref([
  {
    label: 'Unconfirmed reservations requiring action',
    count: 0,
    hasLink: true,
    href: '#',
    badgeClass: 'notice success'
  },
  {
    label: 'Reservation delivery failures today',
    count: 0,
    hasLink: true,
    href: '#',
    badgeClass: 'notice success'
  },
  {
    label: 'Channels experiencing delayed updates',
    count: 0,
    hasLink: false,
    badgeClass: 'notice success'
  },
  {
    label: 'Disabled channel room rates',
    count: 3,
    hasLink: true,
    href: '#',
    badgeClass: 'notice info'
  }
])
</script>

<style scoped>
.pp-tile-header-container {
  margin-bottom: 16px;
}

.pp-span-button {
  padding: 6px 0;
}

.status-link {
  margin-left: -10px;
}
</style>
