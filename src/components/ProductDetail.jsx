import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../utils/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id == (id));
  
  return (
    <div>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Precio: {product.price}</p>
          <img src={product.image} alt={product.name} />
        </div>
      ) : (
        <p>No se encontró el producto</p>
      )}
    </div>
  );
};

export default ProductDetail;


