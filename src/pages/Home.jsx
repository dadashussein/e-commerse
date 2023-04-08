import React from "react";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";
const Home = () => {
  //produktlari prtoduct konteksten almaq
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "women's clothing" || item.category === "men's clothing"
    );
  });
  return (
    <>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm md:max-w-none mx-auto md:mx-0">
            {filteredProducts.map((item) => {
              return <Product product={item} key={item.id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
