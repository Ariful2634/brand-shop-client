// import { useState } from "react";
import {  useLoaderData, useParams } from "react-router-dom";
import Slider from "./Slider";
import View from "./View";


const ViewProduct = () => {

    const {name}=useParams()
  
    const load = useLoaderData()

    const brands = load.filter(brand=>brand.brand.toLowerCase()==name.toLowerCase())
    
    

   

    return (
        <div> 
            <Slider></Slider>
            <div>
                {
                    brands.length>0 ? (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ml-6 lg:ml-24">
                    {
                        brands.map(brands=><View key={brands._id} brands={brands}></View>)
                        
                    }
                       
                </div>
                    ):

                    <div className="text-center mt-6">
                        <h1 className="text-4xl font-bold text-red-600 mb-2">Oops!!!</h1>
                        <h2 className="text-4xl font-bold text-red-600">No Data Found</h2>
                    </div>
                }
            </div>
        </div>
    );
};

export default ViewProduct;