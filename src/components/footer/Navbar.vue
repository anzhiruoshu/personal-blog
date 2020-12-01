<template>
    <div class="comtainer">
        <div class="item-nav-button" v-for="item in NavbarInfo" :key="item.id" @click="NavbarClick(item.id)">
            <item>
                <div class="item-img"><i class="iconfont" :class="[item.FontClass,{active:ActiveId == item.id}]"></i></div>
                <div class="item-font" :class="{active:ActiveId == item.id}">{{ item.FontText }}</div>
            </item>
        </div>
    </div>
</template>

<script>
import item from "./Item";
export default {
    props:{
        NavbarInfo:{
            type:Array,
            required:true
        },
        ActiveId: {
            type:Number|String,
            default: 0
        }
    },
    components: {
        item,
    },
    methods:{
        NavbarClick(data){
            this.$emit('NavClick',data)
        }
    }
}
</script>

<style scoped>
    
    .comtainer {
        width: 100%;
        height: 100%;
        display: flex;
    }
        .item-nav-button{
            cursor: pointer;
            flex: 1;
            text-align: center;
            height: 100%;    
        }
</style>