<template>
  <SmCard
    :show-border-on-top="false"
    class="pp-flex pp-tile-container"
  >
    <SmCardContent class="pp-flex pp-flex-col">
      <div class="pp-tile-header-container">
        <h2 class="pp-tile-header">
          {{ totalOffers === 1 ? 'Channel offer' : 'Channel offers' }}
        </h2>
      </div>

      <Carousel
        v-model:current-index="currentIndex"
        :total-items="totalOffers"
      >
        <template #default>
          <img
            v-if="currentOffer.logoImg"
            :src="currentOffer.logoImg"
            class="channel-offer__image"
            :alt="currentOffer.name"
          />

          <strong class="truncate truncate-2-lines">{{ currentOffer.headline }}</strong>

          <p class="truncate truncate-5-lines">{{ currentOffer.description }}</p>

          <SmButton
            type="tertiary"
            size="small"
            @click="handleViewOffer"
          >
            View offer
          </SmButton>
        </template>
      </Carousel>
    </SmCardContent>
  </SmCard>
</template>

<script setup>
import { ref, computed } from 'vue'
import Carousel from './channel-offers/Carousel.vue'
import BDCLogo from './channel-offers/images/bdc-logo.jpg'
import EXPLogo from './channel-offers/images/exp-logo.svg'

const currentIndex = ref(0)

const offers = ref([
  {
    name: 'BDC',
    logoImg: BDCLogo,
    headline: 'Getaway Deal 2025: Boost Your Bookings',
    description: 'Join Getaway Deal 2025 to boost bookings and revenue. Offer 20% off in Asia or 15% elsewhere and boost your property\'s revenue and visibility to guests on Booking.com.'
  },
  {
    name: 'EXP',
    logoImg: EXPLogo,
    headline: 'Stay Price Competitive',
    description: 'Automatic rate match helps properties stay competitive by aligning rates across OTAs, boosting visibility, bookings, and revenue'
  }
])

const totalOffers = computed(() => offers.value.length)
const currentOffer = computed(() => offers.value[currentIndex.value])

const handleViewOffer = () => {
  // In production this would open a dialog with more details
  console.log('View offer:', currentOffer.value.name)
}
</script>

<style scoped>
.channel-offer__image {
  max-width: 100%;
  min-height: 0;
}

@media screen and (min-width: 1024px) {
  .channel-offer__image {
    padding: 0 20px;
  }
}

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  flex-shrink: 0;
  overflow-wrap: anywhere;
}

.truncate-2-lines {
  -webkit-line-clamp: 2;
  line-clamp: 2;
}

.truncate-5-lines {
  -webkit-line-clamp: 5;
  line-clamp: 5;
}
</style>
