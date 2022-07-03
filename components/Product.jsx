import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const Product = ({ product: { image, title, slug, price } }) => {
  console.log("hello fariz");
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
            alt=""
          />
          <p className="product-name">{title}</p>
          <div className="product-price">${price}</div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
