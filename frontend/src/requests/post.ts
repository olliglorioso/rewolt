import axios from "axios"
import { useDispatch } from "react-redux"
import { redirect } from "react-router-dom"
import { setToken } from "../redux/store"

const loginUser = async (email: string, password: string, navigate: any, dispatch: any) => {
    const result = await axios.post("http://localhost:4000/api/login", { email, password })
    const { statusText } = result
    if (statusText === "OK" || statusText === "ok") {
        console.log(result)
        dispatch(setToken("moikka"))
        return navigate("/order")
    }
}

export { loginUser }