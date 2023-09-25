<script setup lang='ts'>
import {reactive} from 'vue'
import {todoObj} from "../type/todoObj.ts";

const props = defineProps<{ todo: todoObj }>()

const viewData = reactive({
  isVisible: false,
  isChecked: false,
  checkboxRef: null
})

const classObject = reactive({
  'bi-trash': true,
  'bi-trash-fill': false
})

const hoverEvent = (onHover: boolean) => {
  classObject['bi-trash'] = !onHover;
  classObject['bi-trash-fill'] = onHover;
}

</script>

<template>
  <li class="list-group-item d-flex align-items-center justify-content-between border-0 mb-2 rounded"
      style="background-color: #f4f6f7;"
      @click="viewData.isChecked = !viewData.isChecked">
    <div class="d-flex align-items-center"
         @click.capture="">
      <input ref="checkboxRef"
             class="form-check-input me-2"
             :id="`${props.todo.idx}`"
             type="checkbox"
             v-model="viewData.isChecked"
             aria-label="..."
             checked
             @click.stop/>
      <div contenteditable="true"
           @click.stop="">
        <span>
          <s :style="viewData.isVisible ? {} : { display: 'contents' }">
            {{ props.todo.title }}
          </s>
        </span>
      </div>
    </div>
    <span>
      <i class="bi"
         :class="classObject"
         @mouseover="hoverEvent(true)"
         @mouseout="hoverEvent(false)"
         @click.stop="$emit('delete-todo',props.todo)"/>
    </span>
  </li>
</template>


