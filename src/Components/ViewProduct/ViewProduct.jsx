// import { useState } from "react";
import {  useLoaderData, useParams } from "react-router-dom";
import Slider from "./Slider";
import View from "./View";


const ViewProduct = () => {

    


    // fetch('http://localhost:5000/tech')
    // .then(res=>res.json())
    // .then(data=>setBrand(data))
    // console.log(brand)
    const {name}=useParams()
    console.log(name)
    const load = useLoaderData()

    const brands = load.filter(brand=>brand.brand.toLowerCase()==name.toLowerCase())
    console.log(brands)
    

   

    return (
        <div> 
            <Slider></Slider>
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ml-6 lg:ml-24">
                    {
                        brands.map(brands=><View key={brands.id} brands={brands}></View>)
                        
                    }
                       
                </div>
            </div>
        </div>
    );
};

export default ViewProduct;