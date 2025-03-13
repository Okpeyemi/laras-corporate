import React from 'react'
import Produit from '../Produit'

const NosProduit = () => {
  return (
    <div className="responsive space-y-10 flex flex-col items-center py-20">
        <h1 className="text font-bold">Nos Produits</h1>
        <Produit />
    </div>
  )
}

export default NosProduit