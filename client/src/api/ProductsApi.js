import { useEffect, useState } from "react";
import axios from "axios";

const ProductsApi = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [result, setResult] = useState(0);

  const getProducto = async () => {
    const res = await axios.get(`http://localhost:5000/api/producto?limit=${page * 9}&${category}&${sort}&title[regex]=${search}`);
    setProducts(res.data.producto);
    console.log("🚀 ~ file: ProductsApi.js ~ line 15 ~ getProducto ~ res.data.producto", res.data.producto)
    setResult(res.data.result);
    console.log("🚀 ~ file: ProductsApi.js ~ line 17 ~ getProducto ~ res.data.result", res.data.result)
    console.log('resdata:', res.data)
  };

  useEffect(() => {
    getProducto();
  }, [category, sort, search, page]);

  return {
    products: [products, setProducts],
    category: [category, setCategory],
    sort: [sort, setSort],
    search: [search, setSearch],
    page: [page, setPage],
    result: [result, setResult],
  };
};

export default ProductsApi;
