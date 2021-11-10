<script>
    import {
        ref
    } from '@vue/reactivity'
    export default {
        setup() {

            return {

            }
        }
    }
</script>
<template>
    <div class="header">
        <div class="header_left">
            <div class="header_logo"></div>
        </div>
        <div class="header_right">
            <a class="spot" href=""><i ></i><span>台灣景點</span> </a>
            <a class="live" href=""><i ></i><span>美食住宿</span> </a>
            <a class="transport" href=""><i ></i><span>景點交通</span></a>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    $header_url:"~@/assets/img/header/";

    @mixin nav_bg($img) {
        background-image: url("#{$header_url}#{$img}.png");
        width: 34px;
        height: 34px;
        background-size: 100%;
        display: block;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        height: 104px;
        flex-basis: 104px;
        flex-shrink:0;
        padding: 0 108px;
        padding-bottom: 18px;
        background: #FFFFFF;


        &_logo {
            background-image: url("#{$header_url}logo.png");
            width: 99px;
            height: 57px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: 100%;
        }

        &_right {
            display: flex;

            &>a {
                display: flex;
                margin-right: 27px;
                align-items: center;
                font-family: Noto Sans TC;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;

                i {
                    margin-right: 8px
                }

                &:last-child {
                    margin-right: 0;
                }

                span {
                    margin-top: 5px
                }

            }
        }

        .spot {
            color: #FF1D6C;

            i {
                @include nav_bg('spot');

            }
        }

        .live {
            color: #FFB72C;

            i {
                @include nav_bg('live');
            }

        }

        .transport {
            color: #007350;

            i {
                @include nav_bg('transport');

            }

        }
    }
</style>