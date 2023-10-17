"use client"

import React from 'react'
import {useEffect} from 'react'

import { client } from '@/lib/client'

import { Product, Footer, HeroBanner} from './index'

const Main = ( { products, bannerData } ) => {
    console.log(products)

    // useEffect(async () => {
    //     const query = '*[_type == "product"]'
    //     const products = await client.fetch(query)
    //     console.log(products)

    //     const bannerQuery = '*[_type == "banner"]'
    //     const bannerData = await client.fetch(bannerQuery)
    // }, [products])
    
  return (
    <>
        <HeroBanner heroBanner="" />
        {console.log("bannerdata:" + bannerData)}

        <div className='products-heading'>
            <h2>Best Selling Products</h2>
            <p>Speakers of many variations</p>
        </div>

        <div className='products-container'>
            {products?.map((product) => product.name)}
        </div>

        Footer
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Main