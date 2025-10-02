import { useState } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { Formulario_teste } from './formulario_para_teste';

export function Login(){
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(event){
        event.preventDefault();
        const response = await api.post('/session', { email });

        const { _id } = response.data;
        console.log(_id);
        localStorage.setItem('user', _id);

        navigate('/dashboard');

    }

    return(
        <>
            <p>
                Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
            </p>
            <formulario_teste onSubmit={handleFormSubmit} />
            
            
        </>
        
)
}

