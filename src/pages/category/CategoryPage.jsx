import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from '../../data/products.json'
import ProductsCard from "../shop/ProductsCard";

const CategoryPage = () => {
    const {categoryName} = useParams();
    const [filteredProduct, setfilteredProduct] = useState([]);

    useEffect(()=>{
        const filtered = products.filter((product) => product.category === categoryName.toLocaleLowerCase());
        setfilteredProduct(filtered)
    },[categoryName])

    useEffect(()=>{ 
        window.scrollTo(0,0)
    })

  return (
    <>
        <section className="section__container bg-primary-light">
            <h2 className="section__header capitalize">{categoryName}</h2>
            <p className="section__subheader">Lorem ipsum dolor sit amet consectetur, adipisicing elitLorem ipsum dolor sit amet consectetur.?
            </p>
        </section>
        {/* products card */}
        <div className="section__container">
            <ProductsCard products={filteredProduct}/>
        </div>
    </>
  )
}

export default CategoryPage;
