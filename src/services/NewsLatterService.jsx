import axios from "axios";
import {environment} from '../environment';
export const subscribeList = (body) => {
        return axios.get(environment.mailchimpUrl+"lists/subscribe.json?apikey="+environment.mailchimpApi+"'&id="+environment.mailchimpListid+"&c=?&email[email]='"+body.email+"'&double_optin=false");
}
