// Global component registration for prototyping convenience
// Register commonly-used SUI components here so you don't need to import them in every prototype

// ============================================================================
// CORE COMPONENTS
// ============================================================================
import SmIcon from '@sui-icons/app/sm-icon.vue'
import SmButton from '@sui/app/components/sm-button/sm-button.vue'
import SmBadge from '@sui/app/components/sm-badge/sm-badge.vue'
import SmCard from '@sui/app/components/sm-card/sm-card.vue'
import SmCardContent from '@sui/app/components/sm-card/sm-card-content.vue'
import SmCardActions from '@sui/app/components/sm-card/sm-card-actions.vue'
import SmTooltip from '@sui/app/components/sm-tooltip/sm-tooltip.vue'
import SmTag from '@sui/app/components/sm-tag/sm-tag.vue'
import SmTabs from '@sui/app/components/sm-tabs/sm-tabs.vue'
import SmTab from '@sui/app/components/sm-tabs/sm-tab.vue'
import SmPageTitle from '@sui/app/components/sm-page-title/sm-page-title.vue'
import SmList from '@sui/app/components/sm-list/sm-list.vue'
import SmListItem from '@sui/app/components/sm-list/sm-list-item.vue'
import SmHelpCard from '@sui/app/components/sm-help-card/sm-help-card.vue'
import SmHintCard from '@sui/app/components/sm-hint-card/sm-hint-card.vue'
import SmDivider from '@sui/app/components/sm-divider/sm-divider.vue'
import SmAccordion from '@sui/app/components/sm-accordion/sm-accordion.vue'
import SmTable from '@sui/app/components/sm-table/sm-table.vue'
import SmBanner from '@sui/app/components/sm-banner/sm-banner.vue'
import SmContainer from '@sui/app/components/sm-container/sm-container.vue'

// ============================================================================
// FORM COMPONENTS
// ============================================================================
import SmForm from '@sui/app/components/forms/sm-form/sm-form.vue'
import SmInput from '@sui/app/components/forms/sm-input/sm-input.vue'
import SmFormGroup from '@sui/app/components/forms/sm-form-group/sm-form-group.vue'
import SmSelect from '@sui/app/components/forms/sm-select/sm-select.vue'
import SmCheckbox from '@sui/app/components/forms/sm-checkbox/sm-checkbox.vue'
import SmSwitch from '@sui/app/components/forms/sm-switch/sm-switch.vue'
import SmRadioGroup from '@sui/app/components/forms/sm-radio/sm-radio-group.vue'
import SmRadio from '@sui/app/components/forms/sm-radio/sm-radio.vue'

// ============================================================================
// NAVIGATION COMPONENTS
// ============================================================================
import SmAside from '@sui/app/components/sm-aside/sm-aside.vue'
import SmAppHeader from '@sui/app/components/sm-app-header/sm-app-header.vue'
import SmAppHeaderLink from '@sui/app/components/sm-app-header/sm-app-header-link.vue'
import SmHorizontalNav from '@sui/app/components/sm-horizontal-nav/sm-horizontal-nav.vue'
import SmHorizontalNavItem from '@sui/app/components/sm-horizontal-nav/sm-horizontal-nav-item.vue'
import SmNav from '@sui/app/components/sm-nav/sm-nav.vue'
import SmNavItem from '@sui/app/components/sm-nav/sm-nav-item.vue'
import SmVerticalNav from '@sui/app/components/sm-vertical-nav/sm-vertical-nav.vue'
import SmVerticalNavSection from '@sui/app/components/sm-vertical-nav/sm-vertical-nav-section.vue'
import SmVerticalNavItem from '@sui/app/components/sm-vertical-nav/sm-vertical-nav-item.vue'
import SmPropertyMenu from '@sui/app/components/sm-property-menu/sm-property-menu.vue'
import SmUserMenu from '@sui/app/components/sm-user-menu/sm-user-menu.vue'

export default {
  install(app) {
    console.log('Installing global components plugin...')

    // ========================================================================
    // Register Core Components
    // ========================================================================
    app.component('SmButton', SmButton)
    app.component('SmBadge', SmBadge)
    app.component('SmCard', SmCard)
    app.component('SmCardContent', SmCardContent)
    app.component('SmCardActions', SmCardActions)
    app.component('SmIcon', SmIcon)
    app.component('SmTooltip', SmTooltip)
    app.component('SmTag', SmTag)
    app.component('SmTabs', SmTabs)
    app.component('SmTab', SmTab)
    app.component('SmPageTitle', SmPageTitle)
    app.component('SmList', SmList)
    app.component('SmListItem', SmListItem)
    app.component('SmHelpCard', SmHelpCard)
    app.component('SmHintCard', SmHintCard)
    app.component('SmDivider', SmDivider)
    app.component('SmAccordion', SmAccordion)
    app.component('SmTable', SmTable)
    app.component('SmBanner', SmBanner)
    app.component('SmContainer', SmContainer)

    // ========================================================================
    // Register Form Components
    // ========================================================================
    app.component('SmForm', SmForm)
    app.component('SmInput', SmInput)
    app.component('SmFormGroup', SmFormGroup)
    app.component('SmSelect', SmSelect)
    app.component('SmCheckbox', SmCheckbox)
    app.component('SmSwitch', SmSwitch)
    app.component('SmRadioGroup', SmRadioGroup)
    app.component('SmRadio', SmRadio)

    // ========================================================================
    // Register Navigation Components
    // ========================================================================
    app.component('SmAside', SmAside)
    app.component('SmAppHeader', SmAppHeader)
    app.component('SmAppHeaderLink', SmAppHeaderLink)
    app.component('SmHorizontalNav', SmHorizontalNav)
    app.component('SmHorizontalNavItem', SmHorizontalNavItem)
    app.component('SmNav', SmNav)
    app.component('SmNavItem', SmNavItem)
    app.component('SmVerticalNav', SmVerticalNav)
    app.component('SmVerticalNavSection', SmVerticalNavSection)
    app.component('SmVerticalNavItem', SmVerticalNavItem)
    app.component('SmPropertyMenu', SmPropertyMenu)
    app.component('SmUserMenu', SmUserMenu)

    console.log('Global components registered!')
  }
}
