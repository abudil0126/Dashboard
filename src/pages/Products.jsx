import React, { useEffect, useState } from 'react'
import { instance } from '../api'

const Products = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const  fetchData = async () => {
        try{
            const response = await instance("/products")
            setData(response.data)
        }catch(error){
            console.log(error);
        }
        finally{
            setLoading(false)
        }
        }
        fetchData()
    }, [])

  return (
    <div>
        {loading ? <h1>Loading...</h1> :
            data.map(product =>
                <div className='product' key={product.id}>
                    <img width={100} height={100} src={product.images[0]} alt="" />
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>
                    </div>
                )
        }
    </div>
  )
}

export default Products