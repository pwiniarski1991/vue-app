<template>
    <footer id="mainFooter" class="container">
        <p>This website was made with Vue by Piotr Winiarski @Copyright 2019</p>
    </footer>
</template>


<script>
    import Vue from 'vue';

    export default Vue.extend({
    });
</script>

<style scoped>
    #mainFooter {
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 1px 1px 2px black;
        padding: 10px 20px;
        width: 100%;
        box-sizing: border-box;
    }
</style>