import React from 'react'
import Navbar from './_components/Navbar';
import Footer from './_components/Footer';

type Props = {
    children: React.ReactNode;
}

const MarketingLayout = ({children}: Props) => {
  return (
    <div className='h-full bg-slate-100'>
        {/* navbar */}
        <Navbar/>
        <main className='pt-40 pb-20 bg-slate-100'>
        {children}
        </main>
        <Footer/>
        {/* footer */}
    </div>
  )
}

export default MarketingLayout