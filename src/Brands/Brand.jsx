/* eslint-disable react/prop-types */


const Brand = ({brand}) => {
    const {name,image}=brand;
    return (
        <div>
            <div className="shadow-xl p-4 rounded-lg">
               <div className="flex justify-center">
               <img className="w-[250px]" src={image} alt="" />
               </div>
                <h2 className="text-center mt-4 text-blue-600 font-bold text-xl">Brand Name: {name}</h2>
            </div>
        </div>
    );
};

export default Brand;