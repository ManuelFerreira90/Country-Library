import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './page/App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CountryDetail from './page/CountryDetail.tsx'
import Header from './assets/components/Header/Header.jsx'
import { GlobalStyle } from './assets/components/GlobalStyle.tsx'
import { GlobalFonts } from './assets/components/GlobalStyle.tsx'
import { ThemeProvider } from 'styled-components'
import { theme } from './assets/components/Theme.tsx'
import AppProvider from './assets/context/AppProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AppProvider>
      <ThemeProvider theme={ theme }>
        <GlobalStyle />
        <GlobalFonts />
        <Header />
        <Routes>
            <Route path='/Country-Library/' element={ <App/> }></Route>
            <Route path='/Country-Library/CountryDetail/:name' element={ <CountryDetail/> }></Route>
        </Routes>
      </ThemeProvider>
    </AppProvider>
  </BrowserRouter>,
)
