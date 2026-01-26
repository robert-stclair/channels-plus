<template>
  <div class="carousel-content-container">
    <SmButton
      v-if="showPagination"
      type="text"
      @click="handleSlideNavigation(currentIndex - 1)"
    >
      <SmIcon name="arrow-left" />
    </SmButton>

    <section class="carousel-content">
      <slot />
    </section>

    <SmButton
      v-if="showPagination"
      type="text"
      @click="handleSlideNavigation(currentIndex + 1)"
    >
      <SmIcon name="arrow-right" />
    </SmButton>
  </div>

  <ul v-if="showPagination" class="carousel-pagination">
    <li v-for="(_, i) in count" :key="i">
      <button class="circle-button" @click="handleSlideNavigation(i)">
        <span
          class="circle"
          :class="{'circle--active': currentIndex === i}"
        />
      </button>
    </li>
  </ul>
</template>

<script setup>
import { computed } from 'vue'

const MAX_COUNT = 6

const currentIndex = defineModel('currentIndex', { required: true, type: Number })

const props = defineProps({
  totalItems: {
    type: Number,
    required: true
  }
})

const count = computed(() => Math.min(props.totalItems, MAX_COUNT))
const showPagination = computed(() => count.value > 1)

const handleSlideNavigation = (slideNumber) => {
  currentIndex.value = (slideNumber + count.value) % count.value
}
</script>

<style scoped>
.carousel-content-container {
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  text-align: center;
}

@media screen and (min-width: 1024px) {
  .carousel-content-container {
    gap: 16px;
  }
}

.carousel-content {
  height: 280px;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 16px;
  justify-content: center;
}

.carousel-pagination {
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 32px 0 0;
  padding: 0;
}

.circle-button {
  align-items: center;
  background: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 4px;
}

.circle {
  background-color: var(--color-app);
  border-radius: 50%;
  height: 8px;
  width: 8px;
}

.circle-button:hover .circle:not(.circle--active) {
  background-color: var(--color-app-dark);
  transition: background-color 0.2s ease;
}

.circle--active {
  background-color: var(--color-primary);
}
</style>
