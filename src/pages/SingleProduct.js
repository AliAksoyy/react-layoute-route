import { Link, useLocation, useParams } from "react-router-dom";
import products from "../data";
const SingleProduct = () => {
  const { productId } = useParams();
  const { state } = useLocation();

  const product = products.find((product) => product.id === productId);
  const { image, name } = product;
  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <h5>{state.name}</h5>
      <Link to="/products">back to products</Link>
    </section>
  );
};

export default SingleProduct;
