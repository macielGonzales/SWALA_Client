import {useState, useEffect} from 'react'
import axios from 'axios'

const CategoriesApi = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get("/api/categoria");
      setCategories(res.data)
    };

    getCategories();
  }, []);

  return {
      categories: [categories, setCategories]
  };
};

export default CategoriesApi;
