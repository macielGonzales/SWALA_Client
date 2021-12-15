import { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'

function UserApi(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [isNameUser, setIsNameUser] = useState('')
    const [isNameUserAvatar, setIsNameUserAvatar] = useState('')
    const [cart, setCart] = useState([])
    const [fechaEntrega, setFechaEntrega] = useState('')
    const [pedidos, setPedidos] = useState([])

    useEffect(() => {
        if(token){
            const getUser = async () =>{
                try {
                    const res = await axios.get('/usuario/infor', {
                        headers: {Autorizacion: token}
                    })
                    setIsLogged(true)
                    res.data.role === 1 ? setIsAdmin(true) : setIsAdmin (false)
                    setIsNameUser(res.data.nombre)
                    setIsNameUserAvatar(res.data.nombre.charAt(0))

                    setCart(res.data.cart)
                    setFechaEntrega(res.data.fechaEntrega)
                } catch (err) {
                    alert(err.response.data.msg)
                }
            }
            getUser()
        }
       
    }, [token])

    useEffect(() => {
        if(token){
            const getPedidos = async() =>{
                const res = await axios.get('/usuario/pedidos',{
                    headers: {Autorizacion: token}
                })
                console.log(res)
            }
            getPedidos()
        }
    },[token])
    const addCart = async (product ) => {
        if(!isLogged) return alert("Porfavor inicie sesion para poder comprar")

        const check = cart.every( item => {
            return item._id !== product._id
        })

        if(check){
            setCart([...cart, {...product, quantity:1}])

            await axios.patch('/usuario/addCart', {cart: [...cart, {...product, quantity:1}]}, {
                headers: {Autorizacion: token}
            })
        } else{
            alert("Este producto ya fue añadido al carrito")
        }
    }

    const addFechaEntrega = async (fechaEntrega) => {
        setFechaEntrega(moment(fechaEntrega).subtract(5,'h'))
        await axios.patch('/usuario/addFechaEntrega', {fechaEntrega: fechaEntrega}, {headers: {Autorizacion: token}})
        
    }
 
    return {
       isLogged: [isLogged, setIsLogged],
       isAdmin: [isAdmin, setIsAdmin],
       isNameUser: [isNameUser, setIsNameUser],
       isNameUserAvatar: [isNameUserAvatar, setIsNameUserAvatar],
       cart: [cart, setCart],
       fechaEntrega: [fechaEntrega, setFechaEntrega],
       addCart: addCart,
       addFechaEntrega: addFechaEntrega,
    }
}

export default UserApi
