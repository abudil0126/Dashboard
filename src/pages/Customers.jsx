import React from 'react'
import { instance2 } from '../api'
import { useState, useEffect } from 'react'


const Customers = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const  fetchData = async () => {
        try{
            const response = await instance2("/users")
            setData(response.data.data)
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
        <div>
        {loading ? <h1>Loading...</h1> :
            data.map(user =>
                <div className='user' key={user.id}>
                    <img width={100} height={100} src={user.avatar} alt="" />
                    <h2>{user.first_name}</h2>
                    <h3>{user.last_name}</h3>
                    <p>{user.email}</p>
                    <button>Active</button>
                    </div>
                )
        }
    </div>
    </div>
  )
}

export default Customers