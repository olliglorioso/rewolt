import axios from "axios"

const loginUser = async (email: string, password: string) => {
    const result = await axios.post("https://olliglorioso-automatic-lamp-7xg57qpw75gfxxjq-4000.preview.app.github.dev/api/login", { email, password })
    if (result.data.status === 400) console.log("epäonnistui")
}

export { loginUser }