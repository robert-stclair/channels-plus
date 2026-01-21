<template>
  <SmCard :show-border-on-top="false" class="pp-tile-container">
    <SmCardActions>
      <SmButton
        type="text"
        suffix-icon="arrow-go-forward"
        href="#"
      >
        Channel mix
      </SmButton>
    </SmCardActions>
    <SmCardContent>
      <div class="pp-tile-header-container">
        <div class="pp-flex pp-gap-8">
          <h2 class="pp-tile-header">Top channels</h2>
          <SmTooltip class="pp-text-grey-neu-dark" trigger="hover" placement="bottom" title="Top channels in the last 30 days">
            <SmIcon name="utility-information-alt" />
          </SmTooltip>
        </div>
      </div>

      <h3 class="pp-tile-header">Room nights booked in the last 30 days</h3>
    </SmCardContent>
  </SmCard>
</template>
