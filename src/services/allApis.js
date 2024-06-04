import { commonApi } from "./commonApi"
import base_url from "./server_url"

// register
export const userRegister= async (data)=>{
    return await commonApi("POST",`${base_url}/reg`,data,"")
}

// login
export const userLogin = async (data)=>{
    return await commonApi("POST",`${base_url}/login`,data,"")
}

// addplants
export const addplants = async (data,header)=>{
    return await commonApi("POST",`${base_url}/addPlant`,data,header)
}

// allplants admin side 
export const allplantsAdmin = async(header)=>{
    return await commonApi("GET",`${base_url}/allplantA`,"",header)
}

//  aalplants user side
export const allplantUser = async (header)=>{
    return await commonApi("GET",`${base_url}/allplantsU`,"",header)
}