<template>
    <div>
        <div class="Main_container_header">
            <MainHeader>
                <a href="https://3g.163.com/s">
                    我的
                </a>
            </MainHeader>
        </div>
    </div>
</template>

<script>
import MainHeader from "@/components/header/MainHeader"
import axios from "axios"
export default {
    components: {
        MainHeader,
    },
}
</script>

<style scoped>

</style>