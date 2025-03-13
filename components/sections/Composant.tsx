import React from 'react'
import ComposantProduit from '../ComposantProduit'

const Composant = () => {
  return (
    <div className="responsive flex flex-col items-center justify-center space-y-10 py-20">
      <div className="flex flex-col items-center justify-center space-y-5">
      <h1 className="text font-bold text-center">Qu&apos;est-ce qu&apos;il y a dans nos produits ?</h1>
      <p className="text-lg">Nos produits sont 100% organiques.</p>
      </div>
      <ComposantProduit />
    </div>
  )
}

export default Composant