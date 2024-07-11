import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1/' }),
   endpoints: (builder) => ({
    getAllProducts: builder.query({
        query: () => ({
            url: '/product',
            method: 'GET',
        })
    }),
    getAllCategory: builder.query({
        query: () => ({
            url: '/category',
            method: 'GET',
        })
    }),
    getProductDetails: builder.query({
        query: (id) => ({
            url: `/product/${id}`,
            method: 'GET'
        })
    }),
    createProduct: builder.mutation({
        query: (productData) => ({
            url: '/create-product',
            method: 'POST',
            body: productData
        })
    })
   })
});


export const {
    useGetAllProductsQuery,
    useGetAllCategoryQuery,
    useGetProductDetailsQuery,
    useCreateProductMutation
} = baseApi;