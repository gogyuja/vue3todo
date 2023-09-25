<script setup lang='ts'>
import Todo from './Todo.vue';
import {todoObj} from '../type/todoObj.ts'

let todos = defineProps(['todos']);
const emit = defineEmits(['delete-todo']);

function deleteTodo(todo: todoObj) {
  emit('delete-todo', todo);
}

</script>

<template>
  <!-- Tabs content -->
  <div class="tab-content" id="ex1-content">
    <div class="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel"
         aria-labelledby="ex1-tab-1">
      <ul class="list-group mb-0">

        <Todo v-for="(todoItem, index) in todos.todos"
              :key="`todoItem_${index}`"
              :todo="todoItem"
              @delete-todo="deleteTodo"/>
        <!-- <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
          style="background-color: #f4f6f7;">
          <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." checked />
          <s>Dapibus ac facilisis in</s>
        </li>
        <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
          style="background-color: #f4f6f7;">
          <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />
          Morbi leo risus
        </li>
        <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
          style="background-color: #f4f6f7;">
          <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />
          Porta ac consectetur ac
        </li>
        <li class="list-group-item d-flex align-items-center border-0 mb-0 rounded"
          style="background-color: #f4f6f7;">
          <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />
          Vestibulum at eros
        </li> -->
      </ul>
    </div>
    <!-- <div class="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
      <ul class="list-group mb-0">
        <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
          style="background-color: #f4f6f7;">
          <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />
          Morbi leo risus
        </li>
        <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
          style="background-color: #f4f6f7;">
          <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />
          Porta ac consectetur ac
        </li>
        <li class="list-group-item d-flex align-items-center border-0 mb-0 rounded"
          style="background-color: #f4f6f7;">
          <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />
          Vestibulum at eros
        </li>
      </ul>
    </div>
    <div class="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
      <ul class="list-group mb-0">
        <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
          style="background-color: #f4f6f7;">
          <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." checked />
          <s>Cras justo odio</s>
        </li>
        <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
          style="background-color: #f4f6f7;">
          <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." checked />
          <s>Dapibus ac facilisis in</s>
        </li>
      </ul>
    </div> -->
  </div>
  <!-- Tabs content -->
</template>


<style></style>