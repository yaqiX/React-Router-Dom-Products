import { useState, useEffect } from "react";

const Products = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [products, setProducts] = useState([]);

  const addProduct = (e) => {
    e.preventDefault();

    let newProduct = {
      newName: name,
      newDescription: description,
      newPrice: price,
    };

    setProducts([...products, newProduct]);

    setName("");
    setDescription("");
    setPrice("");
  };

  useEffect(() => {
    console.log("Product Added",products);
  }, [products]);

  return (
    <>
        <form onSubmit={addProduct}>
        <label>
            Product Name:{" "}
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </label>
        <label>
            Product Description:{" "}
            <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
        </label>
        <label>
            Product Price:{" "}
            <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            />
        </label>
        <button type="submit">Submit</button>
        </form>
    </>
  );
};

export default Products;
