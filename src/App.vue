<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>

  <RouterView />
</template>

<style>
html,
body {
    min-height: 100%;
    text-align: center;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
}

.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
        }
</style>
