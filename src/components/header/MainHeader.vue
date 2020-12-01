<template>
    <div class="main_header_container">
        <!-- 封装头部组件 -->
        <slot/>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .main_header_container {
        width: 100%;
        height: 100%;
        background: #ff3333;
        text-align: center;
        line-height: 49px;
        color:white;
    }
    .iconfont {
        font-size: 80px;
        color: #FFF;
    }
    .Main_container_header a {
        color: #FFF;
        font-family: "微软雅黑";
    }
</style>