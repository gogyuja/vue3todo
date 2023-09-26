<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
<button @click="open = true">모달 열기</button>

<Teleport to="body">
  <div v-if="open" class="modal">
    <p>짜자잔~ 모달입니다!</p>
    <button @click="open = false">닫기</button>
  </div>
</Teleport>
</template>

<style scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>