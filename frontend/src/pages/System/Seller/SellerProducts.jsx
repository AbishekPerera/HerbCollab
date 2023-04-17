import React , { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import SellerSidebar from "../../../components/System/Sidebar/SellerSidebar";
import SellerNav from "../../../components/System/SystemNavBar/SellerNav";
import SystemFooter from "../../../components/System/SystemFooter/SystemFooter";
import "./styles/SellerProducts.css";

const SellerProducts = () => {
  const [show, setShow] = useState(false);
  const [view, setView] = useState(false);
  const handleClose = () => setShow(false);
  const handleUpdateClose = () => setView(false);
  const handleUpdate = () => setView(true);
  const handleShow = () => setShow(true);
  return (
    <div className="mainContainer">
    <div className="sidebar">
      <SellerSidebar />
    </div>

    <div className="contentContainer">
      <div className="systemNavBar">
        <SellerNav />
      </div>
      <div className="content">
        <button className="btn btnProduct" onClick={handleShow} value="Add Product">Add Product</button>

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <div class="form-group">
          <label for="ProductName">Product Name</label>
          <input type="text" class="form-control"  placeholder="Enter product Name"/>
        </div>
        <div class="form-group">
          <label for="ProductCategory">Product Category</label>
          <input type="text" class="form-control"  placeholder="Enter product Category"/>
        </div>
        <div class="form-group">
          <label for="ProductDescription">Product Description</label>
          <input type="text" class="form-control"  placeholder="Enter product Description"/>
        </div>
        <div class="form-group">
          <label for="ProductQuantity">Quantity</label>
          <input type="number" class="form-control"  placeholder="Enter Quantity"/>
        </div>
        <div class="form-group">
          <label for="ProductPrice">Price</label>
          <input type="number" class="form-control"  placeholder="Price"/>
        </div>
        <div class="form-group">
          <label for="ProductImage">Image</label>
          <input type="text" class="form-control"  placeholder="Image URL"/>
        </div>
   
        </Modal.Body>
        <Modal.Footer>
          <input type="submit" class="btn btn-success" variant="secondary" value="Add Producton" Click={handleClose}/>
  
          <button class="btn btn-danger"  variant="primary" onClick={handleClose}>
            Close
          </button>
          
        </Modal.Footer>
      </Modal>

      <Modal view={view} onHide={handleUpdateClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <div class="form-group">
          <label for="ProductName">Product Name</label>
          <input type="text" class="form-control"  placeholder="Enter product Name"/>
        </div>
        <div class="form-group">
          <label for="ProductCategory">Product Category</label>
          <input type="text" class="form-control"  placeholder="Enter product Category"/>
        </div>
        <div class="form-group">
          <label for="ProductDescription">Product Description</label>
          <input type="text" class="form-control"  placeholder="Enter product Description"/>
        </div>
        <div class="form-group">
          <label for="ProductQuantity">Quantity</label>
          <input type="number" class="form-control"  placeholder="Enter Quantity"/>
        </div>
        <div class="form-group">
          <label for="ProductPrice">Price</label>
          <input type="number" class="form-control"  placeholder="Price"/>
        </div>
        <div class="form-group">
          <label for="ProductImage">Image</label>
          <input type="text" class="form-control"  placeholder="Image URL"/>
        </div>
   
        </Modal.Body>
        <Modal.Footer>
          <button type="submit" class="btn btn-success" variant="secondary" value="Update Product" Click={handleUpdateClose}/>
  
          <button class="btn btn-danger"  variant="primary" onClick={handleUpdateClose}>
            Close
          </button>
          
        </Modal.Footer>
      </Modal>
      <div class="container bg-white">
    
    <div class="row">
    <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
            <div class="product"> <img src="https://lk.spaceylon.com/wp-content/uploads/2022/12/Neroli-Jasmine-Hudrate-Treat-Rich-Body-Butter-1-300x300.jpg" alt=""/>
                <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                    <li class="icon "id="edit" onClick={ handleShow } ><span class="bi bi-pen" ></span></li>
                    <li class="icon mx-3"><span class="bi bi-trash"></span></li>
                </ul>
            </div>
            <div class="tag bg-red">Facial Creams</div>
            <span class="tag1 bg-green"> 15</span>
            <div class="title pt-4 pb-1">White Rice Cream</div>
            <div class="d-flex align-content-center justify-content-center">
              <p>Helo werewsrfe reffefef dfdgfdgfdg fgfdgfgf fgdgdgdf fggdfgfdgd</p>
            </div>
            <div class="price">Rs 6000.0</div>
        </div>
        <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
        <div class="product"> <img src="https://lk.spaceylon.com/wp-content/uploads/2022/07/Sal-saffron-vitamin-E-rich-Delicate-creme-facial-exfoliator-5-300x300.jpg" alt=""/>
                <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                    <li class="icon "id="edit"><span class="bi bi-pen"></span></li>
                    <li class="icon mx-3"><span class="bi bi-trash"></span></li>
                </ul>
            </div>
            <div class="tag bg-red">Body Creams</div>
            <span class="tag1 bg-green"> 15</span>
            <div class="title pt-4 pb-1">Neroli Jasmin</div>
            <div class="d-flex align-content-center justify-content-center">
              <p>Helo werewsrfe reffefef dfdgfdgfdg fgfdgfgf fgdgdgdf fggdfgfdgd</p>
            </div>
            <div class="price">Rs 6000.0</div>
        </div>
        <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
            <div class="product"> <img src="https://lk.spaceylon.com/wp-content/uploads/2022/12/Neroli-Jasmine-Hudrate-Treat-Rich-Body-Butter-1-300x300.jpg" alt=""/>
                <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                    <li class="icon "id="edit"><span class="bi bi-pen"></span></li>
                    <li class="icon mx-3"><span class="bi bi-trash"></span></li>
                </ul>
            </div>
            <div class="tag bg-red">Facial Creams</div>
            <span class="tag1 bg-green"> 15</span>
            <div class="title pt-4 pb-1">White Rice Cream</div>
            <div class="d-flex align-content-center justify-content-center">
              <p>Helo werewsrfe reffefef dfdgfdgfdg fgfdgfgf fgdgdgdf fggdfgfdgd</p>
            </div>
            <div class="price">Rs 6000.0</div>
        </div>
        <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
        <div class="product"> <img src="https://lk.spaceylon.com/wp-content/uploads/2022/07/Sal-saffron-vitamin-E-rich-Delicate-creme-facial-exfoliator-5-300x300.jpg" alt=""/>
                <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                    <li class="icon "id="edit"><span class="bi bi-pen"></span></li>
                    <li class="icon mx-3"><span class="bi bi-trash"></span></li>
                </ul>
            </div>
            <div class="tag bg-red">Body Creams</div>
            <span class="tag1 bg-green"> 15</span>
            <div class="title pt-4 pb-1">Neroli Jasmin</div>
            <div class="d-flex align-content-center justify-content-center">
              <p>Helo werewsrfe reffefef dfdgfdgfdg fgfdgfgf fgdgdgdf fggdfgfdgd</p>
            </div>
            <div class="price">Rs 6000.0</div>
        </div>
        <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
            <div class="product"> <img src="https://lk.spaceylon.com/wp-content/uploads/2022/12/Neroli-Jasmine-Hudrate-Treat-Rich-Body-Butter-1-300x300.jpg" alt=""/>
                <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                    <li class="icon "id="edit"><span class="bi bi-pen"></span></li>
                    <li class="icon mx-3"><span class="bi bi-trash"></span></li>
                </ul>
            </div>
            <div class="tag bg-red">Facial Creams</div>
            <span class="tag1 bg-green"> 15</span>
            <div class="title pt-4 pb-1">White Rice Cream</div>
            <div class="d-flex align-content-center justify-content-center">
              <p>Helo werewsrfe reffefef dfdgfdgfdg fgfdgfgf fgdgdgdf fggdfgfdgd</p>
            </div>
            <div class="price">Rs 6000.0</div>
        </div>
        <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
        <div class="product"> <img src="https://lk.spaceylon.com/wp-content/uploads/2022/07/Sal-saffron-vitamin-E-rich-Delicate-creme-facial-exfoliator-5-300x300.jpg" alt=""/>
                <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                    <li class="icon "id="edit"><span class="bi bi-pen"></span></li>
                    <li class="icon mx-3"><span class="bi bi-trash"></span></li>
                </ul>
            </div>
            <div class="tag bg-red">Body Creams</div>
            <span class="tag1 bg-green"> 15</span>
            <div class="title pt-4 pb-1">Neroli Jasmin</div>
            <div class="d-flex align-content-center justify-content-center">
              <p>Helo werewsrfe reffefef dfdgfdgfdg fgfdgfgf fgdgdgdf fggdfgfdgd</p>
            </div>
            <div class="price">Rs 6000.0</div>
        </div>
        <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
            <div class="product"> <img src="https://lk.spaceylon.com/wp-content/uploads/2022/12/Neroli-Jasmine-Hudrate-Treat-Rich-Body-Butter-1-300x300.jpg" alt=""/>
                <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                    <li class="icon "id="edit"><span class="bi bi-pen"></span></li>
                    <li class="icon mx-3"><span class="bi bi-trash"></span></li>
                </ul>
            </div>
            <div class="tag bg-red">Facial Creams</div>
            <span class="tag1 bg-green"> 15</span>
            <div class="title pt-4 pb-1">White Rice Cream</div>
            <div class="d-flex align-content-center justify-content-center">
              <p>Helo werewsrfe reffefef dfdgfdgfdg fgfdgfgf fgdgdgdf fggdfgfdgd</p>
            </div>
            <div class="price">Rs 6000.0</div>
        </div>
        <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
        <div class="product"> <img src="https://lk.spaceylon.com/wp-content/uploads/2022/07/Sal-saffron-vitamin-E-rich-Delicate-creme-facial-exfoliator-5-300x300.jpg" alt=""/>
                <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                    <li class="icon "id="edit"><span class="bi bi-pen"></span></li>
                    <li class="icon mx-3"><span class="bi bi-trash"></span></li>
                </ul>
            </div>
            <div class="tag bg-red">Body Creams</div>
            <span class="tag1 bg-green"> 15</span>
            <div class="title pt-4 pb-1">Neroli Jasmin</div>
            <div class="d-flex align-content-center justify-content-center">
              <p>Helo werewsrfe reffefef dfdgfdgfdg fgfdgfgf fgdgdgdf fggdfgfdgd</p>
            </div>
            <div class="price">Rs 6000.0</div>
        </div>
        
    </div>
</div>

      </div>
      <SystemFooter />
    </div>
  </div>
  );
};

export default SellerProducts;
