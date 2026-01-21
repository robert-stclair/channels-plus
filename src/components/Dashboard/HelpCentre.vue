<template>
  <SmCard class="help-centre-card">
    <SmCardContent>
      <h3 class="promo-title">Help centre</h3>
      <p class="promo-description">
        24/7 access to all the training resources, videos and tours in one easy place.
      </p>
      <SmButton type="secondary" size="medium" class="pp-mt-16">
        Learn more →
      </SmButton>
    </SmCardContent>
  </SmCard>
</template>

<style scoped>
.help-centre-card {
  background: linear-gradient(135deg, #006ADD 0%, #0052A3 100%);
  color: white;
  position: relative;
  overflow: hidden;
}

.help-centre-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 150px;
  height: 150px;
  background-image: url('data:image/svg+xml;utf8,<svg width="150" height="150" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="120" r="60" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="100" r="40" fill="rgba(255,255,255,0.08)"/></svg>');
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
