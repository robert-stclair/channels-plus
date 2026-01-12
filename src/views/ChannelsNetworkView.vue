<template>
  <div style="max-width: 1024px;">
    <!-- Header with CTA -->
    <div class="pp-flex pp-justify-between pp-items-center pp-mb-24">
      <h1 class="pp-mb-0">Channels Network</h1>
      <SmButton type="secondary" size="medium">
        Get started
      </SmButton>
    </div>

    <!-- Subtitle -->
    <p class="pp-mb-48 sm-h4">One place to easily reach high-value tour operators and travel professionals</p>

    <!-- Main Content: Two Column Layout -->
    <div style="display: grid; grid-template-columns: 1.4fr 0.6fr; gap: 64px; margin-bottom: 64px;">
      <!-- Left Column: Benefits -->
      <div>
        <!-- Benefit 1 -->
        <div class="pp-flex pp-mb-24" style="gap: 16px;">
          <div style="flex-shrink: 0; width: 24px; height: 24px;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_437_213435)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.54545 7.09091C1.58735 7.09091 0 5.50355 0 3.54545C0 1.58735 1.58735 0 3.54545 0C5.50355 0 7.09091 1.58735 7.09091 3.54545C7.09091 5.50355 5.50355 7.09091 3.54545 7.09091ZM3.54545 4.90909C4.29857 4.90909 4.90909 4.29857 4.90909 3.54545C4.90909 2.79234 4.29857 2.18182 3.54545 2.18182C2.79234 2.18182 2.18182 2.79234 2.18182 3.54545C2.18182 4.29857 2.79234 4.90909 3.54545 4.90909ZM20.4545 7.09091C18.4964 7.09091 16.9091 5.50355 16.9091 3.54545C16.9091 1.58735 18.4964 0 20.4545 0C22.4126 0 24 1.58735 24 3.54545C24 5.50355 22.4126 7.09091 20.4545 7.09091ZM20.4545 4.90909C21.2077 4.90909 21.8182 4.29857 21.8182 3.54545C21.8182 2.79234 21.2077 2.18182 20.4545 2.18182C19.7014 2.18182 19.0909 2.79234 19.0909 3.54545C19.0909 4.29857 19.7014 4.90909 20.4545 4.90909ZM16.9091 20.4545C16.9091 22.4126 18.4964 24 20.4545 24C22.4126 24 24 22.4126 24 20.4545C24 18.4964 22.4126 16.9091 20.4545 16.9091C18.4964 16.9091 16.9091 18.4964 16.9091 20.4545ZM21.8182 20.4545C21.8182 21.2077 21.2077 21.8182 20.4545 21.8182C19.7014 21.8182 19.0909 21.2077 19.0909 20.4545C19.0909 19.7014 19.7014 19.0909 20.4545 19.0909C21.2077 19.0909 21.8182 19.7014 21.8182 20.4545ZM3.54545 24C1.58735 24 0 22.4126 0 20.4545C0 18.4964 1.58735 16.9091 3.54545 16.9091C5.50355 16.9091 7.09091 18.4964 7.09091 20.4545C7.09091 22.4126 5.50355 24 3.54545 24ZM3.54545 21.8182C4.29857 21.8182 4.90909 21.2077 4.90909 20.4545C4.90909 19.7014 4.29857 19.0909 3.54545 19.0909C2.79234 19.0909 2.18182 19.7014 2.18182 20.4545C2.18182 21.2077 2.79234 21.8182 3.54545 21.8182ZM16.8147 2.14715C17.0241 1.58223 16.736 0.954496 16.171 0.745067C14.8472 0.254297 13.4403 0 12 0C10.5438 0 9.12175 0.259951 7.78535 0.761329C7.22125 0.972963 6.93552 1.60182 7.14716 2.16592C7.35879 2.73002 7.98765 3.01575 8.55175 2.80411C9.64401 2.39433 10.8066 2.18182 12 2.18182C13.1804 2.18182 14.3306 2.38971 15.4126 2.79083C15.9776 3.00026 16.6053 2.71208 16.8147 2.14715ZM2.1848 7.10917C1.62153 6.89534 0.991565 7.17861 0.777734 7.74188C0.265658 9.09079 0 10.5279 0 12C0 13.4464 0.256453 14.8591 0.751269 16.1877C0.961542 16.7523 1.58971 17.0396 2.15432 16.8293C2.71892 16.619 3.00617 15.9909 2.7959 15.4263C2.39147 14.3403 2.18182 13.1854 2.18182 12C2.18182 10.7935 2.39899 9.61872 2.81752 8.51623C3.03135 7.95296 2.74807 7.323 2.1848 7.10917ZM7.15245 21.8367C6.94112 22.4009 7.22719 23.0296 7.7914 23.2409C9.12606 23.7408 10.546 24 12 24C13.4514 24 14.8688 23.7418 16.2014 23.2436C16.7658 23.0327 17.0522 22.4041 16.8413 21.8398C16.6303 21.2754 16.0018 20.989 15.4374 21.1999C14.3483 21.6071 13.1895 21.8182 12 21.8182C10.8084 21.8182 9.64753 21.6063 8.55669 21.1977C7.99248 20.9864 7.36378 21.2725 7.15245 21.8367ZM23.2508 16.1821C23.0409 16.7468 22.4128 17.0343 21.8481 16.8244C21.2834 16.6144 20.9958 15.9863 21.2058 15.4216C21.6091 14.337 21.8182 13.1837 21.8182 12C21.8182 10.8048 21.605 9.64054 21.1941 8.54687C20.9821 7.98288 21.2675 7.35388 21.8315 7.14194C22.3955 6.93001 23.0245 7.2154 23.2364 7.77938C23.7393 9.1175 24 10.5416 24 12C24 13.4443 23.7443 14.8551 23.2508 16.1821ZM8.72727 9.81818C8.72727 9.21569 9.21569 8.72727 9.81818 8.72727H14.1818C14.7843 8.72727 15.2727 9.21569 15.2727 9.81818V14.1818C15.2727 14.7843 14.7843 15.2727 14.1818 15.2727H9.81818C9.21569 15.2727 8.72727 14.7843 8.72727 14.1818V9.81818ZM10.9091 10.9091V13.0909H13.0909V10.9091H10.9091Z" fill="#006ADD"/>
              </g>
              <defs>
                <clipPath id="clip0_437_213435">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <p class="pp-mb-8" style="font-weight: 600;">Access B2B distribution networks</p>
            <p class="pp-mb-0">Connect with tour operators and travel agencies actively seeking quality properties for their clients.</p>
          </div>
        </div>

        <!-- Benefit 2 -->
        <div class="pp-flex pp-mb-24" style="gap: 16px;">
          <div style="flex-shrink: 0; width: 24px; height: 24px;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_437_213441)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.7179C0 4.21291 1.21828 3 2.73082 3H21.2692C22.7729 3 24 4.22284 24 5.7179V18.2215C24 19.7265 22.7817 20.9394 21.2692 20.9394H2.73082C1.2271 20.9394 0 19.7166 0 18.2215V5.7179ZM2.18182 10.8442V18.2215C2.18182 18.5099 2.43039 18.7576 2.73082 18.7576H21.2692C21.5789 18.7576 21.8182 18.5193 21.8182 18.2215V10.8442H2.18182ZM2.18182 7.46753H21.8182V5.7179C21.8182 5.42953 21.5696 5.18182 21.2692 5.18182H2.73082C2.42112 5.18182 2.18182 5.42006 2.18182 5.7179V7.46753ZM4.90909 17H6C6.60249 17 7.09091 16.5116 7.09091 15.9091C7.09091 15.3066 6.60249 14.8182 6 14.8182H4.90909C4.3066 14.8182 3.81818 15.3066 3.81818 15.9091C3.81818 16.5116 4.3066 17 4.90909 17ZM13.0909 17H9.81818C9.21569 17 8.72727 16.5116 8.72727 15.9091C8.72727 15.3066 9.21569 14.8182 9.81818 14.8182H13.0909C13.6934 14.8182 14.1818 15.3066 14.1818 15.9091C14.1818 16.5116 13.6934 17 13.0909 17Z" fill="#006ADD"/>
              </g>
              <defs>
                <clipPath id="clip0_437_213441">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <p class="pp-mb-8" style="font-weight: 600;">Increase group bookings</p>
            <p class="pp-mb-0">Attract larger bookings from travel professionals managing group travel and extended stays.</p>
          </div>
        </div>

        <!-- Benefit 3 -->
        <div class="pp-flex pp-mb-24" style="gap: 16px;">
          <div style="flex-shrink: 0; width: 24px; height: 24px;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_437_213447)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 22.2564V2.73094C4 1.2221 5.25419 0 6.80444 0H17.9956C19.5448 0 20.8 1.22102 20.8 2.73094V22.2564C20.8 23.7068 19.4177 24.4567 18.1456 23.7018L12.769 20.5114C12.5999 20.411 12.2006 20.4107 12.031 20.5114L6.65442 23.7018C5.38552 24.4548 4 23.7083 4 22.2564ZM6.24 21.3928L10.8656 18.648C11.7515 18.1223 13.0501 18.1232 13.9344 18.648L18.56 21.3928V2.73094C18.56 2.42671 18.3084 2.18192 17.9956 2.18192H6.80444C6.49149 2.18192 6.24 2.42697 6.24 2.73094V21.3928ZM8.80804 9.59268C9.24543 9.16664 9.95457 9.16664 10.392 9.59268L11.84 11.0032L14.968 7.95625C15.4054 7.5302 16.1146 7.5302 16.552 7.95625C16.9893 8.38229 16.9893 9.07305 16.552 9.49909L12.632 13.3174C12.4133 13.5305 12.1266 13.637 11.84 13.637C11.5534 13.637 11.2667 13.5305 11.048 13.3174L8.80804 11.1355C8.37065 10.7095 8.37065 10.0187 8.80804 9.59268Z" fill="#006ADD"/>
              </g>
              <defs>
                <clipPath id="clip0_437_213447">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <p class="pp-mb-8" style="font-weight: 600;">Centralised management</p>
            <p class="pp-mb-0">Manage all B2B channel connections, rates, and availability from one platform.</p>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="pp-flex pp-mt-48" style="gap: 16px;">
          <SmButton type="secondary" size="medium">
            Get started
          </SmButton>
          <SmButton type="text" size="medium">
            See how it works
            <template #suffix-icon>
              <SmIcon name="utility-video-play" />
            </template>
          </SmButton>
        </div>
      </div>

      <!-- Right Column: Visual -->
      <div>
        <div style="position: relative; display: flex; align-items: center; justify-content: center; min-height: 320px; background: linear-gradient(135deg, #e6f2ff 0%, #f5f9ff 100%); border-radius: 8px; padding: 32px; overflow: hidden;">
          <!-- Decorative circles -->
          <div style="position: absolute; top: 20px; right: 30px; width: 60px; height: 60px; border-radius: 50%; background: rgba(0, 106, 221, 0.1);"></div>
          <div style="position: absolute; bottom: 30px; left: 40px; width: 40px; height: 40px; border-radius: 50%; background: rgba(0, 106, 221, 0.15);"></div>

          <div style="text-align: center; position: relative; z-index: 1;">
            <div style="position: relative; display: inline-block; margin-bottom: 24px;">
              <SmIcon name="utility-globe" style="font-size: 80px; color: #006add;" />
              <div style="position: absolute; top: -8px; right: -8px; width: 24px; height: 24px; background: #4caf50; border-radius: 50%; border: 3px solid white;"></div>
            </div>
            <p class="sm-h4 pp-mb-8" style="color: #006add;">Channels Network</p>
            <p class="pp-mb-0 pp-text-grey-neu-dark">Connect to B2B travel distribution</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Social Proof Section -->
    <div style="text-align: center; margin-bottom: 24px;">
      <p class="pp-mb-8 sm-h4">Trusted by leading properties worldwide</p>
      <p class="pp-mb-0 pp-text-grey-neu-dark">See how Channels Network has helped others:</p>
    </div>

    <!-- Testimonial Card -->
    <SmCard class="pp-mb-48" style="background: #f5f9ff; border-top: 4px solid #006add;">
      <SmCardContent>
        <div class="pp-flex pp-items-center" style="padding: 24px; min-height: 140px;">
          <!-- Left Arrow -->
          <div style="flex-shrink: 0;">
            <SmButton type="text" size="large">
              <SmIcon name="arrow-left" style="color: #006add; font-size: 20px;" />
            </SmButton>
          </div>

          <!-- Content -->
          <div style="flex-grow: 1; margin: 0 24px; text-align: center;">
            <!-- Header with Image and Name -->
            <div style="text-align: center; margin-bottom: 32px;">
              <p class="pp-mb-0" style="font-weight: 600;">Villa Varosh</p>
              <p class="pp-mb-0 pp-text-grey-neu-dark" style="font-size: 14px;">Ohrid, Macedonia</p>
            </div>

            <!-- Testimonial Quote -->
            <div>
              <p class="pp-mb-0">
                "The <strong>connection with B2B networks is seamless</strong>. We can reach tour operators and travel agencies that were previously difficult to access. This has opened up new revenue streams for our property."
              </p>
            </div>
          </div>

          <!-- Right Arrow -->
          <div style="flex-shrink: 0;">
            <SmButton type="text" size="large">
              <SmIcon name="arrow-right" style="color: #006add; font-size: 20px;" />
            </SmButton>
          </div>
        </div>
      </SmCardContent>
    </SmCard>

  </div>
</template>

<script setup>
defineProps({
  state: {
    type: String,
    default: 'upsell'
  }
})
</script>
