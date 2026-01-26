<template>
  <SmCard :show-border-on-top="false" class="pp-tile-container">
    <SmCardContent>
      <div class="pp-tile-header-container pp-flex pp-items-center pp-gap-8">
        <img :src="smartGuideIcon" alt="Smart guide" class="smart-guide-icon" />
        <h2 class="pp-tile-header">Smart guide</h2>
      </div>

      <div class="pp-tile-header-container">
        <div class="pp-flex">
          Complete all the tasks to get your property set up and ready to start selling rooms.
        </div>
        <SmProgressBar
          class="pp-flex pp-w-full pp-mt-12"
          :percentage="completedPercentage"
        />
      </div>

      <div class="tasks-list">
        <div
          v-for="task in tasks"
          :key="task.id"
          class="task-card"
          :class="{
            'task-card-disabled': task.isCompleted || task.isLocked,
            'task-card-default': !task.isCompleted && !task.isLocked
          }"
        >
          <div class="task-details">
            <div class="task-status-wrapper">
              <div v-if="!task.isCompleted" class="task-status" />
              <SmIcon
                v-else
                height="12px"
                width="12px"
                class="task-status-completed"
                name="action-checkmark"
              />
            </div>
            <div class="task-description">
              <div class="task-title">
                <h6>{{ task.title }}</h6>
                <SmBadge v-if="task.isNew" type="alert" size="medium">New</SmBadge>
              </div>
              <span class="task-subtitle">{{ task.description }}</span>
            </div>
          </div>
          <div class="task-actions">
            <SmTag v-if="task.isCompleted" type="success" size="small">Done</SmTag>
            <SmTooltip
              v-if="task.isLocked"
              trigger="hover"
              placement="bottom"
              :show-on-top="true"
            >
              <div class="pp-flex">
                <SmIcon name="action-lock" />
              </div>
              <template #content>
                <div>Required task: <strong>{{ task.dependency }}</strong></div>
              </template>
            </SmTooltip>
          </div>
        </div>
      </div>
    </SmCardContent>
  </SmCard>
</template>

<script setup>
import { ref, computed } from 'vue'
import smartGuideIcon from './images/smart-guide-icon.svg'

const tasks = ref([
  {
    id: 1,
    title: 'Connect your first channel',
    description: 'Start selling on Booking.com, Expedia, and more',
    isCompleted: true,
    isNew: false,
    isLocked: false
  },
  {
    id: 2,
    title: 'Set up your room types',
    description: 'Configure your inventory and room rates',
    isCompleted: true,
    isNew: false,
    isLocked: false
  },
  {
    id: 3,
    title: 'Add your payment details',
    description: 'Set up how you want to get paid',
    isCompleted: false,
    isNew: true,
    isLocked: false
  },
  {
    id: 4,
    title: 'Configure channel mapping',
    description: 'Map your rooms to connected channels',
    isCompleted: false,
    isNew: false,
    isLocked: false
  },
  {
    id: 5,
    title: 'Set up rate plans',
    description: 'Create and manage your pricing strategies',
    isCompleted: false,
    isNew: false,
    isLocked: true,
    dependency: 'Set up your room types'
  }
])

const completedPercentage = computed(() => {
  const completed = tasks.value.filter(task => task.isCompleted).length
  return Math.ceil((completed / tasks.value.length) * 100)
})
</script>

<style scoped>
.smart-guide-icon {
  width: 24px;
  height: 24px;
}

.tasks-list {
  padding: 20px 0 0;
}

.task-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6.5px 16px;
  margin-bottom: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background-color: #fff;
}

.task-card-disabled {
  background-color: #eaeaea;
}

.task-card-default:hover {
  cursor: pointer;
  background-color: var(--color-pure-white);
}

.task-card-default:hover .task-title h6 {
  color: var(--color-primary);
}

.task-card-default:hover .task-status {
  width: 12px;
  height: 12px;
  border: solid var(--color-primary);
  border-width: 0 2px 2px 0;
  background-color: var(--color-pure-white);
  border-radius: 0;
  transform: rotate(-45deg);
}

.task-details {
  display: flex;
  gap: 10px;
  align-items: center;
  max-width: 75%;
  width: 100%;
  color: var(--color-black);
}

.task-status-wrapper {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.task-status {
  height: 8px;
  width: 8px;
  background-color: var(--color-app);
  border-radius: 50%;
}

.task-status-completed {
  width: 20px;
  height: 20px;
  background-color: var(--color-app);
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.task-description {
  display: flex;
  flex-direction: column;
}

.task-title {
  display: flex;
  flex-direction: row;
  margin-bottom: 0;
  gap: 6.4px;
  padding: 0;
  align-items: center;
}

.task-title h6 {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
}

.task-subtitle {
  font-size: 13px;
  font-weight: normal;
  line-height: 1.43;
  color: var(--color-disabled-dark);
}

.task-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
