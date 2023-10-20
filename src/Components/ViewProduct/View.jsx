/* eslint-disable react/prop-types */

// import { useState } from "react";
import { Link } from "react-router-dom";


const View = ({ brands }) => {
    // const [rate,setRate]=useState("")

    const { _id,image, name, brand, type, price, rating } = brands;


   

    return (
        <div className="mt-16">
            <div className="card w-96 bg-base-100 shadow-xl p-3 ">
                <figure><img className="h-[300px]" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-blue-700 h-[75px]">Name : {name}</h2>
                    <h2 className="font-semibold">Brand Name : {brand}</h2>
                    <p className="font-semibold">Type: {type}</p>
                    <p className="font-semibold">Price: ${price}</p>
                    
                     <p className="font-semibold">Rating: {rating}</p>
                    <div className="card-actions justify-between mt-3">
                       <Link to={`/productDetails/${_id}`}> <button className="btn btn-primary">View Details</button></Link>
                        <Link to={`/updateProduct/${_id}`}><button className="btn btn-primary">Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default View;