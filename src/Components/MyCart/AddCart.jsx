/* eslint-disable react/prop-types */

import Swal from "sweetalert2";


const AddCart = ({load,deleted,setDeleted}) => {

    const {_id,image,brand,name,price}=load

    const handleDelete = (id) =>{
        console.log(id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://technology-and-electronics-brand-shop-server-4mhlcw7xz.vercel.app/cart/${id}`,{
                    method:"DELETE"
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    if(data.deletedCount  > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                          const remaining = deleted.filter(del=>del._id!==_id)
                          setDeleted(remaining)
                    }
                })

              
            }
          })

    }

    return (
        <div>
            <div className="card card-side  bg-base-100 shadow-xl">
                <figure><img className="w-[250px] h-[300px]" src={image} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="font-semibold">Brand: {brand}</p>
                    <p className="font-semibold">Price: ${price}</p>
                    <div className="card-actions ">
                        <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCart;