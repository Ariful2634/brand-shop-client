/* eslint-disable react/prop-types */


const View = ({ brands }) => {

    const { image, name, brand, type, price, rating } = brands;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl p-3 ">
                <figure><img className="h-[300px]" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <h2>Brand Name: {brand}</h2>
                    <p>Type: {type}</p>
                    <p>Price: ${price}</p>
                    <p>Rating: {rating}</p>
                    <div className="card-actions justify-between mt-3">
                        <button className="btn btn-primary">View Details</button>
                        <button className="btn btn-primary">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default View;