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
            <InventoryView v-if="currentPage === 'inventory'" />
            <ChannelsConnectView v-if="currentPage === 'channels-connect'" />
            <ChannelsNetworkView v-if="currentPage === 'channels-network'" />
          </div>
        </SmContainer>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InventoryView from './views/InventoryView.vue'
import ChannelsConnectView from './views/ChannelsConnectView.vue'
import ChannelsNetworkView from './views/ChannelsNetworkView.vue'

const tabletNavVisible = ref(false)
const selectedProperty = ref('A Park Hyatt Sydney')
const currentPage = ref('inventory')

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
