import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/ShoppingCartContext';
import { Link } from 'react-router-dom';

// Creo el carrito de compras...

const ShoppingCart = () => {
    const [cart, setCart] = useContext(CartContext);
    const [mensajeVisible, setMensajeVisible] = useState(false);
    const [cantidadComprada, setCantidadComprada] = useState(0);
    const [precioTotal, setPrecioTotal] = useState(0);

    // Calculo la cantidad de productos...
    const quantity = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);

    // Calculo es precio total...

    const totalPrice = cart.reduce((acc, curr) => {
        return acc + curr.quantity * curr.price;
    }, 0);

    // Funcion para adicionar mas productos del mismo articulo...

    const addProduct = (id) => {
        setCart((cart) => {
            const iscartsFound = cart.find((cart) => cart.id === id);
            if (iscartsFound) {
                return cart.map((cart) => {
                    if (cart.id === id) {
                        return { ...cart, quantity: cart.quantity + 1 };
                    } else {
                        return cart;
                    }
                })
            } else {
                return [...cart, { id, title, image, quantity: 1, price }]
            }
        })
    }

    // Funcion para restar productos del mismo articulo...

    const deleteProduct = (id) => {
        setCart((cart) => {
            if (cart.find((cart) => cart.id === id)?.quantity === 1) {
                return cart.filter((cart) => cart.id !== id);
            } else {
                return cart.map((cart) => {
                    if (cart.id === id) {
                        return { ...cart, quantity: cart.quantity - 1 };
                    } else {
                        return cart;
                    }
                });
            }
        });
    };

    // Funcion para eliminar lo productos del mismo articulo...

    const clearProduct = (id) => {
        const foundId = cart.find((element) => element.id === id);

        const newCart = cart.filter((element) => {
            return element !== foundId;
        });

        setCart(newCart);
    };

    // Funcion para comprar los productos agregados al carrito...

    const buyCart = () => {

        const cantidadComprada = setCantidadComprada(quantity)
        const precioTotal = setPrecioTotal(totalPrice)

        setMensajeVisible(true);
        setCart([]);
    };



    return (
        <div className='cart-container'>

            {cart.map((product, id) => {
                return (
                    <div className='products-cart' key={product.id}>
                        <div className='image'>
                            <img src={product.image} alt={product.title} />
                        </div>
                        <h3 className='product-title'>{product.title}</h3>

                        <div className='button-mas-menos'>
                            <button onClick={() => deleteProduct(product.id)}>-</button>
                            <div className='product-quantity'>{product.quantity}</div>
                            <button onClick={() => addProduct(product.id)}>+</button>
                        </div>

                        <div className='clear-product' onClick={() => clearProduct(product.id)} >Eliminar</div>

                        <div className='item-total-price'> $ {(product.price * product.quantity).toFixed(2)}</div>

                    </div>)
            })}

            <div className='total-price'>
                <h3>Resumen de Compra</h3>

                <div className='quantity'>Productos en Carrito ( {quantity} )</div>
                <div className='total'>Total: $ {totalPrice.toFixed(2)}</div>
                <div>
                    {mensajeVisible && <h3>Felicidades!!! Has comprado {cantidadComprada} productos por un valor de $ {precioTotal.toFixed(2)}</h3>}

                </div>
                {
                    (quantity > 0) ? (
                        <div className='buttons-resumen' >

                            <Link to={"/"} className='link-seguir'>
                                <button className='button-seguir'>Seguir Comprando</button>
                            </Link>

                            <button className='button-comprar' onClick={buyCart}>Comprar Carrito</button>


                        </div>

                    ) : (<Link to={"/"} className='link-cart'>
                        <button className='button-salir'>Salir</button>
                    </Link>
                    )
                }
            </div>

        </div>
    );




}

export default ShoppingCart

