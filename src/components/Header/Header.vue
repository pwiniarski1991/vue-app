<template>
    <header id="mainHeader" class="container">
        <logo :source="source" :desc="desc"/>
        <menu-list />
        <search-form />
    </header>
</template>


<script>
    import Vue from 'vue';
    import Logo from '../Logo/Logo';
    import MenuList from '../Menu/Menu';
    import SearchForm from '../Search/Search';

    export default ({
        data() {
            return {
                source: 'src/images/vue_logo.png',
                desc: 'Vue'
            }
        },
        components: {
            Logo,
            MenuList,
            SearchForm
        }
    });
</script>

<style scoped>
    #mainHeader {
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 1px -1px 2px black;
        padding: 10px 20px;
        width: 100%;
        box-sizing: border-box;
    }
</style>