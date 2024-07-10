import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1/' }),
   endpoints: (builder) => ({
    getAllProducts: builder.query({
        query: (productData) => ({
            url: '/product',
            method: 'GET',
            body: productData
        })
    }),
    getAllCategory: builder.query({
        query: (categorydata) => ({
            url: '/category',
            method: 'GET',
            body: categorydata
        })
    }),
    getProductDetails: builder.query({
        query: (id) => ({
            url: `/product/${id}`,
            method: 'GET'
        })
    })
   })
});


export const {
    useGetAllProductsQuery,
    useGetAllCategoryQuery,
    useGetProductDetailsQuery
} = baseApi;