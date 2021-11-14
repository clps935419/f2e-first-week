import { getActivity, getRestaurant } from './homepage.js';
import {
    getSpotSearch,
    getRestaurantSearch,
    getHotelSearch,
    getActiveSearch,
} from './search.js';

export const apiGetActivity = getActivity;
export const apiGetRestaurant = getRestaurant;

//搜尋用
export const apiGetSpotSearch = getSpotSearch;
export const apiGetRestaurantSearch = getRestaurantSearch;
export const apiGetHotelSearch = getHotelSearch;
export const apiGetActiveSearch = getActiveSearch;

