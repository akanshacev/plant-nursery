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

// editPlant
export const editPlant=async(id,data,header)=>{
    return await commonApi("PUT",`${base_url}/edit-plant/${id}`,data,header)
}

// delete plant
export const deletePlant = async(id,header)=>{
    return await commonApi("DELETE",`${base_url}/deleteplant/${id}`,{},header)
}

// cart
export const adtocart = async(id,header)=>{
    console.log(id,header,"cart api");
    return await commonApi("POST",`${base_url}/addtocart/${id}`,"",header)
}
// getcart
export const getcartitems = async(header)=>{
    return await commonApi("GET",`${base_url}/getcart`,"",header)
}
// wishlist
export const addtowishlistApi = async(data,header)=>{
    return await commonApi("POST",`${base_url}/addtowishlist/${data}`,"",header)
}

// getwishlist
export const getwishlist = async(header)=>{
    return await commonApi("GET",`${base_url}/getwish`,"",header)
}