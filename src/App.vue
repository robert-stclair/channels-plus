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
      <SmAside class="app-aside">
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
            :suffix-badge="!channelsPlusClicked && channelsConnectState === 'upsell' && channelsNetworkState === 'upsell' ? { text: 'New', config: { lightThemeType: 'success' } } : null"
            @click="handleChannelsPlusClick"
          >
            <template #default>
              <SmVerticalNavItem
                label="Channels Connect"
                :force-active-state="currentPage === 'channels-connect' ? 'exact-active' : 'in-active'"
                @click="handleChannelsConnectClick"
              />
              <SmVerticalNavItem
                label="Channels Network"
                :force-active-state="currentPage === 'channels-network' ? 'exact-active' : 'in-active'"
                :suffix-badge="!channelsNetworkClicked && channelsConnectState === 'active' && channelsNetworkState === 'upsell' ? { text: 'New', config: { lightThemeType: 'success' } } : null"
                @click="handleChannelsNetworkClick"
              />
              <SmVerticalNavItem
                v-if="channelsConnectState === 'active' && channelsNetworkState === 'upsell'"
                label="Settings"
                :force-active-state="currentPage === 'channels-plus-settings' ? 'exact-active' : 'in-active'"
                @click="currentPage = 'channels-plus-settings'"
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
            <InventoryView v-if="currentPage === 'inventory'" />
            <ChannelsConnectView
              v-if="currentPage === 'channels-connect'"
              :state="channelsConnectState"
            />
            <ChannelsNetworkView
              v-if="currentPage === 'channels-network'"
              :state="channelsNetworkState"
            />
            <ChannelsPlusSettingsView v-if="currentPage === 'channels-plus-settings'" />
          </div>
        </SmContainer>
      </main>
    </div>

    <!-- Settings Panel -->
    <transition name="slide-up">
      <div v-if="settingsPanelVisible" class="settings-panel">
        <SmCard>
          <SmCardContent>
            <div style="padding: 16px;">
              <div class="pp-flex pp-justify-between pp-items-center pp-mb-16">
                <h3 class="pp-mb-0">Prototype Settings</h3>
                <SmButton type="text" size="small" @click="settingsPanelVisible = false">
                  <SmIcon name="action-close" />
                </SmButton>
              </div>

              <div class="pp-mb-12">
                <p class="pp-mb-8" style="font-size: 12px; color: #717171;">Press <strong>~</strong> (tilda) to toggle this panel</p>
              </div>

              <div>
                <label class="pp-mb-4" style="display: block; font-weight: 600; font-size: 13px;">Product State</label>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                  <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                    <input
                      type="radio"
                      name="productState"
                      :checked="channelsConnectState === 'upsell' && channelsNetworkState === 'upsell'"
                      @change="() => { channelsConnectState = 'upsell'; channelsNetworkState = 'upsell'; }"
                    />
                    <span style="font-size: 13px;">New to C+</span>
                  </label>
                  <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                    <input
                      type="radio"
                      name="productState"
                      :checked="channelsConnectState === 'active' && channelsNetworkState === 'upsell'"
                      @change="() => { channelsConnectState = 'active'; channelsNetworkState = 'upsell'; }"
                    />
                    <span style="font-size: 13px;">Active C+, new to wholesalers</span>
                  </label>
                </div>
              </div>
            </div>
          </SmCardContent>
        </SmCard>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import InventoryView from './views/InventoryView.vue'
import ChannelsConnectView from './views/ChannelsConnectView.vue'
import ChannelsNetworkView from './views/ChannelsNetworkView.vue'
import ChannelsPlusSettingsView from './views/ChannelsPlusSettingsView.vue'

const tabletNavVisible = ref(false)
const selectedProperty = ref('A Park Hyatt Sydney')
const currentPage = ref('inventory')
const settingsPanelVisible = ref(false)

// Product states: 'upsell' or 'active'
const channelsConnectState = ref('upsell')
const channelsNetworkState = ref('upsell')

// Track badge clicks for this session
const channelsPlusClicked = ref(false)
const channelsNetworkClicked = ref(false)

// Reset badge visibility when states change
watch([channelsConnectState, channelsNetworkState], () => {
  channelsPlusClicked.value = false
  channelsNetworkClicked.value = false
  currentPage.value = 'inventory'
})

const handlePropertySettings = () => console.log('Property settings clicked')
const handleUserManagement = () => console.log('User management clicked')
const handleMyAccount = () => console.log('My account clicked')
const handleTerms = () => console.log('Terms clicked')
const handleSupport = () => console.log('Support clicked')
const handleLogout = () => console.log('Logout clicked')

// Handle clicks on nav items with badges
const handleChannelsPlusClick = () => {
  channelsPlusClicked.value = true
}

const handleChannelsConnectClick = () => {
  currentPage.value = 'channels-connect'
  channelsPlusClicked.value = true
}

const handleChannelsNetworkClick = () => {
  currentPage.value = 'channels-network'
  channelsNetworkClicked.value = true
}

// Toggle settings panel with tilda key
const handleKeyPress = (event) => {
  if (event.key === '`' || event.key === '~') {
    settingsPanelVisible.value = !settingsPanelVisible.value
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyPress)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyPress)
})
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

/* Wider aside for badge support */
.app-aside :deep(.sm-aside__content) {
  width: 230px !important;
  min-width: 230px !important;
  max-width: 230px !important;
}

/* Prevent badge wrapping in nav items */
.app-aside :deep(.sm-vertical-nav-item__label) {
  white-space: nowrap;
  overflow: visible;
}

/* Settings Panel */
.settings-panel {
  position: fixed;
  bottom: 24px;
  left: 24px;
  width: 360px;
  z-index: 9999;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
}

/* Slide up transition */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}

.slide-up-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
