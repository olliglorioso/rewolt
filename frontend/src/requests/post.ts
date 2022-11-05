import axios from "axios"

const loginUser = async (email: string, password: string) => {
    const result = await axios.post("http://localhost:400/api/login", { email, password })
    if (result.data.status === 400) console.log("epäonnistui")
}

export { loginUser }