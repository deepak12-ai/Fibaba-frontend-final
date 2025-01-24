import { useState } from 'react';
import productsData from '../../data/products.json'
import ProductsCard from '../shop/ProductsCard.jsx';

const Search = () => {
    const [searchQuery, setsearchQuery] = useState('');
    const [filteredProducts, setfilteredProducts] = useState(productsData);

    const handleSearch = ()=> {
            const query = searchQuery.toLocaleLowerCase();
            const filtered = productsData.filter( product => product.name.toLocaleLowerCase().includes(query) || product.description.toLocaleLowerCase().includes(query));
            setfilteredProducts(filtered);
    }
  return (
    <>  
         <section className="section__container bg-primary-light">
            <h2 className="section__header capitalize">Search Products</h2>
            <p className="section__subheader">Lorem ipsum dolor sit amet consectetur, adipisicing elitLorem ipsum dolor sit amet consectetur.?
            </p>
        </section>

        <section className='section__container'>
            <div className='w-full mb-12 flex flex-col md:flex-row items-center justify-center gap-4'>
                <input type="text"  value={searchQuery} onChange={(e)=> setsearchQuery(e.target.value)} className='search-bar w-full max-w-4xl p-2 border rounded' placeholder='Search for Products...'/>
                <button onClick={handleSearch} className='search-button w-full md:w-auto py-2 px-8 bg-primary text-white rounded'>Search</button>
            </div>   
            <ProductsCard products={filteredProducts}/>     
        </section>
      
    </>
  )
}

export default Search;
