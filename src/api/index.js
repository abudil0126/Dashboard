import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_PRO_URL,
    headers: {
        "Content-Type" : "application/json"
    }
})

const instance2 = axios.create({
    baseURL: import.meta.env.VITE_USE_URL,
    headers: {
        "Content-Type" : "application/json"
    }
})

export {instance}
export {instance2}