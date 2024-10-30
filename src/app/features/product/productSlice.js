import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pageNumber: 1,
  searchProduct:''
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    changePageNumber:(state,action) =>{
        state.pageNumber = action.payload
    },
    searchProduct:(state,action) =>{
        state.searchProduct = action.payload
        console.log(state.searchProduct);
        
    },
    clearSearchProduct:(state) =>{
        state.searchProduct = ''
    }
  },
})

// Action creators are generated for each case reducer function
export const { changePageNumber,searchProduct,clearSearchProduct } = productSlice.actions

export default productSlice.reducer