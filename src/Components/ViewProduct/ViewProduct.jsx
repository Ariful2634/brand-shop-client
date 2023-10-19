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
                    <h2>No Data Found</h2>
                }
            </div>
        </div>
    );
};

export default ViewProduct;