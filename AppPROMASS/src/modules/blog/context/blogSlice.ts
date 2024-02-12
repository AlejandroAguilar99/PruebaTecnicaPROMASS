import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type FilterTypes = 'title' | 'autor' | 'content';

export interface BlogState {
    "filter": FilterTypes;
}

export const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        filter: 'title'
    } as BlogState,
    reducers: {
        set: (state, value: PayloadAction<Partial<BlogState>>) => ({ ...state, ...value.payload }),
        setLogin: (state, value: PayloadAction<FilterTypes>) => { state.filter = value.payload },
    },
});