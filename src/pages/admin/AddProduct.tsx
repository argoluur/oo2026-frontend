import { useState } from "react";

function AddProduct() {
    const [newProduct, setNewProduct] = useState<Product>({
        name: "",
        description: "",
        price: 0,
        active: false,
        stock: 0,
        category: {
            name: ""
        }
    }


    const AddProduct = () => {
        fetch(import.meta.env.VITE_BACK_URL + "/products", {
            method: "POST",
            body: JSON.stringify(newProduct),
            headers: {
                "Content-Type": "application/json"
            }})
        .then(res => res.json())
        .then(() =>alert("json"));
    }

  return (
    <div>
        <label>Name</label>
        <input onChange={(e) => setNewProduct({...newProduct, name: e.target.value})} type="text" /> <br />
        <label>Description</label>
        <input onChange={(e) => setNewProduct({...newProduct, description: e.target.value})} type="text" /> <br />
        <label>Price</label>
        <input onChange={(e) => setNewProduct({...newProduct, price: Number(e.target.value)})} type="text" /> <br />
        <label>Active</label>
        <input onChange={(e) => setNewProduct({...newProduct, active: e.target.checked})} type="text" /> <br />
        <label>Stock</label>
        <input onChange={(e) => setNewProduct({...newProduct, stock: Number(e.target.value)})} type="text" /> <br />
        <label>Category</label>
        
        <button onClick={AddProduct}>Lisa produkt</button>
    </div>
  )
}

export default AddProduct