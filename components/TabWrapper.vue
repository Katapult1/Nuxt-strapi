<template>
    <div class="tabs">
        <ul class="tabs_header">
            <li v-for="title in tabTitles" :key="title" @click="selectedTitle = title"
                :class="{ selected: title == selectedTitle }">
                {{ title }}
            </li>
        </ul>
        <slot />
    </div>
</template>

<script>
import { ref, provide } from 'vue'
export default {
    setup(props, { slots }) {
        const tabTitles = ref(slots.default().map((tab) => tab.props.title))
        const selectedTitle = ref(tabTitles.value[0])
        provide('selectedTitle', selectedTitle)
        return {
            selectedTitle,
            tabTitles
        }
    }
}

</script>

<style lang="scss">
* {
    border: px solid gray;
    padding: 0;
    margin: 0;
}

.tabs {

    &_header {
        display: flex;
        list-style-type: none;
        cursor: pointer;

        & li {
            background-color: #434c52;
            color: white;
            padding: 24px;
            
            &:nth-child(1){
                border-radius: 16px 0 0 0 ;
            } 

            &:nth-last-child(1){
                border-radius: 0 16px 0 0 ;
        }

            &.selected {
                background-color: #00b948;

            }
        }
    }
}

.tab_content {
    padding: 24px;


}
</style>