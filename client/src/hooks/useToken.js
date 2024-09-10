import { useEffect, useState } from "react";

const useToken = () => {
    const [token, setToken] = useState(() => {
        const storedToken = localStorage.getItem('auth');
        return storedToken ? JSON.parse(storedToken) : null;  // null alternatif başlangıç değeri
      }); // Başlangıç değeri olarak null

    useEffect(() => {
        const storedToken = localStorage.getItem('auth');
        if (storedToken) {
            setToken(JSON.parse(storedToken));  // Token varsa JSON olarak parse et ve set et
        }
    }, []);

    return token;
}

export default useToken;
