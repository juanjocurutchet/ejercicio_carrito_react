import React, { useContext } from 'react'
import { CartContext } from '../contexts/ShoppingCartContext'


const Product = ({ id, title, description, image, price }) => {

  const [cart, setCart] = useContext(CartContext);

  // Funcion para agregar productos al carrito desde la card...

  const addToCart = () => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        })
      } else {
        return [...currItems, { id, title, image, quantity: 1, price }]
      }
    })
  }

  // Funcion para quitar productos al carrito desde la card...

  const removeItem = (id) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        })
      }
    })
  }

  // Calculo la cantidad de productos utilizando el id...

  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  }

  const quantityPerItem = getQuantityById(id);

  return (
    <div className='item-box'>
      <div className='item-quantity-content'>
      {quantityPerItem > 0 && (
        <div className='item-quantity'>{quantityPerItem}</div>
      )}
      </div>
      <div className='item-box-content'>
        <img src={image}  alt={title} />
        <p className='title'>{title}</p>
        <p className='description'>{description}</p>
      </div>

      <div className='item-price'>$ {price.toFixed(2)}</div>
      <div className='button-products'>
        {
          quantityPerItem === 0 ? (
            <button className="item-add-button" onClick={() => addToCart()}>Agregar al Carrito</button>
          ) : (
            <button className="item-plus-button" onClick={() => addToCart()}>Agregar +</button>
          )
        }
        {quantityPerItem > 0 && (
          <button className="item-minus-button" onClick={() => removeItem(id)}>Quitar -</button>
        )}
      </div>

    </div>
  )
}

export default Product
