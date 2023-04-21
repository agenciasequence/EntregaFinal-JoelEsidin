import { Link } from 'react-router-dom'
import Cart from './Cart'
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react'



const CartWidget = () => {
  const [cart, setCart] = useContext(CartContext)
 

  const cantidad = cart.reduce((acc, curr) => {

    return acc + curr.cantidad



  }, 0)
  
  return (
    
    <div>
      <Link to= {`/Cart`}>
      <span  className="material-symbols-outlined">
        shopping_cart
        </span>
        <span>{cantidad}</span>
        </Link>
    </div>
    
  )
}

export default CartWidget