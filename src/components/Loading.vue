<script>
import { useStore } from 'vuex'
import { computed } from 'vue';
export default {
    setup() {
        const store = useStore();
        const isLoading = computed(()=>{
            return store.getters['getIsLoading']
        })
        return {
            isLoading 
        }
    }
}
</script>
<template>
<div class="loading-bg" v-if="isLoading">
    <div class="laoding-bar" >
        <div class="laoding-bar_img"></div>
        <div class="laoding-bar_text">Loading....</div>

    </div>
</div>
</template>
<style lang="scss" scoped>
$root_url:"~@/assets/img/";
.loading-bg{
    position: relative;

}
.laoding-bar{
    top: 11px;
    left: 50%;
    position: absolute;
    &_img{
        width: 74px;
        height: 74px;
        background-image: url("#{$root_url}loading.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    &_text{
        margin-top: -20px;
        text-align: center;
    }
}
</style>