<template>
    <div>
        <div class="Noshow" v-if="MenuArray == null">
            <h2>没有没有</h2>
        </div>
        <div class="Showdata" v-else>
            <img :src="MenuArray[0].pic" :alt="MenuArray[0].name" style="width:90%;height:auto">
            <p class="MenuName">菜名： {{  MenuArray[0].name }}</p>
            <br>
            <p class="MenuContent">介绍：{{ MenuArray[0].content }}</p>
            <br> 
            <p class="cookingtime">烹饪时间:{{ MenuArray[0].cookingtime }}</p>
            <br>
            <p class="preparetime">准备时间: {{ MenuArray[0].preparetime }}</p>
            <br>
            <p class="peoplenum">可供：{{  MenuArray[0].peoplenum }} 吃</p>
            <br>
            <p class="tag">菜性： {{  MenuArray[0].tag }}</p>
            <br>
            <div class="material">
                材料准备：
                    <ul>
                        <li  v-for="(item,i) in MenuArray[0].material" :key="item.mname">
                            材料{{ i+1 }}：{{ item.mname }} --------- {{ item.amount}}
                        </li>
                    </ul>
            </div>
            <br>
            <div class="process">
                过程：
                材料准备：
                    <ul>
                        <li style="width: 100%;text-align: center;" v-for="(item,i) in MenuArray[0].process" :key="item.pcontent">
                            第{{ i+1 }}步： {{ item.pcontent }}
                            <img :src="item.pic" alt="" style="width:90%;height:auto;">
                        </li>
                    </ul>
            </div>
        </div>
        <div style="height:100px;width:100%"></div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return {
            MenuArray: null
        }
    },
    created(){
        axios.get('/jisuapi/search',{params:{keyword:this.$route.query.MenuName,num:20,appkey:"d046da97e0df4ec0b7343f0b2b8e61d8"}})
        .then(res => {
            this.MenuArray = [];
            let Pathdata = res.data.result.result.list;
            for(let item of Pathdata){
                if(item.id == this.$route.query.MuneId){
                    this.MenuArray.push(item);
                    break;
                }
            };
            console.log(this.MenuArray);
        }).catch(err => {
            this.MenuArray = null;
            console.log(err);
        })
        
    }
}
</script>

<style scoped>
.Showdata {
    width: 100%;
    text-align: center;
}
    .material {
        width:100%;
        text-align: center;
    }
</style>