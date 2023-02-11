<template>
    <div class="wrapper">
        <div class="block">
            <div class="block_left"> text_html</div>

            <div class="block_right">image</div>
        </div>
        <div class="block">richtext</div>
        <div class="imagearray">imagearray</div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.wrapper {
    max-width: 1280px;
    margin: auto;
    background-color: rgb(235, 235, 235);
}

.block {
    display: flex;
    min-height: 200px;
    background-color: rgb(103, 103, 103);
    margin-top: 50px;

    &_left {
        background-color: rgb(227, 227, 227);
        width: 50%;
        min-height: 200px;


    }

    &_right {
        background-color: red;
        min-height: 200px;
        width: 50%;

    }
}

.imagearray {
    display: flex;
    min-height: 200px;
    background-color: rgb(216, 208, 224);
    margin-top: 50px;
}
</style>