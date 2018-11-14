import axios from "axios";
import { environment } from "../environment";

export const splashtagAvailable = (splashtag) => {
        return axios.post(environment.apiURL + '/splashtagAvailable?splashtag='+splashtag)
}
export const postClaimSplashTag = (splashtag) => {
        return axios.post(environment.apiURL + '/claimSplashtag?splashtag='+splashtag)
}
export const claimSplashTag = (splashtag,phone) => {
        return axios.get(environment.apiURL + '/claimSplashtag?splashtag='+splashtag+'&phone='+phone)
}
