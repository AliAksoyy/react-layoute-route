import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useState, useEffect } from "react";
import products from "../data";

const SingleProduct = () => {
  const { productId } = useParams();
  const location = useLocation(); // useLocation ile gelen state'i alıyoruz
  const [searchParams, setSearchParams] = useSearchParams();
  const product = products.find((product) => product.id === productId);
  const { image, name } = product;

  // Yerel state kullanarak location.state'i koruyoruz
  const [localState, setLocalState] = useState(
    location.state?.name || "Default Name"
  );

  const category = searchParams.get("category");
  const page = searchParams.get("page");

  // Eğer sayfa refresh veya query parametresi değiştiğinde, localState korunur
  useEffect(() => {
    if (location.state?.name) {
      setLocalState(location.state.name);
    }
  }, [location.state]);

  const handleSetPage = () => {
    setSearchParams({ category: category || "default", page: "1" });
  };

  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <h5>{localState}</h5> {/* Eğer state varsa onu gösteriyoruz */}
      <h5>{category}</h5>
      <h5>{page}</h5>
      <button
        className="btn"
        style={{ display: "block" }}
        onClick={handleSetPage}
      >
        Go to Page 1
      </button>
      <Link to="/products">back to products</Link>
    </section>
  );
};

export default SingleProduct;
