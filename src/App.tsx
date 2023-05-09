import { useState } from 'react'
import './App.css'

import { useForm } from 'react-hook-form'

function App() {
  const [output, setOutput] = useState('')
  const { register, handleSubmit } = useForm()

  function createUser(data: any) {
    setOutput(JSON.stringify(data, null, 2))
  }

  return (
    <main>
      <form action="" onSubmit={handleSubmit(createUser)}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            {...register('email')}
          />
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            {...register('password')}
          />
        </div>
        
        <button type="submit">Enviar</button>
      </form>

      <pre>{output}</pre>

    </main>
  )
}

export default App
