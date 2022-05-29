import type { GetServerSideProps } from 'next'
import { sanityClient,urlFor } from '../sanity'
import Head from 'next/head'
import { Collection } from '../typing'
import {useRouter} from 'next/router'

interface Props {
  collections: Collection[]
}

const Home = ({ collections }: Props) => {
  const router = useRouter()

  return (
    <div className='bg-gradient-to-t from-[#434343] to-[#000000] min-h-screen h-full flex  items-center flex-col p-6 md:p-12'>
      <Head>
        <title>NFT DROP!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='w-52 cursor-pointer text-3xl font-extralight sm:w-80 text-white text-center'>The <span className='font-extrabold underline decoration-pink-600/50'> DEXTEROUS</span> NFT market place</h1>
      <main >
        <div className='w-full h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 col-auto row-auto mt-10 gap-y-5 shadow-xl shadow-pink-600 rounded-2xl' >
          {collections.map((data) => {
            return (
              
              <div className='flex items-center flex-col space-y-2 text-center cursor-pointer hover:scale-105 transition-all duration-205' onClick={() => {
                router.push(`/nft/${data.slug.current}`)
              }}>
                <img src={urlFor(data.mainImage)} alt='mainImage' className='h-96 w-60 rounded-2xl object-cover'/>
                <h1 className='text-white font-bold text-2xl'>{data.title}</h1>
                <p className='text-gray-400 mt-2 px-5'>{data.description}</p>
                
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = `*[_type == "collection"]`
  const Collections = await sanityClient.fetch(query)
  return {
    props: {
      collections: Collections
    }
  }
}