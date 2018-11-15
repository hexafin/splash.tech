import axios from "axios";
import {environment} from '../environment';
export const subscribeList = (body) => {
        return axios.get("https://us-central1-hexa-splash.cloudfunctions.net/subscribeEmail?email="+body.email)
}
