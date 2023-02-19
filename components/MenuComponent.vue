<template>
    <header class="header header_active">
        <div class="header_container" :class="{ 'header_container-open': show }">
            <div class="header__logo logo" @click="show = !show; isClosed = !isClosed">
                <NuxtLink to="/" class="logo__link">
                    <img src="../assets/img/general/Easy-logo.svg" alt="logo" width="125" height="40" />
                </NuxtLink>
            </div>
            <MenuHamburger @click="menuClick" :menuClicked="show"></MenuHamburger>
        </div>

            <div class="dropdown dropdown-open" v-show="show" @click="show = !show">

                <nav class="header__menu menu">
                    <ul class="menu__list">
                        <li class="menu__item">
                            <NuxtLink to="/mainpage" class="menu__link undefined">Mainpage</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/query">Query</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/tabs">Tabs</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/test">test</NuxtLink>
                        </li>

                    </ul>
                </nav>
            </div>



    </header>
</template>

<script setup>

import { ref } from 'vue'
const show = ref(false);
const isClosed = ref(false)

function menuClick (){
    show.value = !show.value
}

</script>

<style lang="scss" scoped>
@import url(../assets/css/_variables.scss);

$black-90: #242329;

.header {
    width: 100%;

    &header__logo img {
        height: 100px;
        width: 200px;
    }


    &_container {
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 24px;


        &-open {
            background-color: $black-90;



        }
    }
}

.menuclick {
    height: 60px;
    width: 60px;
    background-color: red;
}

.dropdown-open {
    background-color: rgba(102, 101, 111, 0.8);
    height: 60vh;
}

.router-link-exact-active {
    color: #12b488;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.1s ease;
    opacity: 0;
}

.fade-enter-from,
.fade-leave-active {
    transition: all 0.1s ease;
    opacity: 1;
}
</style>