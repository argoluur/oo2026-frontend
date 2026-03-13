import { useEffect, useState } from "react"
import type { Product } from "../models/Products";

function HomePage() {
    const [products, setProducts] = useState<Product[]>([]);

    // uef
    useEffect(() => {
    fetch(import.meta.env.VITE_BACK_URL + "/products")
        .then(res => res.json())
        .then(json => setProducts(json))
    }, []);

    
  return (
    <div>
        {products.map(product => 
        <div key={product.id}>
            {product.name} - {product.price}€
        </div>)}
    </div>
  )
}

export default HomePage