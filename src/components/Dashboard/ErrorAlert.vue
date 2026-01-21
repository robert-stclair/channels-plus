<template>
  <SmCard :show-border-on-top="false" class="pp-tile-container error-alert-card">
    <SmCardContent>
      <div class="error-alert-content">
        <div class="error-icon-container">
          <img :src="errorIcon" alt="Error" class="error-icon" />
        </div>
        <p class="error-message">
          An error has occurred. Please reload this page or try again later.
        </p>
      </div>
    </SmCardContent>
  </SmCard>
</template>

<script setup>
import errorIcon from './images/errored.svg'
</script>

<style scoped>
.error-alert-card {
  background-color: #fff;
}

.error-alert-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3px;
  text-align: left;
}

.error-icon-container {
  margin-bottom: 3px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.error-icon {
  width: 120px;
  height: 120px;
  display: block;
}

.error-message {
  font-size: 14px;
  line-height: 1.5;
  color: #333;
  margin: 0;
}
</style>
