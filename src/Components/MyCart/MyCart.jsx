import { useLoaderData } from "react-router-dom";
import AddCart from "./AddCart";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const MyCart = () => {
    const {user}=useContext(AuthContext)
   

    const loadedProduct = useLoaderData()
    const [deleted,setDeleted]=useState(loadedProduct)
    const product = deleted.filter(pro=> pro.email==user.email)
    console.log(loadedProduct)


    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {
                    product.map(load=><AddCart deleted={deleted} setDeleted={setDeleted} key={load._id} load={load}></AddCart>)

                }
            </div>
        </div>
    );
};

export default MyCart;