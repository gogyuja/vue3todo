<script setup lang="ts">
import {ref} from 'vue'
import {todoObj} from '../type/todoObj.ts'

const inputData = ref("");
const emit = defineEmits<{ inputTodo: [todoObj] }>()

const inputTodo = () => {
  emit('inputTodo', {
    idx: 0,
    title: inputData.value,
    status: false
  })
  inputData.value = ""
}

</script>

<template>
  <div class="d-flex justify-content-center align-items-center mb-4">
    <div class="form-outline flex-fill form-floating mb-3">
      <input
          id="inputText"
          v-model="inputData"
          class="form-control"
          type="text"
          placeholder="name@example.com"
          @keyup.enter="inputTodo">
      <label for="inputText">
        신규작업....
      </label>
    </div>
    <button
        class="btn btn-info ms-2 btn-lg"
        @click="inputTodo"
        type="submit">
      Add
    </button>
  </div>
</template>

<style>

</style>