import axios from "axios"
import { setEmail, setToken } from "../redux/store"
import { baseUrl } from "../constants"

const loginUser = async (email: string, password: string, navigate: any, dispatch: any) => {
    const result = await axios.post(`${baseUrl}/api/login`, { email, password })
    const { statusText } = result
    if (statusText === "OK" || statusText === "ok") {
        dispatch(setToken(result.data.token))
        dispatch(setEmail(result.data.email))
        localStorage.setItem("token", result.data.token)
        localStorage.setItem("email", result.data.email)
        return navigate("/order")
    }
}

const registerUser = async (email: string, password: string, phone: string, navigate: any, dispatch: any) => {
    const result: any = await axios.post(`${baseUrl}/api/register`, { email, password, phone })
    const { statusText } = result
    if (statusText === "Created" || statusText === "ok") {
        const loginResult = await axios.post(`${baseUrl}/api/login`, { email, password })
        dispatch(setToken(loginResult.data.token))
        dispatch(setEmail(result.data.email))
        localStorage.setItem("token", loginResult.data.token)
        localStorage.setItem("email", result.data.email)
        return navigate("/order")
    }
}

const getOrders = async (email: string, token: string) => {
    const result = await axios.get(`${baseUrl}/api/${email}/history`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    return result.data
}

export { loginUser, registerUser, getOrders }