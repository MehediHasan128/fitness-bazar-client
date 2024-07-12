import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (searchItem) => ({
        url: `/product?searchTerm=${searchItem}`,
        method: "GET",
      }),
    }),
    getAllCategory: builder.query({
      query: () => ({
        url: "/category",
        method: "GET",
      }),
    }),
    getProductDetails: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
    }),
    createProduct: builder.mutation({
      query: (productData) => ({
        url: "/create-product",
        method: "POST",
        body: productData,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
    }),
    addToCart: builder.mutation({
      query: (cartProduct) => ({
        url: "/cart",
        method: "POST",
        body: cartProduct,
      }),
    }),
    getAllCart: builder.query({
      query: () => ({
        url: "/cart",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetAllCategoryQuery,
  useGetProductDetailsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useAddToCartMutation,
  useGetAllCartQuery,
} = baseApi;
