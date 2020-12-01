<template>
    <div>
        <div class="Main_container_header">
            <MainHeader>
                <a href="https://3g.163.com/s">
                    菜谱
                </a>
            </MainHeader>
        </div>
        
        <div class="MenuActive" v-if="menuName == '' || menuName == null">
            <input type="text" v-model.lazy="menuName" placeholder="要吃啥子菜！" required>
        </div>

        <div class="Main_container_content" v-else>
            <MenuContent :menuName="menuName"/>
        </div>

    </div>
</template>

<script>
import MenuContent from "@/components/content/MenuContent"
import MainHeader from "@/components/header/MainHeader"
export default {
    components: {
        MainHeader,
        MenuContent
    },
    data(){
        return {
            menuName: ""
        }
    },
    methods: {
        SearchMenu(){

        }
    }
}
</script>

<style scoped>

  .Main_container_header {
    width:100%;
    height:49px;
  }
 .Main_container_content {
      width: 90%;
      margin: auto;
      margin-top: 20px;
  }
    .MenuActive {
        width: 90%;
        height: 40px;
        margin: auto;
        position: absolute;
        left: 0;right: 0;top: 0;bottom: 0;
    }
        .MenuActive input {
            width: 100%;
            height: 100%;
            line-height:100px;
            text-align:center;
            color: #111;
            border: none;
            outline: none;
            border: 1px solid #FFF;
            border-radius: 5px;
        }
</style>