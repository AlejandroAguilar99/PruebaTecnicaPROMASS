import { useDispatch } from "react-redux";
import { BlogState, FilterTypes, blogSlice } from "./blogSlice";

export const useBlogActions = () => {
    //Hooks
    const dispatch = useDispatch();
    //Computed
    const actions = blogSlice.actions;

    return {
        //Methods
        set: (payload: Partial<BlogState>) => dispatch(actions.set(payload)),
        setFilter: (payload: FilterTypes) => dispatch(actions.setLogin(payload)),
    }
}
