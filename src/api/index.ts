import axios from "axios";
import {ResponseType} from "../types";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

export const fetchNews = async () => {
    const {data} = await api.get<ResponseType>(`top-headlines?country=us&pageSize=21&apiKey=${process.env.REACT_APP_API_KEY}`)
    return data
}
