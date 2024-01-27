import React from 'react'

type Props = {
    children: React.ReactNode;
}

const MarketingLayout = ({children}: Props) => {
  return (
    <div className='h-full bg-slate-100'>
        {/* navbar */}
        <main className='pt-40 pb-20 bg-slate-100'>
        {children}
        </main>
        {/* footer */}
    </div>
  )
}

export default MarketingLayout