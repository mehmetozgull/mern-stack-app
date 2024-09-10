import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { loginAction, registerAction } from "../redux/actions/auth";

const Auth = () => {

    let navigate = useNavigate();
    const token = localStorage.getItem('auth'); // Token'ı kontrol edin
      
    useEffect(() => {
      if (token) {
        navigate('/'); // Token varsa dashboard'a yönlendir
      }
    }, [token, navigate]);

    const [signUp, setSignUp] = useState(true);

    const [authData, setAuthData] = useState({
        name: '',
        surname: '',
        phone: '',
        email: '',
        password: '',
        birthday: ''
    });

    const dispatch = useDispatch();

    const onChangeFormValue = (e) => {
        setAuthData({ ...authData, [e.target.name]: e.target.value });
    }

    const auth = () => {
        if(signUp){
            dispatch(registerAction(authData))
        }else{
            dispatch(loginAction(authData))
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6">{ signUp ? 'Kayıt Ol' : 'Giriş yap' }</h1>
                <form>
                    { signUp && <><div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="name">Ad</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Adınızı girin"
                            required
                            value={authData.name}
                            name="name"
                            onChange={onChangeFormValue}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="surname">Soyad</label>
                        <input
                            type="text"
                            id="surname"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Soyadınızı girin"
                            required
                            value={authData.surname}
                            name="surname"
                            onChange={onChangeFormValue}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="phone">Telefon</label>
                        <input
                            type="text"
                            id="phone"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="5xx xxx xx xx"
                            value={authData.phone}
                            name="phone"
                            onChange={onChangeFormValue}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="birthday">Doğum Tarihi</label>
                        <input
                            type="date"
                            id="birthday"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            value={authData.birthday}
                            name="birthday"
                            onChange={onChangeFormValue}
                        />
                    </div></> }
                    

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="email">E-posta</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="E-posta adresinizi girin"
                            required
                            value={authData.email}
                            name="email"
                            onChange={onChangeFormValue}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="password">Şifre</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Şifrenizi girin"
                            required
                            minLength="6"
                            value={authData.password}
                            name="password"
                            onChange={onChangeFormValue}
                        />
                    </div>
                    
                    <div className="mb-4 cursor-pointer text-sm text-gray-500">
                        { signUp ? <span onClick={() => setSignUp(false)}>Giriş yapmak için tıklayınız.</span> : <span onClick={() => setSignUp(true)}>Kayıt Olmak için tıklayınız.</span>}
                    </div>


                    <button onClick={auth} type="button" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"> { signUp ? 'Kayıt Ol' : 'Giriş yap' }</button>
                </form>
            </div>
        </div>
    );
}

export default Auth;




