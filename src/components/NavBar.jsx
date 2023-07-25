import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../contexts/ShoppingCartContext'



const NavBar = () => {

    const [cart, setCart] = useContext(CartContext);

    const quantity = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);    

  return (
    <nav>
        <Link to={"/"} className='link'>
        <h1> Online Shopping </h1>        
        </Link>
      <ul className='nav-list'>
        <Link to={"/cart"} className='link'> 
        <li>
            <strong className='cart' >🛒</strong> <span className='cart-count'>{quantity}</span>
        </li>        
        </Link>
      </ul>
    </nav>
  )
}

export default NavBar
