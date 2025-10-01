import React from 'react'
import { Header } from './comps/Header'
import { Footer } from './comps/Footer'

export const Defaultlayout = ({children}) => {
  return (
    <div className='default-layout'>
        <header className='header'>
            <Header />
        </header>

        <main className='main'>
            {children}
        </main>

        <footer className='footer'>
            <Footer />
        </footer>

    </div>
  )
}
