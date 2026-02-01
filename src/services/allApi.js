// register user


import { base_url } from "./base_url"
import { commonApi } from "./commonApi"

export const registerApi = async(userData)=>{
    return await commonApi("POST",`${base_url}/announcements/user/register`,userData,"")
}



export const loginApi = async(userData)=>{
    return await commonApi("POST",`${base_url}/announcements/user/login`,userData,"")
}
export const announcementsApi = async()=>{
    return await commonApi("GET",`${base_url}/announcements`,"","")

}

export const createAnnouncementApi = async(data)=>{
    return await commonApi("POST",`${base_url}/announcements`,data,"")
}