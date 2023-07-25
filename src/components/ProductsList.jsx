import React, { useEffect, useState } from 'react'
import Product from './Product';

const ProductsList = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const url = "https://fakestoreapi.com/products"

    // Consumo la API dada y realizo el manejo de errores...

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setError(false); 
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(true);
            });

    }, []);

    if (error) {
        return <div>Error al cargar los datos...</div>
    }

    return (
        <div className='items-list'>
            {data.map((product) => {
                return <Product key={product.id} {...product} />;
            })}

        </div>

    );
}



export default ProductsList
