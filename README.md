# Platform Property Prototypes

A simplified SUI Vue3 prototyping environment for Platform Property, based on the ux-prototypes-sui setup.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3003`

## Project Structure

```
pp-proto/
├── src/
│   ├── plugins/
│   │   └── global-components.js  # Globally registered SUI components
│   ├── shared/
│   │   └── styles/               # Global styles
│   ├── App.vue                   # Main app with navigation
│   └── main.js                   # App entry point
├── index.html
├── package.json
└── vite.config.js
```

The app loads directly into the Channels Plus prototype with full navigation. Edit [src/App.vue](src/App.vue) to modify the interface.

## Channels Plus Prototype

The prototype includes a complete implementation of the Channels Plus interface with:

### Tabs
- **Performance**: Metrics widgets showing bookings, revenue, and ADR with performance cards
- **Room Rates**: Filter controls and room rate management with checkboxes
- **Setup**: Configuration cards for channel connections, rate settings, and inventory
- **Special Offers**: Table view with offer management and status filters
- **Optimise**: Recommended actions list with apply/dismiss options

All tabs use existing SUI components without custom styling.

## Available SUI Components

The following SUI components are globally registered and available without imports:

### Core Components
- `SmButton`
- `SmBadge`
- `SmCard`, `SmCardContent`, `SmCardActions`
- `SmIcon`
- `SmTooltip`
- `SmTag`
- `SmTabs`, `SmTab`
- `SmPageTitle`
- `SmList`, `SmListItem`
- `SmHelpCard`
- `SmHintCard`
- `SmDivider`
- `SmAccordion`
- `SmTable`
- `SmBanner`

### Form Components
- `SmForm`
- `SmInput`
- `SmFormGroup`
- `SmSelect`
- `SmCheckbox`
- `SmSwitch`
- `SmRadioGroup`, `SmRadio`

### Navigation Components
- `SmAside`
- `SmAppHeader`, `SmAppHeaderLink`
- `SmHorizontalNav`, `SmHorizontalNavItem`
- `SmNav`, `SmNavItem`
- `SmVerticalNav`, `SmVerticalNavSection`, `SmVerticalNavItem`
- `SmPropertyMenu`
- `SmUserMenu`

To add more components, edit [src/plugins/global-components.js](src/plugins/global-components.js)

## Aliases

The following import aliases are configured:
- `@` - points to `src/`
- `@sui` - points to SUI core components
- `@sui-icons` - points to SUI icons
- `lodash` - auto-resolves to `lodash-es`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
