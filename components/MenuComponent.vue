<template>
    <header class="header">
        <div class="header__container">
            <div class="header__logo logo">
                <NuxtLink to="/" class="logo__link">
                    <img src="" alt="logo" width="125" height="40" />
                </NuxtLink>
            </div>
            <nav class="header__menu menu">
                <ul class="menu__list">
                    <li>
                        <NuxtLink to="/mainpage">Mainpage</NuxtLink>
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

</script>

<style lang="scss" scoped>
.router-link-exact-active {
    color: #12b488;
}
</style>