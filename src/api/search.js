import axios from 'axios';
import { useAuthorizationHeader } from '@/composition-api/';
const activityRequest = axios.create({
    baseURL: 'https://ptx.transportdata.tw/',
});
//景點搜尋
export const getSpotSearch = (parms) => {
    //https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=contains(Name%2C'%E9%BB%9E')%20and%20contains(Address%2C'%E5%B1%8F%E6%9D%B1')&$top=30&$format=JSON

    return activityRequest.get(
        `/MOTC/v2/Tourism/ScenicSpot?$filter=contains(Name%2C'${parms.searchText}')%20and%20contains(Address%2C'${parms.searchLocate}')and%20Picture%2FPictureUrl1%20ne%20null&$top=30&$format=JSON`,
        {
            header: useAuthorizationHeader(),
        }
    );
};
//餐廳搜尋
export const getRestaurantSearch = (parms) => {
    
    return activityRequest.get(
        `/MOTC/v2/Tourism/Restaurant?$filter=contains(Name%2C'${parms.searchText}')%20and%20contains(Address%2C'${parms.searchLocate}')and%20Picture%2FPictureUrl1%20ne%20null&$top=30&$format=JSON`,
        {
            header: useAuthorizationHeader(),
        }
    );
};
//住宿搜尋
export const getHotelSearch = (parms) => {
    //https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel?$filter=contains(Name%2C'%E9%BB%9E')%20and%20contains(Address%2C'%E5%B1%8F%E6%9D%B1')and%20Picture%2FPictureUrl1%20ne%20null&$top=30&$format=JSON

    return activityRequest.get(
        `/MOTC/v2/Tourism/Hotel?$filter=contains(Name%2C'${parms.searchText}')%20and%20contains(Address%2C'${parms.searchLocate}')and%20Picture%2FPictureUrl1%20ne%20null&$top=30&$format=JSON`,
        {
            header: useAuthorizationHeader(),
        }
    );
};
//活動搜尋
export const getActiveSearch = (parms) => {
    return activityRequest.get(
        `/MOTC/v2/Tourism/Activity?$filter=contains(Name%2C'${parms.searchText}')%20and%20contains(Address%2C'${parms.searchLocate}')and%20Picture%2FPictureUrl1%20ne%20null&$top=30&$format=JSON`,
        {
            header: useAuthorizationHeader(),
        }
    );
};
