import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import swal from "sweetalert";

const AddProductModal = ({ show, handleClose }) => {
  var [name, setName] = useState("");
  var [category, setCategory] = useState("");
  var [description, setDescription] = useState("");
  var [quantity, setQuantity] = useState("");
  var [price, setPrice] = useState("");
  var [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      category,
      description,
      quantity,
      price,
      image,
    };

    console.log("Checking new  product details: ", newProduct);

    axios
      .post("http://localhost:8071/products/add", newProduct)
      .then(() => {
        swal("Product Added!", "Product Added Successfully!", "success");
        setTimeout(function () {
          window.location.reload();
        }, 1000);
      })
      .catch((err) => {
        swal("Error!", "Error in Adding Product!", err);
      });

    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Product</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="form-group">
          <label htmlFor="ProductName">Product Name</label>
          <input
            id="name"
            type="text"
            className="form-control"
            placeholder="Enter product Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Product Category</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter product Category"
            // name="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label for="description">Product Description</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter product Description"
            // name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label for="quantity">Quantity</label>
          <input
            type="number"
            class="form-control"
            placeholder="Enter Quantity"
            // name="quantity"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <input
            type="number"
            class="form-control"
            placeholder="Price"
            // name="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label for="image">Image</label>
          <input
            type="text"
            class="form-control"
            placeholder="Image URL"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="submit"
          class="btn btn-success"
          variant="secondary"
          onClick={handleSubmit}
        >
          Add Product
        </button>
        <button class="btn btn-danger" variant="primary" onClick={handleClose}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};
export default AddProductModal;
