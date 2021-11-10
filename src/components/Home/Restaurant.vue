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
            const popularRestaurant = computed(() => {
                return store.getters['Homepage/getPopularRestaurant'];
            });

            return {
                popularRestaurant
            }
        }
    }
</script>
<template>
    <div class="Restaurant">
        <div class="Restaurant_title">
            <i></i><span>熱門餐飲</span>
        </div>
        <div class="Restaurant_content">
            <div class="Restaurant_content-item" v-for="item in popularRestaurant" :key="item.ID">
                <img :src="item.Picture.PictureUrl1" alt="">
                <div class="Restaurant_content-item-title">
                    {{item.Name}}
                </div>
                <div class="Restaurant_content-item-location">
                    <i></i>
                    <span>
                        {{item.City}}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    $homepage_url:"~@/assets/img/homepage/";

    .Restaurant {
        &_title {
            margin-bottom: 24px;
            display: flex;
            align-items: center;

            i {
                width: 20px;
                height: 20px;
                background: #FFB72C;
                display: block;
                margin-right: 13px;
            }

            span {
                font-family: Noto Sans TC;
                font-style: normal;
                font-weight: bolder;
                font-size: 20px;
                line-height: 29px;
                color: #0D0B0C;
            }
        }

        &_content {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 47px 9px;
        }

        &_content-item {
            display: inline-flex;
            width: calc((100% - 36px) / 5);
            padding: 12px;
            padding-bottom: 15px;
            flex-direction: column;
            position: relative;
            // flex: 1;
            background: #FFFFFF;

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
                width: 182px;
                height: 137px;
                margin-bottom: 10px;

            }

            &-title {
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                height: 42px;
                font-family: Noto Sans TC;
                font-style: normal;
                font-weight: bolder;
                font-size: 14px;
                line-height: 21px;
                /* or 150% */


                /* black */

                color: #0D0B0C;
                margin-bottom: 9.5px;
            }

            &-location {
                display: flex;
                align-items: flex-end;
                i {
                    margin-right: 5px;
                    width: 11px;
                    height: 13px;
                    background-image: url("#{$homepage_url}locate.png");
                    display: block;
                    background-size: cover;
                }

                font-family: Noto Sans TC;
                font-weight: bolder;
                font-size: 12px;

                /* green */

                color: #007350;
            }
        }
    }
</style>