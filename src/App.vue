<template>
  <div class="app">
    <SmAppHeader
      logo="/sm-logo-app-colour.svg"
      page-title="SiteMinder"
      :is-tablet="true"
      v-model:nav-visible="tabletNavVisible"
    >
      <template #property-menu>
        <SmPropertyMenu>
          <template #label>
            <span>{{ selectedProperty }}</span>
          </template>
          <template #default>
            <SmVerticalNav>
              <SmVerticalNavItem
                label="Property settings"
                @click="handlePropertySettings"
              />
              <SmVerticalNavItem
                label="User management"
                @click="handleUserManagement"
              />
            </SmVerticalNav>
          </template>
        </SmPropertyMenu>
      </template>

      <template #notification>
        <SmUserMenu display-name="Notifications">
          <template #icon>
            <SmIcon name="social-notifications" />
          </template>
          <template #display-name>
            <SmIcon name="social-notifications" />
          </template>
          <div style="padding: 1rem;">
            <p>No new notifications</p>
          </div>
        </SmUserMenu>
      </template>

      <template #user-menu>
        <SmUserMenu display-name="John Doe">
          <template #icon>
            <SmIcon name="action-user" />
          </template>
          <SmVerticalNav>
            <SmVerticalNavItem label="My account" @click="handleMyAccount" />
            <SmVerticalNavItem label="Terms and conditions" @click="handleTerms" />
            <SmVerticalNavItem label="Support" @click="handleSupport" />
            <SmVerticalNavItem label="Logout" @click="handleLogout" />
          </SmVerticalNav>
        </SmUserMenu>
      </template>

      <template #nav>
        <SmHorizontalNav>
          <SmHorizontalNavItem label="Dashboard" />
          <SmHorizontalNavItem label="Rooms and rates" />
          <SmHorizontalNavItem label="Distribution" force-active-state="exact-active" />
          <SmHorizontalNavItem label="Direct booking" />
          <SmHorizontalNavItem label="Reservations" />
          <SmHorizontalNavItem label="Insights" />
          <SmHorizontalNavItem label="Payments" />
          <SmHorizontalNavItem label="Guest engagement" />
        </SmHorizontalNav>
      </template>
    </SmAppHeader>

    <div class="app-layout">
      <SmAside>
        <SmVerticalNav>
          <SmVerticalNavItem
            label="Inventory"
            :force-active-state="currentPage === 'inventory' ? 'exact-active' : 'in-active'"
            @click="currentPage = 'inventory'"
          />
          <SmVerticalNavItem
            label="Channels"
            :force-active-state="(isActive) => isActive ? 'exact-active' : 'in-active'"
          />
          <SmVerticalNavItem
            label="Demand Plus"
            :force-active-state="(isActive) => isActive ? 'exact-active' : 'in-active'"
          >
            <template #default>
              <SmVerticalNavItem
                label="Demand statements"
                :force-active-state="(isActive) => isActive ? 'exact-active' : 'in-active'"
              />
            </template>
          </SmVerticalNavItem>
          <SmVerticalNavItem
            label="Channels Plus"
            :force-active-state="currentPage === 'channels-connect' || currentPage === 'channels-network' ? 'active' : 'in-active'"
          >
            <template #default>
              <SmVerticalNavItem
                label="Channels Connect"
                :force-active-state="currentPage === 'channels-connect' ? 'exact-active' : 'in-active'"
                @click="currentPage = 'channels-connect'"
              />
              <SmVerticalNavItem
                label="Channels Network"
                :force-active-state="currentPage === 'channels-network' ? 'exact-active' : 'in-active'"
                @click="currentPage = 'channels-network'"
              />
            </template>
          </SmVerticalNavItem>
          <SmVerticalNavItem
            label="Yield rules"
            :force-active-state="(isActive) => isActive ? 'exact-active' : 'in-active'"
          />
          <SmVerticalNavItem
            label="Connectivities"
            :force-active-state="(isActive) => isActive ? 'exact-active' : 'in-active'"
          >
            <template #default>
              <SmVerticalNavItem
                label="Hotel PMS 1"
                :force-active-state="(isActive) => isActive ? 'exact-active' : 'in-active'"
              />
              <SmVerticalNavItem
                label="Hotel PMS 2"
                :force-active-state="(isActive) => isActive ? 'exact-active' : 'in-active'"
              />
            </template>
          </SmVerticalNavItem>
        </SmVerticalNav>
      </SmAside>

      <main class="app-main">
        <SmContainer full-width>
          <div class="pp-pt-48">
            <h1 class="mb-8">{{ getPageTitle() }}</h1>
            <p v-if="currentPage === 'channels-connect'">One place to easily set up and connect to multiple channels</p>
            <p v-if="currentPage === 'channels-network'">One place to easily reach high-value tour operators and travel professionals</p>

            <SmTabs v-if="currentPage === 'channels-connect'" v-model:activeTab="activeTab" class="pp-mt-48">
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
        </SmContainer>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tabletNavVisible = ref(false)
const selectedProperty = ref('A Park Hyatt Sydney')
const activeTab = ref(0)
const currentPage = ref('inventory')

const getPageTitle = () => {
  if (currentPage.value === 'inventory') return 'Inventory'
  if (currentPage.value === 'channels-connect') return 'Channels Connect'
  if (currentPage.value === 'channels-network') return 'Channels Network'
  return 'Inventory'
}

const handlePropertySettings = () => console.log('Property settings clicked')
const handleUserManagement = () => console.log('User management clicked')
const handleMyAccount = () => console.log('My account clicked')
const handleTerms = () => console.log('Terms clicked')
const handleSupport = () => console.log('Support clicked')
const handleLogout = () => console.log('Logout clicked')
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.app-layout {
  flex: 1;
  display: flex;
  overflow: hidden;
}

.app-main {
  flex: 1;
  overflow-y: auto;
}
</style>
