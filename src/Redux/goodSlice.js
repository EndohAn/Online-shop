import { createSlice } from "@reduxjs/toolkit";

export const goodSlice = createSlice( {

    name: 'goods',
    initialState: {
        selectedCategory: 'traditional',
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }

    }
})

export const getSelectedCategory = state => state.goods.selectedCategory;
export const { filterCategory } = goodSlice.actions;
export default goodSlice.reducer;