import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './comps/Header'
import { Footer } from './comps/Footer'

export const Defaultlayout = () => {
  return (
    <div className='default-layout'>
        <header className='header'>
            <Header />
        </header>

        <main className='main'>
            <Outlet />
        </main>

        <footer className='footer'>
            <Footer />
        </footer>

    </div>
  )
}
