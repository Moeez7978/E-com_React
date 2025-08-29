// import { React,createContext, useContext,useEffect,useReducer} from "react";
// import App from "./App";
// import axios from "axios";
// import reducer from "./Reducer/productReducer";

// const AppContext = createContext();
// const API = "https://api.pujakaitem.com/api/products";
// const initialState = {
//     isLoading : false,
//     isError : false,
//     products : [],
//     featureProducts : [],
//     isSingleLoading : false,
//     singleProduct : {}
// }
// const AppProvider = ({ children }) => {

// const[state,dispatch] = useReducer(reducer,initialState);
// const getProducts = async(url) => {
//     dispatch({type:"SET_LOADING"})
//     try {
//         const response = await axios.get(url)
//         const products =await response.data;
//         dispatch({type:"SET_API_DATA",payload:products})
//     } catch (error) {
//         dispatch({type:"API_ERROR"})
//     }
// }
// // 2nd API Call for single Product
// const getSingleProduct = async(url) => {
//     dispatch({type:"SET_SINGLE_LOADING"})
//     try {
//         const response = await axios.get(url)
//         const singleProduct =await response.data;
//         // Extract ID from URL
//     const id = url.split("=")[1];

//     // Find the matching product
//     const product = data.find((item) => item.id === id);

//     if (!product) {
//       console.warn("Product not found for ID:", id);
//     }

//         dispatch({type:"SET_SINGLE_PRODUCT",payload:singleProduct})
//     } catch (error) {
//         dispatch({type:"SINGLE_API_ERROR"})
//     }
// }
//     useEffect(() => {
//         getProducts(API);
//     }, []);
//     return <AppContext.Provider value={{...state,getSingleProduct}}>{children}</AppContext.Provider>

// };
// const useProductContext = () => {
//     return useContext(AppContext);
// }
// export { AppContext, AppProvider, useProductContext };
import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "./Reducer/productReducer";

const ProductContext = createContext();
const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch all products
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await axios.get(url);
      const products = response.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // Fetch single product by ID
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const response = await axios.get(url);
      const data = response.data;

      const id = url.split("=")[1];
      const product = data.find((item) => item.id === id);

      if (!product) {
        console.warn("Product not found for ID:", id);
      }

      dispatch({ type: "SET_SINGLE_PRODUCT", payload: product });
    } catch (error) {
      dispatch({ type: "SINGLE_API_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <ProductContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(ProductContext);
};

export { ProductContext, ProductProvider, useProductContext };