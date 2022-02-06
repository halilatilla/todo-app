import { NextPage } from 'next'
import Head from 'next/head'

import { useAppSelector } from '@src/store/store'
import { TodoForm } from '@src/components'

const Home: NextPage = () => {
  const todos = useAppSelector((state) => state.todos)

  return (
    <>
      <Head>
        <title>Movie App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="container mx-auto space-y-8 p-3 md:p-6">
        <TodoForm />
        <ul>
          {todos.map((todo) => (
            <li>{todo.title} </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default Home
