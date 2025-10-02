import { useForm } from 'react-hook-form';
import {email, z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

const emailFilterSchema = z.object({
    email: z.string()
})
type emailFilterSchema = z.infer<typeof emailFilterSchema>

export function Formulario_teste (){
    const { register, handleSubmit } = useForm<emailFilterSchema>()
    console.log(handleFilterProducts)
    // Função que será chamada quando o formulário for enviado. Ela recebe os dados do formulário como argumento.
    resolver: zodResolver(emailFilterSchema)
    function handleFilterProducts(data: emailFilterSchema) {
        console.log(handleFormSubmit)
        console.log(data)  // Aqui, os dados do formulário são exibidos no console. 
    }

    return (
        <form onSubmit={handleSubmit(handleFilterProducts)}>
            <label htmlFor="email">*E-mail</label>
            <input 

                id="email" 

                {...register('any')}  // 'register' registra o campo 'email' com o 'react-hook-form'

                type="email"  // Define que o tipo de dado esperado é um e-mail

                placeholder="Seu melhor e-mail"  // Texto que aparece dentro do campo de input como dica para o usuário

                value={email}  // Aqui deveria estar o valor de 'email', mas 'email' não foi definido no código (vai gerar erro!)

                onChange={event => setEmail(event.target.value)}  // Aqui deveria ter uma função 'setEmail' para atualizar o estado do 'email'. Isso também causará erro pois o estado não foi definido.
                
            />
            <button className='btn' type='submit'>Entrar</button>
            
        </form>
    )

}
// import { useForm } from 'react-hook-form'; 

// import { useState } from 'react';  // Precisamos do useState para controlar o estado do email
 
// export function formulario_teste() {

//     const { register, handleSubmit } = useForm();

//     const [email, setEmail] = useState('');  // Criando o estado para o e-mail
 
//     function handleFilterProducts(data: any) {

//         console.log(data);  // Aqui, os dados são logados no console quando o formulário for enviado

//     }
 
//     return (
// <form onSubmit={handleSubmit(handleFilterProducts)}>
// <label htmlFor="email">*E-mail</label>
// <input

//                 id="email"

//                 {...register('email')}  // O campo 'email' é registrado no react-hook-form

//                 type="email"

//                 placeholder="Seu melhor e-mail"

//                 value={email}  // Agora 'email' é o estado que estamos controlando

//                 onChange={event => setEmail(event.target.value)}  // Atualiza o estado 'email' conforme o usuário digita

//             />
// <button className='btn' type='submit'>Entrar</button>
// </form>

//     );

// }
 