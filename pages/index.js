import React from "react";
import { FooterBanner, HeroBanner, Product } from "../components";
import { client } from "../lib/client";

const Home = ({ products, bannerData }) => {
  console.log(products, "products");
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {console.log(products)}
      <div className="products-heading">
        <h2>Best selling products</h2>
        <p>speakers of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => {
          return (
            <Product product={products.length && product} key={product._id} />
          );
          sds;
        })}
      </div>
      <FooterBanner footerBanner={bannerData.length && bannerData[0]} />
    </>
  );
};

export default Home;
export const getServerSideProps = async () => {
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);
  const bannerQuery = `*[_type == "banner"]`;
  const bannerData = await client.fetch(bannerQuery);
  return {
    props: {
      products,
      bannerData,
    },
  };
};
