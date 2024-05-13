import { useContext } from "react";

import { ProductContext } from "../context/listing-provider";


export const useListing = () => {
  const products = useContext(ProductContext);

  if (!products) throw new Error('useListing must be used within a ListingProvider');

  return { products };
}