import axios from "axios"
import { setEmail, setToken } from "../redux/store"
import { baseUrl } from "../constants"
import { Store } from 'react-notifications-component';

const loginUser = async (email: string, password: string, navigate: any, dispatch: any) => {
    try {
        const result = await axios.post(`${baseUrl}/api/login`, { email, password })
        const { statusText } = result
        if (statusText === "OK" || statusText === "ok") {
            dispatch(setToken(result.data.token))
            dispatch(setEmail(result.data.email))
            localStorage.setItem("token", result.data.token)
            localStorage.setItem("email", result.data.email)
            return navigate("/order")
        }
    } catch (e: any) {
        Store.addNotification({
            title: "Error!",
            message: "Invalid credentials.",
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true
            }
        });

    }
}

const registerUser = async (email: string, password: string, phone: string, navigate: any, dispatch: any) => {
    try {
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
    } catch (e: any) {
        Store.addNotification({
            title: "Error!",
            message: "Something went wrong.",
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true
            }
        });
    }
}

const getOrders = async (email: string, token: string) => {
    try {
        const result = await axios.get(`${baseUrl}/api/history`, {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        })
        return result.data
    } catch (e: any) {
        Store.addNotification({
            title: "Error!",
            message: "Something went wrong.",
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true
            }
        });
    }

}

const newListing = async (dropoffId: string, category: string, title: string, price: string, token: string) => {
    try {
        const price2 = parseFloat(price)
        const result = await axios.post(`${baseUrl}/api/listing`, 
            {data: { dropoffId, title, price: price2, category },
            headers: {
              Authorization: `Bearer ${token}`,
            }},
        )
        console.log(result)
    } catch (e: any) {
        console.log(e)
        Store.addNotification({
            title: "Error!",
            message: "Something went wrong.",
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true
            }
        });
    }

}

const getFee = async (id: string, address: string, token: string) => {
    try {
        const fee = await axios.post(`${baseUrl}/api/listing/deliveryprice`, {
            data: {
                orderId: id,
                address: address
            },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return fee.data.fee as {amount: number, currency: string}
    } catch (err: any) {
        console.log(err)
        Store.addNotification({
            title: "Error!",
            message: "Something went wrong.",
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true
            }
        });
    }

}

export { loginUser, registerUser, getOrders, newListing, getFee }