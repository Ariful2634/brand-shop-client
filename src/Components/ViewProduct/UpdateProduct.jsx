import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {

    const update = useLoaderData()
   const {id}=useParams()
   

    const value = update.find(data => data._id == id)
    

    const handleUpdate = e =>{
        e.preventDefault()
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const updateTech = {image,name,brand,type,price,rating}
      

        fetch(`https://technology-and-electronics-brand-shop-server-4mhlcw7xz.vercel.app/update/${value._id}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateTech)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount){
                Swal.fire(
                    'Congratulations!',
                    'Product Updated Successfully!',
                    'success'
                  )
            }
        })

        
    }

    return (
        <div>
            <form onSubmit={handleUpdate}>
                <div className="form-control  lg:w-full">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="image" placeholder="Photo URL" defaultValue={value.image} className="input input-bordered w-full" />
                    </label>
                </div>
                <div className=" flex lg:flex-row flex-col gap-5">
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" placeholder="Name" defaultValue={value.name} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="brand" placeholder="Brand Name" defaultValue={value.brand} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className=" flex lg:flex-row flex-col gap-5">
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="type" placeholder="Type" defaultValue={value.type} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="price" placeholder="Price" defaultValue={value.price} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className=" flex lg:flex-row flex-col gap-5">
                    
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="rating" placeholder="Rating" defaultValue={value.rating} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div>
                   
                    <input className="btn btn-block mt-6 font-bold text-blue-600 bg-green-400 " type="submit" value="Update Product" />
                </div>

            </form>
        </div>
    );
};

export default UpdateProduct;