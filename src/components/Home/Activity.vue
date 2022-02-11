<script>
    import {
        computed
    } from '@vue/reactivity';
    import {
        useStore
    } from 'vuex'
    export default {
        setup() {
            const store = useStore();
            const popularActive = computed(() => {
                return store.getters['Homepage/getPopularActivity'];
            });
            const openDialog = (obj)=>{
                store.dispatch('handleSetDialogContent',obj);
            }
            return {
                popularActive,
                openDialog
            }
        }
    }
</script>
<template>
    <div class="activity">
        <div class="activity_title">
            <i></i><span>熱門活動</span>
        </div>
        <div class="activity_content">
            <div class="activity_content-item" v-for="item in popularActive" :key="item.id" @click="openDialog(item)">
                <img :src="item.Picture.PictureUrl1" alt="" >
                <div class="activity_content-item-right">
                    <div class="activity_content-item-title">
                        {{item.ActivityName}}
                    </div>
                    <div class="activity_content-item-content">
                        {{item.Description}}
                    </div>
                    <div class="activity_content-item-footer">
                        <div class="left">
                            <i></i>
                            <span>
                                {{item.Location}}
                            </span>
                        </div>
                        <a href="#">活動詳情</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    $homepage_url:"~@/assets/img/homepage/";

    .activity {
        margin-bottom: 83px;
        &_title {
            font-family: Noto Sans TC;
            font-style: normal;
            font-weight: bolder;
            font-size: 20px;
            line-height: 29px;
            color: #0D0B0C;
            display: flex;
            align-items: center;
            margin-bottom: 13px;

            i {
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 0 10px 16.9px 10px;
                border-color: transparent transparent #FF1D6C transparent;
                margin-right: 14px;
            }
        }

        &_content {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap:48px 21px ;

        }

        &_content-item {
            padding: 16px;
            display: inline-flex;
            width: calc(50% - 21px);
            height: 228px;
            position: relative;
            background: #FFFFFF;
            cursor: pointer;
            &::before,
            &::after {
                position: absolute;
                content: "";
                bottom: -5px;
                z-index: -1;
                width: calc(50% - 12px);
                height: 36px;
                background-color: #0d0b0c;
                opacity: .3;
                -webkit-filter: blur(5px);
                filter: blur(5px);
            }

            &::before {
                left: 6px;
                -webkit-transform: matrix(-1, 0, 0, 1, 0, 0) rotate(7deg);
                transform: matrix(-1, 0, 0, 1, 0, 0) rotate(7deg);
            }
            &::after {
                right: 6px;
                -webkit-transform: matrix(-1, 0, 0, 1, 0, 0) rotate(-7deg);
                transform: matrix(-1, 0, 0, 1, 0, 0) rotate(-7deg);
            }
            img {
                margin-right: 25px;
                width: 187px;
                height: 196px;
            }

            &-right {
                display: flex;
                flex-direction: column;

                .activity_content-item-title {
                    font-family: Noto Sans TC;
                    font-style: normal;
                    font-size: 16px;
                    line-height: 23px;
                    font-weight: bolder;
                    color: #0D0B0C;
                    margin-bottom: 14px;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .activity_content-item-content {
                    font-family: Noto Sans TC;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 21px;
                    /* or 150% */
                    /* gray */
                    color: #ACACAC;
                    display: -webkit-box;
                    -webkit-line-clamp: 4;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin-bottom: 23.5px;
                }

                .activity_content-item-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .left {
                        display: flex;
                        align-items:flex-end;
                        i {
                            width: 16px;
                            height: 19px;
                            background-image: url("#{$homepage_url}locate.png");
                            background-size: cover;
                            display: block;
                            margin-right: 12px;
                        }

                        span {
                            font-family: Noto Sans TC;
                            font-style: normal;
                            font-weight:bolder;
                            font-size: 14px;
                            /* identical to box height, or 150% */


                            /* black */

                            color: #0D0B0C;
                        }
                    }
                    a{
                        padding: 9.5px 32px;
                        font-family: Noto Sans TC;
                        font-style: normal;
                        font-weight: bolder;
                        font-size: 14px;
                        line-height: 21px;
                        /* identical to box height, or 150% */


                        /* pink */

                        color: #FF1D6C;
                        text-decoration: none;
                        border: #FF1D6C 1px solid;
                        border-radius: 10px;
                    }
                }
            }
        }
    }
</style>