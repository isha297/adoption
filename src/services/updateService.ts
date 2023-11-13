import axios from "axios";
import { updateForm } from "../models/updateform";

const apiURL = process.env.REACT_APP_API_URL + "updates" ||"";

export const postUpdate = async(formValues: updateForm) : Promise<any> =>{
    const response = await axios.post(`${apiURL}`,formValues);
    return response.data;
}
