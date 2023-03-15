import { Link } from "react-router-dom"


const Products = ({ products }) => {
  const listOfProducts = products.map(product =>  {
    return (
        <div key={product.id}>
            <h2>
                <Link to={`/product-detail/${product.id}`}>{product.name}</Link>
            </h2>
            <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
    )
})

  return (
    <>
        <h1>Lista de mis productos</h1>
        {listOfProducts}
    </>
  );
};

export default Products;

