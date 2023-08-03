import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Card from './pages/Card'
import './App.css'
import Navbar from './Components/Navbar'
import { Provider } from 'react-redux'
import store from './Store/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/cart' element={<Card />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
