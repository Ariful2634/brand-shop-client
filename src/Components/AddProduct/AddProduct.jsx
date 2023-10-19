import Swal from "sweetalert2";


const AddProduct = () => {


    const handleAdd = e =>{
        e.preventDefault()
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const des = form.des.value;
        const rating = form.rating.value;
        const addTech = {image,name,brand,type,price,des,rating}
       

        

        fetch('http://localhost:5000/tech',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(addTech)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire(
                    'Congratulations!',
                    'Product Added Successfully!',
                    'success'
                  )
            }
        })

        form.reset()

    }

    return (
        <div>
            <h2 className="text-center text-3xl font-bold text-blue-600 italic mt-8 mb-4">Add Product</h2>

            <form onSubmit={handleAdd}>
                <div className="form-control  lg:w-full">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="image" placeholder="Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>
             <div className=" flex lg:flex-row flex-col gap-5">
             <div className="form-control lg:w-1/2">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <label className="input-group">
                       
                        <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control lg:w-1/2">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
                    </label>
                </div>
             </div>
              <div className=" flex lg:flex-row flex-col gap-5">
              <div className="form-control lg:w-1/2">
                    <label className="label">
                        <span className="label-text">Type</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control lg:w-1/2">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                    </label>
                </div>
              </div>
              <div className=" flex lg:flex-row flex-col gap-5">
              <div className="form-control lg:w-1/2">
                    <label className="label">
                        <span className="label-text">Short Description</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="des" placeholder="Short Description" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control lg:w-1/2">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                    </label>
                </div>
              </div>
              <div>
                <input className="btn btn-block mt-6 font-bold text-blue-600 bg-green-400 " type="submit" value="Add Product" />
              </div>
               
            </form>
        </div>
    );
};

export default AddProduct;