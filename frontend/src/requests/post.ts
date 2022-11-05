import axios from "axios"
import { redirect } from "react-router-dom"

const loginUser = async (email: string, password: string, navigate: any) => {
    const result = await axios.post("http://localhost:4000/api/login", { email, password })
    const { statusText } = result
    if (statusText === "OK" || statusText === "ok") {
        console.log(result)
        return navigate("/order")
    }
}

export { loginUser }