import React from 'react'
import Form from './components/Form'
import "./App.css"
import PageNotFound from './components/PageNotFound'
import { BrowserRouter as Router,Routes, Route, Switch, Link } from "react-router-dom";
import RegisterForm from './components/RegisterForm';

const App = () => {
  return (
    <div>
      <Router>
      <Form/>
      <div>
        <Link to="/">{<RegisterForm/>}</Link>
        
      </div>
      <div>
        <Routes>
          <Route path='/' element={<RegisterForm/>} />
          <Route path='* ' element={<PageNotFound/>}/>
          </Routes>
      </div>
      </Router>
    </div>
  )
}

export default App


