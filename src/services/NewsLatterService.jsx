import axios from "axios";
import {environment} from '../environment';
export const subscribeList = (body) => {
        return axios.get(environment.splashApi + "/subscribeEmail?email="+body.email)
}
