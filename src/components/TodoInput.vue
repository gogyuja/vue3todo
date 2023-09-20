<template>
  <div class="d-flex justify-content-center align-items-center mb-4">
    <div class="form-outline flex-fill form-floating mb-3">
      <input id="inputText" v-model="inputData" @keyup.enter="inputTodo" type="text" class="form-control"  placeholder="name@example.com">
      <label for="inputText">신규작업....</label>
    </div>
    <button @click="inputTodo" type="submit" class="btn btn-info ms-2 btn-lg">Add</button>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'

let inputData: Ref<string> = ref("");
const emit=defineEmits(['input-todo'])

function inputTodo() {


    let todo = {
      idx:Number,
      title: inputData.value,
      status: false
    };
    
    emit('input-todo',todo);
  

    inputData.value = '';
}


</script>


<style></style>