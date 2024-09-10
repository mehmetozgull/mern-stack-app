import React, { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { createAction, updateAction } from '../redux/actions/post';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';


const Modal = () => {
    const [postData, setPostData] = useState({ user: "", title: "", description: "" })

    const { modal } = useSelector((state) => state.modal)
    
    const onChangeInput = (e) => {
        setPostData({ ...postData, [e.target.name]: e.target.value })
    }

    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch({ type: 'MODAL', payload: false })
    }

    const postCreate = () => {
        if(modal?.updateId){
            dispatch( updateAction(modal.updateId, postData) )
            toast("Güncelleme işlemi başarılı!", {
                position: "top-right",
                autoClose: 5000,
            });
        }else{
            dispatch( createAction(postData) )
            toast("Ekleme işlemi başarılı!", {
                position: "top-right",
                autoClose: 5000,
            });
        }
        closeModal()
            
    }

    return (
        <div className='w-full h-screen bg-opacity-50 bg-black flex items-center justify-center'>
            <div className='bg-white w-1/3 p-2 rounded-xl'>
                <div className='flex justify-between'>
                    <h1 className='font-semibold text-2xl'>{modal?.updateId ? "Post Güncelle" : "Post Paylaş"}</h1>
                    <AiOutlineClose className='cursor-pointer' onClick={closeModal} size={30} />
                </div>
                <div className='my-4 flex flex-col space-y-3'>
                    <input
                        type="text"
                        className="input-style"
                        placeholder="User"
                        required
                        onChange={onChangeInput}
                        name='user'
                        value={postData.user}
                    />
                    <input
                        type="text"
                        className="input-style"
                        placeholder="Title"
                        required
                        onChange={onChangeInput}
                        name='title'
                        value={postData.title}
                    />
                    <input
                        type="text"
                        className="input-style"
                        placeholder="Description"
                        required
                        onChange={onChangeInput}
                        name='description'
                        value={postData.description}
                    />
                </div>
                <div onClick={postCreate} className='w-full bg-indigo-600 p-2 text-center text-white cursor-pointer hover:bg-indigo-800 rounded-lg'>{modal?.updateId ? "Güncelle" : "Paylaş"} </div>
            </div>
        </div>
    )
}

export default Modal