import axios from "axios";
const API = "https://dog.ceo/api/breeds/image/random";

const dog = async () => {
    try{
        const res = await axios.get(API);
        console.log(res.data || res.message);
        return res;
    }catch(error){
        console.log(error.response?.data||error.message);
    }
}

dog();
