import axios from "axios";
import { useAuthorizationHeader } from '@/composition-api/';
const activityRequest = axios.create({
    baseURL:
        'https://ptx.transportdata.tw/',
});
export const getActivity = () =>{
    console.log('進去', activityRequest);
    return activityRequest.get(
        '/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON',
        {
            header: useAuthorizationHeader(),
        }
    );
}