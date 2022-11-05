import axios from "axios"
import { setToken } from "../redux/store"

const loginUser = async (email: string, password: string, navigate: any, dispatch: any) => {
    const result = await axios.post("http://localhost:4000/api/login", { email, password })
    const { statusText } = result
    if (statusText === "OK" || statusText === "ok") {
        dispatch(setToken(result.data.token))
        localStorage.setItem("token", result.data.token)
        return navigate("/order")
    }
}

const registerUser = async (email: string, password: string, navigate: any, dispatch: any) => {
    const result: any = axios.post("http://localhost:4000/api/login", { email, password })
    const { statusText } = result
    if (statusText === "OK" || statusText === "ok") {
        const loginResult = await axios.post("http://localhost:4000/api/login", { email, password })
        dispatch(setToken(loginResult.data.token))
        localStorage.setItem("token", loginResult.data.token)
        return navigate("/order")
    }
}

export { loginUser, registerUser }