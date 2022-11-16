import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

const App = () => {
  const [allProducts, setAllProducts] = useState();
  const [filteredProducts, setFilteredProducts] = useState();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setAllProducts(res.data);
      setFilteredProducts(res.data)
    });
  }, []);

  const handleFilter = (filter) => {
    if(filter === 'all') setFilteredProducts(allProducts)
    else setFilteredProducts(allProducts.filter(product => product.category === filter))
  }

  if (!allProducts || !filteredProducts) return <></>;

  return (
    <main className="main">
      <nav className="main__nav">
        <p className="main__nav__item" onClick={() => handleFilter('all')}>All</p>
        <p className="main__nav__item" onClick={() => handleFilter('electronics')}>Electronics</p>
        <p className="main__nav__item" onClick={() => handleFilter('jewelery')}>Jewelery</p>
        <p className="main__nav__item" onClick={() => handleFilter('men\'s clothing')}>Men's clothing</p>
        <p className="main__nav__item" onClick={() => handleFilter('women\'s clothing')}>Women's clothing</p>
      </nav>

      <div className="main__products">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default App;
