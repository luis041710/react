// Página pública 

import heroBg from "@/assets/images/10-imagen-hero.jpg"
import { products }  from "@/data/product/products.js"
import { Card } from "@/shared/components"

export default function HomePage(){

    const product = products.find(prod => prod.id === 1)

    return(
        <section
        className="relative min-h-screen w-full flex items-center justify-center text-black"
        style={
            {
                backgroundImage: `url(${heroBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }
        }
        >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center">
            <h1 className="text-text-inverse text-h1 font-stretch-expanded">
                Mis productos
            </h1>

        <div className="    
            grid 
            gap-8
            sm: grid-cols-2
            lg: grid-cols-3
            xl: grid-cols-4
            justify-items-center 
        ">
            {/* {products.map((product) => ( <Card key={product.id} product={product} />))} */}

            { product && <Card product ={product} />}

        </div>
            
        </div>

        </section>

    )
}