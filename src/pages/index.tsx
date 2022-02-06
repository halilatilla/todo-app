import { NextPage } from 'next'
import Head from 'next/head'

import { TodoForm, TodoList } from '@src/components'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Movie App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="container mx-auto space-y-8 p-3 md:p-6">
        <h1 className="text-2xl font-bold capitalize">an awesome to do list 😎</h1>
        <TodoForm />
        <TodoList />
      </main>
    </>
  )
}

export default Home
