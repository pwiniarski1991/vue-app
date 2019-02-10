<template>
    <h1>
        <img v-bind:src="source" v-bind:alt="desc">
    </h1>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        props: ['source', 'desc']
    });
</script>

<style scoped>
    h1 {
        margin: 0;
        width: 80px;
    }
    img {
        display: block;
        max-width: 100%;
    }
</style>
