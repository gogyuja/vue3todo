<template>
    <li class="list-group-item d-flex align-items-center justify-content-between border-0 mb-2 rounded" @click="clickCheckbox()" style="background-color: #f4f6f7;">
        <div class="d-flex align-items-center" @click.capture="">
            <input ref="checkboxRef" :id="todo.idx" class="form-check-input me-2" type="checkbox" value="" aria-label="..." checked @click.stop />
            <div contenteditable="true" @click.stop=""><span><s :style="isVisible ? {} : { display: 'contents' }">{{ todo.title }}</s></span></div>
        </div>
        <span>
            <i :class="classObject" class="bi" @mouseover="onHover" @mouseout="onHoverOut" @click.stop="$emit('delete-todo',todo)"></i>
        </span>
    </li>
</template>

<script setup lang='ts'>
import { reactive, ref } from 'vue'
    defineProps(['todo'])

    const classObject = reactive({
        'bi-trash': true,
        'bi-trash-fill': false
    })

    const checkboxRef = ref<null | HTMLInputElement>(null);
    const isVisible = ref(false);

    const onHover = () => {
        classObject['bi-trash'] = false;
        classObject['bi-trash-fill'] = true;
    }

    const onHoverOut = () => {
        classObject['bi-trash'] = true;
        classObject['bi-trash-fill'] = false;
    }

    const clickCheckbox=()=>{       
        // 체크박스의 체크 상태를 토글합니다.
        if(checkboxRef.value) {
            checkboxRef.value.checked = !checkboxRef.value.checked;
        }
    }
</script>
