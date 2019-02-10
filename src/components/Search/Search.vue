<template>
    <div id="search">
        <form metod="POST">
            <input type="search" name="search" :value="value" 
            @keyup="searchFor" placeholder="search For">
            <input type="submit" name="searchFor" value="Szukaj">
        </form>
        <div class="dropdown" v-if="searchFound">
            <div class="dropdown__list" v-if="filteredValues.length">
                <a href="#" class="dropdown__list__item" v-for="(item, i) in filteredValues" :key="item" :class="[i === active ? 'active' : '']">
                   {{item}}
                </a>
            </div>
            <p v-else>No results</p>
        </div>
        
    </div>
</template>

<script>
    import Vue from 'Vue';

    export default {
        data() {
            return {
                active: null,
                value: '',
                values: this.getValues(),
                searchFound: false
            }
        },
        methods: {
            getValues() {
                return ['yo', 'hej', 'siema', 'hihi', 'hello', 'helloo'];
            },
            searchFor({ keyCode, target:{ value } }) {
                this.value = value;
                if(value.length < 3) {
                    this.searchFound = false;
                    return;
                }
                this.searchFound = true;
                if([13,38,40].includes(keyCode)) {
                    this.moveUpDownSuggestionList(keyCode);
                }
        },
            moveUpDownSuggestionList(keyCode) {
                const current = document.querySelector('.active');
                if(keyCode === 13) return;
                if(!current) {
                    this.active = 0;
                }
                 else if(keyCode === 40) {
                    this.active = this.active < this.filteredValues.length -1 ? this.active + 1 : 0;
                } else if(keyCode === 38) {
                    this.active = this.active > 0 ? this.active - 1 : this.filteredValues.length-1;
                }
                console.log('el: ', this.active);
            }
        },
        computed: {
            filteredValues() {
                if (this.value.length < 3) return [];
                return this.values.filter(v => v.includes(this.value));
            }
        },
        watch: {
            value(v) {
                console.log('value changed: ', v);
            }
        }
    }
</script>

<style scoped>
    #search {
        position: relative;
    }
    .dropdown {
        position: absolute;
        top: 30px;
        left: 1px;
        width: 63%;
        box-shadow: 0 1px 2px #010101;
        min-height: 30px;
    }
    .dropdown__list {
    }
    .dropdown__list__item {
        padding: 5px 0 5px 10px;
    }
    a:hover, .active {
        background-color: aqua;
    }
    a {
        color: inherit;
        display: block;
        text-decoration: none;
    }
    input[type="text"], input[type="search"] {
        margin-right: 10px;
        padding: 5px 10px;
    }
    input[type="submit"] {
        border: none;
        padding: 7px 10px;
        width: 100px;
        height: 28px;
        background-color: #41B883;
        color: white;
        box-shadow: 1px 1px 1px #34495E;
    }
</style>
