<script setup lang="ts">
import { ref } from 'vue';
import TodoFooter from './components/TodoFooter.vue';
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoNav from './components/TodoNav.vue';

// todoDatas를 반응형 참조로 변경
let todoDatas = ref();

let handleInputTodo=(todo)=>{
  const storedData = localStorage.getItem('todos');
  let todos = [];
  
  try {
    if (storedData) {
      todos = JSON.parse(storedData);
    }
  } catch (e) {
    console.error('Invalid todos data in localStorage:', e);
  }

  if (Array.isArray(todos)) {
      let idx=todos.length;
      todo.idx=idx;
      todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(todos));
      todoDatas.value = todos;
  } else {
    console.error('todos is not an array:', todos);
  }
}

// 초기 로딩 시 localStorage의 값을 todoDatas에 설정
const initialTodos = localStorage.getItem('todos');
if (initialTodos) {
  try {
    todoDatas.value = JSON.parse(initialTodos);
  } catch (e) {
    console.error('Invalid todos data in localStorage:', e);
  }
}


let deleteTodo = (todo) =>{
  let idx=todo.idx;
  
  //todoDatas.value 에 idx 와 동일한 idx 값 제거.
  todoDatas.value.splice(idx,1);
  
  //자료구조로 삭제 이후에 모든 idx 땡기는 작업. idx+1 이후요소를 다 부른 다음 -1 씩 해준다.
  todoDatas.value.forEach(item => {
    if(item.idx>idx){
      item.idx-=1;
    }
  });

  //localStorage에 삭제된 todo 내역 반영.
  localStorage.setItem('todos',JSON.stringify(todoDatas.value));
 
}

</script>

<template>
  <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <TodoHeader></TodoHeader>
          <div class="card">
            <div class="card-body p-5">
              <TodoInput @input-todo="handleInputTodo"></TodoInput>
              <TodoNav></TodoNav>
              <TodoList :todos="todoDatas" @delete-todo="deleteTodo"></TodoList>
              <TodoFooter></TodoFooter>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>

.gradient-custom {
  background: radial-gradient(50% 123.47% at 50% 50%, #00ff94 0%, #720059 100%),
    linear-gradient(121.28deg, #669600 0%, #ff0000 100%),
    linear-gradient(360deg, #0029ff 0%, #8fff00 100%),
    radial-gradient(100% 164.72% at 100% 100%, #6100ff 0%, #00ff57 100%),
    radial-gradient(100% 148.07% at 0% 0%, #fff500 0%, #51d500 100%);
  background-blend-mode: screen, color-dodge, overlay, difference, normal;
}
</style>
