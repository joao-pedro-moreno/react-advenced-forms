/*
  * To-do
  *
  * [X] Validação / transformação
  * [ ] Field Arrays
  * [ ] Upload de arquivos
  * [ ] Composition Pattern
*/ 

import { useState } from 'react'
import './App.css'

import { useForm } from 'react-hook-form'

import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

// Representação da estrutura de dados esperada como dados do formulário
const createUserFormSchema = z.object({
  // string() -> Informa qual o tipo do valor esperado
  name: z.string()
    .nonempty('O nome é obrigatório')
    // Transforma o valor recebido
    .transform(name => {
      return name.trim().split(' ').map(word => {
        return word[0].toLocaleUpperCase().concat(word.substring(1))
      }).join(' ')
    }),
  email: z.string()
    // Informa que o campo é obrigatório
    .nonempty('O e-mail é obrigatório')
    // Valida a informação recebida com Regex
    .email('Formato de e-mail inválido')
    // Permite a criação de validações extras
    .refine(email => {
      return email.endsWith('@gmail.com')
    }, 'Domínio de e-mail não permitido'),
  password: z.string()
    // Define tamanho mínimo
    .min(6, 'A senha precisa de no mínimo 6 caracteres')
    // Define tamanho máximo
    .max(12, 'A senha deve ter no máximo 12 caracteres'),
})

// Determina a tipagem com base no tipo do Schema
type CreateUserFormData = z.infer<typeof createUserFormSchema>

function App() {
  const [output, setOutput] = useState('')

  // register -> Registra um input no formulário
  // handleSubmit -> Recebe a função que utiliza os dados do formulário
  // formState -> Contém informações sobre o estado do formulário, como erros
  const { register, handleSubmit, formState: { errors } } = useForm<CreateUserFormData>({
    // Configura a execução da validação do formulário
    resolver: zodResolver(createUserFormSchema)
  })

  function createUser(data: any) {
    setOutput(JSON.stringify(data, null, 2))
  }

  return (
    <main>
      {/* A função 'handleSubmit' é executada quando o formulário é enviado e recebe como parametro a função que irá lidar com os dados */}
      <form action="" onSubmit={handleSubmit(createUser)}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="name"
            id="name"
            // O input é registrado com o seu atributo 'name'
            {...register('name')}
          />

          {/* Caso tiver algum erro de validação ele renderiza na tela com a mensagem */}
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            {...register('email')}
          />

          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            {...register('password')}
          />

          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <button type="submit">Enviar</button>
      </form>

      <pre>{output}</pre>

    </main>
  )
}

export default App
