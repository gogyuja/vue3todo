<template>
    <li class="list-group-item d-flex align-items-center justify-content-between border-0 mb-2 rounded" style="background-color: #f4f6f7;">
        <div class="d-flex align-items-center">
            <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." checked />
            <s>{{title}}</s>
        </div>
        <span>
            <i :class="classObject" class="bi" @mouseover="onHover" @mouseout="onHoverOut" @click="$emit('delete-todo',title)"></i>
        </span>
    </li>
</template>

<script setup lang='ts'>
import { reactive } from 'vue'
    defineProps(['title'])

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
