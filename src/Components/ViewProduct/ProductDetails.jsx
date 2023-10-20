import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";


const ProductDetails = () => {
    const {user}=useContext(AuthContext)

    const loader = useLoaderData()
    const { id } = useParams()
   

    const details = loader.find(load => load._id == id)
    details.email=user.email
    const mail=details


    const handleCart = ()=>{
       

        fetch('http://localhost:5000/cart',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(mail)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire(
                    'Congratulations!',
                    'Add To Cart Successfully!',
                    'success'
                  )
            }
        })
    }

    return (
        <div className="flex justify-center">
            <div className="card w-96 bg-base-100 shadow-xl mt-10 ">
                <figure><img className="h-[300px]" src={details.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="text-center space-y-3">
                    <h2 className="card-title text-2xl flex justify-center text-blue-700">{details.name}</h2>
                    <p className="font-semibold">{details.des}</p>
                    <p className="font-bold">Price: ${details.price}</p>
                    </div>
                    <div className="card-actions justify-center mt-3">
                        <button onClick={handleCart} className="btn btn-accent font-bold ">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;