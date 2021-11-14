<script>
    import {
        reactive,
        ref
    } from '@vue/reactivity'
    import {
        watch
    } from '@vue/runtime-core';
    import {
        useStore
    } from 'vuex';
    export default {
        components: {},
        setup() {
            const store = useStore();
            const groupListArr = reactive([{
                    text: '美食',
                    val: 'restaurant'
                },
                {
                    text: '景點',
                    val: 'spot'
                },
                {
                    text: '住宿',
                    val: 'hotel'
                },
                {
                    text: '活動',
                    val: 'activity'
                }
            ]);
            const cityArr = reactive(
                [
                    '基隆市',
                    '台北市',
                    '新北市',
                    '宜蘭縣',
                    '桃園市',
                    '新竹市',
                    '新竹縣',
                    '苗栗縣',
                    '台中市',
                    '彰化縣',
                    '南投縣',
                    '雲林縣',
                    '嘉義市',
                    '嘉義縣',
                    '台南市',
                    '高雄市',
                    '屏東縣',
                    '花蓮縣',
                    '台東縣',
                    '澎湖縣',
                    '連江縣',
                    '金門縣'
                ]
            );
            const searchText = ref('');
            const searchGroup = ref('');
            const searchLocate = ref('');
            // watch(searchLocate,(item)=>{
            //     console.log('it',item)
            // })
            const handleSearch = () => {
                const parmsObj = {
                    searchText: searchText.value,
                    searchGroup: searchGroup.value,
                    searchLocate: searchLocate.value
                }
                store.dispatch('handleIsSearch', true);
                store.dispatch('handleSearch', parmsObj).then((res) => {
                    handleData(res);
                });
            }
            const handleData = (data) => {
                console.log('data', data)
                let i = 0;
                data.forEach(item => {
                    const img = new Image();
                    img.src = item.Picture.PictureUrl1;

                    img.onload = () => {
                        let isLoading = false;
                        i++;
                        console.log('i',i,data.length,item.Name)

                        if (i === data.length) {
                            isLoading = false;
                        } else {
                            isLoading = true;
                        }
                        store.dispatch('handleLoading', isLoading);
                    }
                    img.onerror = function() {
                        //display error
                        console.error('i**',item.Name,'圖片讀取失敗')
                        
                    };
                });
            }
            return {
                groupListArr,
                cityArr,
                searchText,
                searchGroup,
                searchLocate,
                handleSearch
            }
        }
    }
</script>
<template>
    <div class="banner-area">
        <div class="banner-area_img"></div>
        <div class="banner-area_center-item">
            <div class="title-img"></div>
            <div class="sub-text">
                台北、台中、台南、屏東、宜蘭……遊遍台灣
            </div>
            <div class="input-area">
                <input type="text" placeholder="請輸入關鍵字" v-model="searchText">
                <i @click="handleSearch"></i>
            </div>
            <div class="select-area-2">
                <select name="" id="" v-model="searchGroup">
                    <option value="">請選擇類別</option>
                    <option v-for="item in groupListArr" :key="item.name" :value="item.val">
                        {{item.text}}
                    </option>
                </select>
                <select name="" id="" v-model="searchLocate">
                    <option value="" disabled>請選擇縣市</option>
                    <option v-for="item in cityArr" :value="item" :key="item">
                        {{item}}
                    </option>
                </select>
                <!-- <i></i> -->
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    $banner_url:"~@/assets/img/banner/";

    .banner-area {
        padding: 23px 27px 22px 27px;
        position: relative;
        background: #FFFFFF;
        position: relative;
        margin-top: 104px;
        &::before,
            &::after {
                position: absolute;
                content: "";
                bottom: 5px;
                z-index: -1;
                width: calc(50% - 12px);
                height: 36px;
                background-color: #0d0b0c;
                opacity: .3;
                -webkit-filter: blur(5px);
                filter: blur(5px);
            }

            &::before {
                left: 0px;
                -webkit-transform: matrix(-1, 0, 0, 1, 0, 0) rotate(5deg);
                transform: matrix(-1, 0, 0, 1, 0, 0) rotate(5deg);
            }

            &::after {
                right: 0px;
                -webkit-transform: matrix(-1, 0, 0, 1, 0, 0) rotate(-5deg);
                transform: matrix(-1, 0, 0, 1, 0, 0) rotate(-5deg);
            }

        &_img {
            height: 490px;
            background-image: url("#{$banner_url}banner.png");
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
        }

        &_center-item {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .title-img {
            background-image: url("#{$banner_url}title.png");
            background-repeat: no-repeat;
            background-position: center;
            background-size: 100%;
            width: 486px;
            height: 70px;
        }

        .sub-text {
            font-family: Noto Sans TC;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 21px;
            color: #FFFFFF;
            margin-bottom: 16px;
        }

        .input-area {
            margin-bottom: 10px;
            display: flex;

            input {
                width: 445px;
                padding: 8.5px 0;
                padding-left: 24px;
                background: #FFFFFF;
                /* shadow_word */
                font-size: 16px;
                box-shadow: 0px 4px 3px rgba(13, 11, 12, 0.2);
                border-radius: 6px;
                margin-right: 6px;
                border: none;

                &::placeholder {
                    color: #D2D2D2;
                }

                &:focus {
                    outline: none;
                    border: none;
                }
            }

            i {
                background-image: url("#{$banner_url}search.png");
                background-repeat: no-repeat;
                background-position: center;
                background-size: 40%;
                width: 40px;
                height: 40px;
                display: block;
                background-color: #FF1D6C;
                /* shadow_word */

                box-shadow: 0px 4px 3px rgba(13, 11, 12, 0.2);
                border-radius: 6px;
                cursor: pointer;
            }
        }

        .select-area-2 {
            display: flex;

            select {
                font-size: 16px;
                width: 219px;
                padding: 8px 8px 9px 16px;
                margin-right: 7px;
                background: #FFFFFF;
                border-radius: 6px;

                &:last-of-type {
                    margin-right: 6px;
                }
            }

            i {
                background-image: url("#{$banner_url}Vector.png");
                background-repeat: no-repeat;
                background-position: center;
                background-size: 40%;
                width: 40px;
                height: 40px;
                display: block;
                background-color: #FFB72C;
                /* shadow_word */

                box-shadow: 0px 4px 3px rgba(13, 11, 12, 0.2);
                border-radius: 6px;
            }
        }
    }
</style>