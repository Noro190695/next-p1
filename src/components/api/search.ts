import axios from "axios";
import { IData } from "../../interfaces/search";


export const fetchData = async (n: string) => {
    const res = await axios.get(`https://test-task.shtrafovnet.com/fines/${n}`);
    
    return res;
}