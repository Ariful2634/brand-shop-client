/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Brand = ({brand}) => {
    const {name,image}=brand;
    return (
        <div>
            <Link to={`viewProduct/${name}`}>
            <div  className="shadow-xl p-4 rounded-lg">
               <div className="flex justify-center">
               <img className="w-[250px]" src={image} alt="" />
               </div>
                <h2 className="text-center mt-4 text-blue-600 font-bold text-xl">Brand Name: {name}</h2>
            </div>
            </Link>
        </div>
    );
};

export default Brand;