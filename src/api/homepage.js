import axios from "axios";
import { useAuthorizationHeader } from '@/composition-api/';
const activityRequest = axios.create({
    baseURL:
        'https://ptx.transportdata.tw/',
});
export const getActivity = () =>{
    return activityRequest.get(
        '/MOTC/v2/Tourism/Activity?$filter=Picture%2FPictureUrl1%20ne%20null&$top=4&$format=JSON',
        {
            header: useAuthorizationHeader(),
        }
    );
}
export const getRestaurant = () => {
    return activityRequest.get(
        '/MOTC/v2/Tourism/Restaurant?$filter=Picture%2FPictureUrl1%20ne%20null%20and%20City%20ne%20null&$top=10&$format=JSON',
        {
            header: useAuthorizationHeader(),
        }
    );
};