import axios from "axios";

export const commonApi = async(httpRequest,url,reqbody,reqHeader)=>{
    const reqConfiq ={
        method:httpRequest,
        url:url,
        data:reqbody,
        headers:reqHeader?reqHeader:{"content-type":"application/json"}

    }
    return await axios(reqConfiq).then((result)=>{
        return result;
    }).catch((err)=>{
        return err;
    })
}

