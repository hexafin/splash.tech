import axios from "axios";
import {environment} from '../environment';
export const sendMessage = (body) => {
        return axios.get(environment.splashApi + "/contactUs?name="+body.name + '&email=' + body.email + '&subject=' + body.subject + '&text=' + body.text)
}


