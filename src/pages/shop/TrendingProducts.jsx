import ProductsCard from "./ProductsCard"
import products from '../../data/products.json'
import { useState } from "react"

const TrendingProducts = () => {
    const [visibleProducts, setVisibleProducts] = useState(8);
    const loadMoreProducts = ()=>{
        setVisibleProducts(prevCount => prevCount + 4)
    }
  return (
    <section className="section__container product__container">
        <h2 className="section__header">Trending Products</h2>
        <p className="section__subheader mb-12">
            Discover the Greatest pics: Elevate your style with our Collections of Trending Women's fashion products.
        </p>

        {/* productscard */}

        <div className="mt-12"> 
        <ProductsCard products = {products.slice(0,visibleProducts)}/>
        </div>

        {/* load more products btns */}
        <div className="product__btn">
            {
                visibleProducts < products.length && (
                    <button className="btn" onClick={loadMoreProducts}>Load more</button>
                )
            }
        </div>
    </section>
  )
}

export default TrendingProducts
