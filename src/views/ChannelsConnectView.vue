<template>
  <div>
    <h1 class="mb-8">Channels Connect</h1>
    <p>One place to easily set up and connect to multiple channels</p>

    <SmTabs v-model:activeTab="activeTab" class="pp-mt-48">
      <SmTab label="Performance">
        <!-- Performance Tab -->
        <div class="pp-mt-48">
          <h3 class="pp-mb-12">Performance for the past 12 months</h3>

          <SmCard class="pp-mb-24">
            <SmCardContent>
              <div class="divide pp-grid pp-grid-cols-3">
                <div>
                  <p class="pp-flex pp-flex-row pp-items-center pp-mb-8 pp-text-grey-neu-dark">
                    <span class="pp-mr-8">Total booking amount</span>
                    <SmIcon name="utility-information-alt" style="font-size: 16px;" />
                  </p>
                  <span class="pp-mb-0 sm-h3">AUD 4,545.00</span>
                </div>
                <div>
                  <p class="pp-flex pp-flex-row pp-items-center pp-mb-8 pp-text-grey-neu-dark">
                    <span class="pp-mr-8">Net booking amount</span>
                    <SmIcon name="utility-information-alt" style="font-size: 16px;" />
                  </p>
                  <span class="pp-mb-0 sm-h3">AUD 4,500.00</span>
                </div>
                <div>
                  <p class="pp-flex pp-flex-row pp-items-center pp-mb-8 pp-text-grey-neu-dark">
                    <span class="pp-mr-8">Commission rate</span>
                    <SmIcon name="utility-information-alt" style="font-size: 16px;" />
                  </p>
                  <span class="pp-mb-0 sm-h3">12%</span>
                </div>
              </div>
            </SmCardContent>
          </SmCard>

          <div class="pp-gap-24 pp-grid pp-grid-cols-3">
            <SmCard class="pp-h-full">
              <SmCardContent>
                <div class="pp-flex pp-justify-between pp-items-center pp-mb-4">
                  <p class="pp-mb-0 sm-h4">Reservations</p>
                  <SmIcon name="arrow-go-forward" class="pp-text-primary-blue" style="font-size: 20px;" />
                </div>
                <div>
                  <p class="pp-mb-0 sm-h3">3</p>
                  <span class="pp-text-grey-neu-dark">total completed reservations</span>
                </div>
              </SmCardContent>
            </SmCard>

            <SmCard class="pp-h-full">
              <SmCardContent>
                <div class="pp-flex pp-justify-between pp-items-center pp-mb-4">
                  <p class="pp-mb-0 sm-h4">Channels</p>
                  <SmIcon name="arrow-go-forward" class="pp-text-primary-blue" style="font-size: 20px;" />
                </div>
                <div>
                  <p class="pp-mb-0 sm-h3">18 of 169</p>
                  <span class="pp-text-grey-neu-dark">active channels</span>
                </div>
              </SmCardContent>
            </SmCard>

            <SmCard class="pp-h-full">
              <SmCardContent>
                <div class="pp-flex pp-justify-between pp-items-center pp-mb-4">
                  <p class="pp-mb-0 sm-h4">Room Rates</p>
                  <SmIcon name="arrow-go-forward" class="pp-text-primary-blue" style="font-size: 20px;" />
                </div>
                <div>
                  <p class="pp-mb-0 sm-h3">2 of 27</p>
                  <span class="pp-text-grey-neu-dark">active room rates</span>
                </div>
              </SmCardContent>
            </SmCard>
          </div>

          <SmHintCard class="pp-mt-24" title="Suggested actions available" body="Review opportunities to optimise your listing.">
            <template #action>
              <SmButton type="text" size="medium">
                View
                <template #suffix-icon>
                  <SmIcon name="arrow-go-forward" />
                </template>
              </SmButton>
            </template>
          </SmHintCard>
        </div>
      </SmTab>

      <SmTab label="Reconciliation">
        <div class="pp-mt-48">
          <p>Reconciliation content</p>
        </div>
      </SmTab>

      <SmTab label="Channels">
        <div class="pp-mt-48">
          <p>Channels content</p>
        </div>
      </SmTab>

      <SmTab label="Room Rates">
        <div class="pp-mt-48">
          <p>Room Rates content</p>
        </div>
      </SmTab>

      <SmTab label="Special Offers">
        <div class="pp-mt-48">
          <p>Special Offers content</p>
        </div>
      </SmTab>

      <SmTab label="Optimise">
        <div class="pp-mt-48">
          <p>Optimise content</p>
        </div>
      </SmTab>

      <SmTab label="Setup">
        <div class="pp-mt-48">
          <p>Setup content</p>
        </div>
      </SmTab>
    </SmTabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref(0)
</script>
