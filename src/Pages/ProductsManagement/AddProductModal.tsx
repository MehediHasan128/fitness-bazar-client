import { FieldValues, useForm } from "react-hook-form";
import { useCreateProductMutation } from "../../Redux/api/baseApi";
import Swal from "sweetalert2";

const AddProductModal = () => {

  const {register, handleSubmit} = useForm();
  const [createProduct] = useCreateProductMutation();

  const handelAddProduct = async (data: FieldValues) => {
    const {name, description, price, quantity, category, imageUrl} = data;

    const ProductPrice = Number(price);
    const ProductQuantity = Number(quantity);

    const productData = {
      name,
      description,
      price: ProductPrice,
      quantity: ProductQuantity,
      category, imageUrl
    }
    
    const res = await createProduct(productData);

    if(res.data.statusCode === 200){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

    return (
      <div className="modal-box">
      <form onSubmit={handleSubmit(handelAddProduct)} className="space-y-4">
        <div className="flex flex-col">
            <label className="font-semibold mb-1">Name:</label>
            <input {...register('name')} type="text" placeholder="Enter Product name" className="bg-slate-100 px-5 py-3 rounded-md" />
        </div>
        <div className="flex flex-col">
            <label className="font-semibold mb-1">Description:</label>
            <textarea {...register('description')} cols={30} rows={5} className="bg-slate-100 px-5 py-3 rounded-md" placeholder="Describe your products"></textarea>
        </div>


        <div className="flex gap-5">
        <div className="flex flex-col">
            <label className="font-semibold mb-1">Price:</label>
            <input {...register('price')} type="number" placeholder="Price" className="bg-slate-100 px-5 py-3 rounded-md" />
        </div>
        <div className="flex flex-col">
            <label className="font-semibold mb-1">Quantity:</label>
            <input {...register('quantity')} type="number" placeholder="Quantity" className="bg-slate-100 px-5 py-3 rounded-md" />
        </div>
        </div>


        <div className="flex gap-5">
        <div className="flex flex-col">
            <label className="font-semibold mb-1">Category:</label>
            <input {...register('category')} type="text" placeholder="Category" className="bg-slate-100 px-5 py-3 rounded-md" />
        </div>
        <div className="flex flex-col">
            <label className="font-semibold mb-1">Product Image:</label>
            <input {...register('imageUrl')} type="text" placeholder="Photo Url" className="bg-slate-100 px-5 py-3 rounded-md" />
        </div>
        </div>

        <input className="px-5 py-2 bg-blue-400 rounded-md font-medium cursor-pointer w-full" type="submit" value="Add Product" />

      </form>

      <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
    </div>
    );
};

export default AddProductModal;