import React from 'react'
import { useDispatch } from 'react-redux';
import { RxUpdate } from "react-icons/rx";
import { AiOutlineDelete } from "react-icons/ai";
import { deleteAction } from '../redux/actions/post';
import { toast } from 'react-toastify';

const HomeCard = ({ post }) => {
    const dispatch = useDispatch();

    const deletePost = (id) => {
        dispatch(deleteAction(id))
        toast("Post silindi!", {
            position: "top-right",
            autoClose: 5000,
        });
        window.location.reload()
    }

    const updatePost = (id) => { 
        dispatch({ type: 'MODAL', payload: {open: true, updateId: id} })
    }

    return (
        <div className='relative w-1/4 border p-3 rounded-md bg-gray-50 m-3'>
            <div className='font-bold text-xl'>{post?.title}</div>
            <div className='text-gray-700 text-sm'>{post?.description}</div>
            <div className='flex items-center justify-between mt-4'>
                <span className='text-xs text-gray-500'>{post?.user}</span>
                <span className='text-xs text-gray-500'>{(post?.createdAt)?.substring(0, 10)}</span>
            </div>
            <div className='absolute -top-3 -right-3 flex items-center space-x-3'>
                <AiOutlineDelete onClick={() => deletePost(post._id)} size={22} className='bg-red-500 rounded-full text-white p-1 cursor-pointer' />
                <RxUpdate onClick={() => updatePost(post._id)}  size={22} className='bg-orange-500 rounded-full text-white p-1 cursor-pointer' />
            </div>
        </div>
    )
}

export default HomeCard