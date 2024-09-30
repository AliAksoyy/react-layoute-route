import { Link } from "react-router-dom";
import products from "../data";
import { useState } from "react";

const Products = ({ user }) => {
  const [userProfil] = useState(user);
  return (
    <section className="section">
      <div className="products">
        {products.map((product) => {
          return (
            <article key={product.id}>
              <h5>{product.name}</h5>
              <Link to={`/products/${product.id}`} state={userProfil}>
                more info
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
