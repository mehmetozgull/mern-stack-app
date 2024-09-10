import axios from "axios"
import { toast } from "react-toastify";

export const postsAction = () => async (dispatch) => {
    try {
        const { data } = await axios.get("http://localhost:5050/posts");
        dispatch({ type: "POSTS", payload: data });

    } catch (error) {
        toast(error.response.data.message, {
            position: "top-right",
            autoClose: 5000,
        });
    }
}

export const createAction = (postData) => async (dispatch) => {
    try {
        const { data } = await axios.post("http://localhost:5050/create", postData);
        dispatch({ type: "CREATE", payload: data });
    } catch (error) {
        toast(error.response.data.message, {
            position: "top-right",
            autoClose: 5000,
        });
    }
}

export const updateAction = (id, postData) => async (dispatch) => {
    try {
        const { data } = await axios.patch(`http://localhost:5050/update/${id}`, postData);
        dispatch({ type: "UPDATE", payload: data });
    } catch (error) {
        toast(error.response.data.message, {
            position: "top-right",
            autoClose: 5000,
        });
    }
}

export const deleteAction = (id) => async (dispatch) => {
    try {
        await axios.delete(`http://localhost:5050/delete/${id}`);
        dispatch({ type: "DELETE", payload: id });
    } catch (error) {
        toast(error.response.data.message, {
            position: "top-right",
            autoClose: 5000,
        });
    }
}