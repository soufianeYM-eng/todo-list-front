<template>
  <a-form :model="formState" layout="inline">
    <a-form-item>
      <a-input v-model:value="formState.name" placeholder="What do you have planned ?" />
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit" :disabled="formState.name === ''">
        Add Task
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formState = ref({ name: '' })
</script>

<style scoped></style>
