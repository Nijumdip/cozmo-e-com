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



export const useFilterContext = () => {
    return useContext(FilterContext)
}
