<template>
    <nav>
        <ul class="menu">
            <li v-for="item in menu" v-bind:key="item.id"><router-link :to="item.to">{{item.title}}</router-link></li>
        </ul>
    </nav>
</template>

<script>
    import Vue from 'vue';

    export default Vue.extend({
        data() {
            return {
                menu: this.getItems()
            }
        },
        methods: {
            getItems() {
                return [
                    { title: 'o Nas', to: '/about-us', id: 'about-us' },
                    { title: 'Nowości', to: '/news' , id: 'news' },
                    { title: 'Projekty', to: '/projects', id: 'projects' },
                    { title: 'Kontakt', to: '/contact', id: 'contact' }
                ];
            }
        }
    });
</script>

<style scoped>
    .menu {
        display: flex;
        list-style-type: none;
        padding-left: 0;
        margin: 0 auto;
        align-items: center;
    }
    li {
        display: inline-block;
        padding: 0 20px;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
</style>