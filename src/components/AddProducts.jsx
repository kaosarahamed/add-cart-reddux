import { useState } from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import { addProducts } from "../redux/products/actions";

function AddProducts() {

  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    title : "",
    image : "",
    category : "",
    price : 0,
    qty : 0
  });
const {title,image, category, price, qty} = product;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProducts(product));
    setProduct({
      title : "",
    image : "",
    category : "",
    price : 0,
    qty : 0
    })
  }
  

  const handleChange = (e) => {
    setProduct({
      ...product, [e.target.name] : e.target.value
    })
  }
    

    return (
        <div className="formContainer">
          <h4 className="formTitle">Add New Product</h4>
          <form onSubmit={handleSubmit} className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
            <div className="space-y-2">
              <label htmlFor="lws-inputName">Product Name</label>
              <input className="addProductInput" id="lws-inputName" value={title} name="title" type="text" required onChange={(e) => handleChange(e)}/>
            </div>
            <div className="space-y-2">
              <label htmlFor="lws-inputCategory">Category</label>
              <input className="addProductInput" id="lws-inputCategory" value={category} name="category" type="text" required onChange={(e) => handleChange(e)}/>
            </div>
            <div className="space-y-2">
              <label htmlFor="lws-inputImage">Image Url</label>
              <input className="addProductInput" id="lws-inputImage" value={image} name="image" type="text" required onChange={(e) => handleChange(e)}/>
            </div>
            <div className="grid grid-cols-2 gap-8 pb-4">
              <div className="space-y-2">
                <label htmlFor="ws-inputPrice">Price</label>
                <input className="addProductInput" value={price} name="price" type="number" id="lws-inputPrice" required onChange={(e) => handleChange(e)}/>
              </div>
              <div className="space-y-2">
                <label htmlFor="lws-inputQuantity">Quantity</label>
                <input className="addProductInput" value={qty} name="qty" type="number" id="lws-inputQuantity" required onChange={(e) => handleChange(e)}/>
              </div>
            </div>
            <button type="submit" id="lws-inputSubmit" className="submit">Add Product</button>
          </form>
        </div>
    )
}

export default AddProducts
