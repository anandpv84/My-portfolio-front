import { commonApi } from "./commnApi";
import { BASE_URL } from "./baseurl";


export const registerApi = async(user)=>{
    return await commonApi("post",`${BASE_URL}/user/register`,user,"")
}

export const loginApi=async(reqBody)=>{
    return await commonApi("post",`${BASE_URL}/user/login`,reqBody,"")
}

export const addprojectApi = async(reqBody,reqHeader)=>{
    return await commonApi('post',`${BASE_URL}/project/add`,reqBody,reqHeader)
}

export const allprojectApi = async()=>{
    return await commonApi("GET",`${BASE_URL}/projects/allproject`,'','')
}

export const deleteprojectApi = async(id,reqHeader)=>{
    return await commonApi("DELETE",`${BASE_URL}/project/remove/${id}`,{},reqHeader)
}
