import { AppContext } from '../Context/AppContext'
import React, { useContext } from 'react'

const AllResponse = () => {
    const { entry } = useContext(AppContext);
    console.log("AllResponse===",entry);
    return (
        <div className="response-container">
            <h1 className='my-20 text-4xl font-bold text-white'>All Responses</h1>
            {entry.map((e) => (
                <div key={e._id} className='response-box'>
                    <h1>{e.name}</h1>
                    <h1>{e.email}</h1>
                    <h1>{e.subject}</h1>
                    <h1>{e.message}</h1>
                </div>
            ))}
        </div>
    );
}

export default AllResponse;
