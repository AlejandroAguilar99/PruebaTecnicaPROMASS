import { useSelector } from "react-redux"
import { RootState } from "../../root/context/store";

export const useBlogGetters = () => {
    return {
        filterSelected:  useSelector((state: RootState) => state.blog.filter),
    }
}
