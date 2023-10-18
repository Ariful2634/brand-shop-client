import { useEffect, useState } from "react";
import Brand from "./Brand";


const Brands = () => {

    const [brand,setBrand]=useState([])
    useEffect(()=>{
        fetch('brand.json')
        .then(res=>res.json())
        .then(data=>setBrand(data))
    },[])

    return (
        <div className="mt-16">
            <h2 className="font-bold text-5xl text-center mb-4 text-blue-600">Brands </h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
                {
                    brand.map(brand=><Brand key={brand.id} brand={brand}></Brand>)
                }
            </div>
        </div>
    );
};

export default Brands;