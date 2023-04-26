import React from "react";
import Modal from "react-bootstrap/Modal";

const UpdateProductModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Product</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="form-group">
          <label htmlFor="ProductName">Product Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter product Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="ProductCategory">Product Category</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter product Category"
          />
        </div>
        <div class="form-group">
          <label for="ProductDescription">Product Description</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter product Description"
          />
        </div>
        <div class="form-group">
          <label for="ProductQuantity">Quantity</label>
          <input
            type="number"
            class="form-control"
            placeholder="Enter Quantity"
          />
        </div>
        <div class="form-group">
          <label for="ProductPrice">Price</label>
          <input type="number" class="form-control" placeholder="Price" />
        </div>
        <div class="form-group">
          <label for="ProductImage">Image</label>
          <input type="text" class="form-control" placeholder="Image URL" />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="submit"
          class="btn btn-success"
          variant="secondary"
          Click={handleClose}
        >
          Update Product
        </button>
        <button class="btn btn-danger" variant="primary" onClick={handleClose}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};
export default UpdateProductModal;
