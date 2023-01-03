import { useState } from 'react'

import Form from './components/Form/Form'
import Header from "./components/Header/Header"
import ArticleList from "./components/ArticleList/ArticleList"

const App = () => {

  const [user, setUser] = useState()
  const hasUser = Boolean(user)

  return (
    <>
      <Header user={ user } />
      { hasUser && <ArticleList /> }
      { hasUser || <Form  onSubmit={setUser}/>}
    </>
  )
}

export default App