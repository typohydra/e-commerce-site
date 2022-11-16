import cart from '../assets/cart.png'
import more from '../assets/more.png'
import { useState } from 'react';

const ProductCard = ({product}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div  
      onMouseEnter={() => setIsHovered(prev => !prev)}
      onMouseLeave={() => setIsHovered(false)} 
      className="main__products__product">
      <img
        className="main__products__product__img"
        src={product.image}
        alt={product.title}
      />
      <p>{product.title}</p>
      <p>{product.price}$</p>

      {isHovered ? <ProductCardHoverCover /> : <></>}
    </div>
  );
};

const ProductCardHoverCover = () => {
  return (
    <div className="main__products__product__cover">
      <button className="main__products__product__cover__btn">
        <img className="main__products__product__cover__btn__img" src={cart} alt="cart"/>
      </button>
      <button className="main__products__product__cover__btn">
        <img className="main__products__product__cover__btn__img" src={more} alt="more"/>
      </button>
    </div>
  )
}

export default ProductCard;
