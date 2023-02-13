import { useContext } from 'react';
import { useEffect } from 'react';
import { useReducer } from 'react';
import { createContext } from 'react'
import reducer from '../reducer/FilterReducer';
import { useProductContext } from './productcontex';
const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
}

export const FilterContextProvider = ({ children }) => {

    const { products } = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({type:"LOAD_FILTER_PRODUCTS", payload:products})
    },[])

    return <FilterContext.Provider value={{ ...state }}>{children}</FilterContext.Provider>
};


