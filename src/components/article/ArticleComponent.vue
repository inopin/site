<template>
    <div>
        <h3>{{ props.item.title }}</h3>
        <p>{{ props.item.text }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
 const props = defineProps({
   item: Object
 })
</script>