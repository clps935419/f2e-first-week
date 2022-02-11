<script>
    import {
        useStore
    } from 'vuex'
    import {
        useDialogHandle
    } from '@/composition-api/'
    import {
        watch
    } from '@vue/runtime-core';
    export default {
        setup() {
            const store = useStore();
            const {
                getIsOpenDialog,
                getDialogContent,
                getShade,
                handleShadeOpen,
                handleDialogOpen
            } = useDialogHandle();
            const closeDialogEvent = (e) => {
                if (e.target.className.indexOf('dialog-item') === -1) {
                    handleShadeOpen(false);
                    handleDialogOpen(false);
                }
            }
            watch(getDialogContent, (item) => {
                console.log('igetDialogContent', item);
            });
            return {
                getIsOpenDialog,
                getDialogContent,
                getShade,
                closeDialogEvent
            }
        }
    }
</script>
<template>
    <div class="dialog-wrapper" v-if="getIsOpenDialog && getShade" @click="closeDialogEvent">
        <div class="dialog-item">
            <div class="dialog-item_img" :style="{backgroundImage: `url('${getDialogContent.Picture.PictureUrl1}')`}">
            </div>
            <div class="dialog-itme_content">
                <div>
                    {{getDialogContent.RestaurantName|| getDialogContent.HotelName ||getDialogContent.ActivityName ||getDialogContent.ScenicSpotName}}
                </div>
                <div>
                    {{getDialogContent.Description}}
                </div>
                <div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .dialog-wrapper {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        outline: 0;
        -webkit-overflow-scrolling: touch;
        overflow-x: hidden;
        overflow-y: auto;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .dialog-item {
        width: 676px;
        height: auto;
        max-height: 600px;
        background: white;
        padding: 32px;

        .dialog-item_img {
            margin-bottom: 20px;
            background-size: cover;
            width: 612px;
            height: 300px;
            background-position: center;
        }

        .dialog-itme_content {
            div:nth-child(1) {
                margin-bottom: 22px;
                font-weight: bolder;
            }

            div:nth-child(2) {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 5;
                font-size: 14px;
                line-height: 20px;
            }
        }

        img {
            max-width: 100%;
            height: auto;
        }
    }
</style>