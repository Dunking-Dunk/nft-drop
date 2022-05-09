import React from 'react'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

const NFTDropPage = () => {
    // auth
    const connectWithMetamask = useMetamask()
    const address = useAddress()
    const disconnect = useDisconnect()
    console.log(address)

    return (
        <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>
            {/* left */}
            <div className='bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4'>
                <div className='flex  flex-col justify-center items-center py-2 lg:min-h-screen' >
                    <div className='bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl'>
                        <img className="w-44 rounded-xl object-cover lg:h-96 lg:w-72" src='https://i.pinimg.com/564x/97/17/5d/97175d377b287798c15e1f000234a982.jpg' />
                    </div>
                    <div className='space-y-2 p-5 text-center'>
                        <h1 className='text-4xl font-bold text-white'>HURSUN Apes</h1>
                        <h2 className='text-xl text-gray-300'>A collection of HURSUN Apes who is really working hard to succeed in life</h2>
                    </div>
                </div>
            </div>
            {/* right */}
            <div className='lg:col-span-6 flex flex-1 flex-col p-12'>
                {/* header */}
                <header className='flex justify-between items-center p-5'>
                    <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-80'>The <span className='font-extrabold underline decoration-pink-600/50'> HURSUN</span> NFT market place</h1>
                    {address ? <button className='rounded-full bg-rose-400 text-white px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base' onClick={disconnect}>Sign Out</button>:  <button className='rounded-full bg-rose-400 text-white px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base' onClick={connectWithMetamask}>Sign In</button>}
                   
                </header>
                <hr className='my-2 border' />
                {address && (
                    <p className='text-center text-sm text-rose-400'>you're logged in with wallet {address.substring(0, 5)}...{address.substring(address.length-5)}</p>
                )}
                {/* content */}
                <div className='mt-10 flex lg:h-3/4 flex-col lg:justify-center items-center text-center space-y-6 lg:space-y-0 '>
                    <img className='w-80 object-cover pb-10 lg:h-40' src='https://links.papareact.com/bdy' />
                    <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'>The HURSUN Ape Coding Club | NFT Drop</h1>
                    <p className='pt-2 text-xl text-green-500'>13 / 21 NFT's claimed</p>
                </div>
                {/* mintbutton */}
            <button className='mt-10 h-16 w-full bg-red-600 text-white rounded-full font-bold' >Mint NFT (0.01 ETH)</button>
            </div>
        </div>
       
  )
}

export default NFTDropPage