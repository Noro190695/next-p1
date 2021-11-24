import axios from "axios";
import { IData } from "../../interfaces/search";


export const fetchData = async (n: string) => {
    try{
        const res = await axios.get<IData>(`https://test-task.shtrafovnet.com/fines/${n}`);
        return res.data;
    }catch(e) {
        return {};
    }
    
}