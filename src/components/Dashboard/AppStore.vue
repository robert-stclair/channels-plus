<template>
  <SmCard class="app-store-card">
    <SmCardContent>
      <h3 class="promo-title">SiteMinder hotel app store</h3>
      <p class="promo-description">
        Apps and integrations to optimise your business.
      </p>
      <SmButton type="secondary" size="medium" class="pp-mt-16">
        Learn more →
      </SmButton>
    </SmCardContent>
  </SmCard>
</template>

<style scoped>
.app-store-card {
  background: linear-gradient(135deg, #1E88E5 0%, #1565C0 100%);
  color: white;
  position: relative;
  overflow: hidden;
}

.app-store-card::after {
  content: '';
  position: absolute;
  bottom: -20px;
  right: -20px;
  width: 180px;
  height: 180px;
  background-image: url('data:image/svg+xml;utf8,<svg width="180" height="180" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="100" width="60" height="60" fill="rgba(255,255,255,0.1)" rx="8"/><rect x="130" y="70" width="40" height="40" fill="rgba(255,255,255,0.08)" rx="6"/><rect x="80" y="130" width="50" height="50" fill="rgba(255,255,255,0.06)" rx="7"/></svg>');
  background-position: bottom right;
  background-repeat: no-repeat;
  pointer-events: none;
}

.promo-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 12px;
  color: white;
  position: relative;
  z-index: 1;
}

.promo-description {
  font-size: 14px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  position: relative;
  z-index: 1;
}
</style>
