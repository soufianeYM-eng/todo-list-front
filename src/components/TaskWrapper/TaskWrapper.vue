<template>
  <div class="task-list-wrapper">
    <TaskList />
  </div>
</template>

<script setup lang="ts">
import TaskList from '../TaskList'
</script>

<style scoped lang="scss">
.task-list-wrapper {
  width: 100%;
  max-width: 500px;
  margin: auto;
}
</style>
