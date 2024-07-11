import Swal from "sweetalert2";
import { useDeleteProductMutation, useGetAllProductsQuery } from "../../Redux/api/baseApi";
import { TProducts } from "../../Types/types";
import ProductTable from "./ProductTable";
import AddProductModal from "./AddProductModal";

const ProductManagement = () => {
  const { data } = useGetAllProductsQuery(undefined);

  const products = data?.data;

  const [deleteProduct] = useDeleteProductMutation(undefined);
  
  const handelDeleteProduct = (id: string) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {

        deleteProduct(id);

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="max-w-[80%] mx-auto my-20">
      <div className="mb-10">
        <button
          onClick={() => document.getElementById("my_modal_1").showModal()}
          className="flex items-center gap-2 text-xl font-semibold bg-slate-100 px-5 py-3 rounded-md border shadow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add Product
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-base">
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th className="flex justify-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product: TProducts) => (
              <ProductTable
                key={product._id}
                product={product}
                handelDeleteProduct={handelDeleteProduct}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <AddProductModal />
      </dialog> */}

      <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
        <AddProductModal />
      </dialog>
    </div>
  );
};

export default ProductManagement;
