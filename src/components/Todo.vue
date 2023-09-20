<template>
    <li class="list-group-item d-flex align-items-center justify-content-between border-0 mb-2 rounded" style="background-color: #f4f6f7;">
        <div class="d-flex align-items-center">
            <input id="{{ todo.idx }}" class="form-check-input me-2" type="checkbox" value="" aria-label="..." checked />
            <s>{{todo.title}}</s>
        </div>
        <span>
            <i :class="classObject" class="bi" @mouseover="onHover" @mouseout="onHoverOut" @click="$emit('delete-todo',todo)"></i>
        </span>
    </li>
</template>

<script setup lang='ts'>
import { reactive } from 'vue'
    defineProps(['todo'])

    const classObject = reactive({
        'bi-trash': true,
        'bi-trash-fill': false
    })

    const onHover = () => {
        classObject['bi-trash'] = false;
        classObject['bi-trash-fill'] = true;
    }

    const onHoverOut = () => {
        classObject['bi-trash'] = true;
        classObject['bi-trash-fill'] = false;
    }
</script>
    
<style lang="scss">
    i {
        cursor: pointer;
    }
</style>
