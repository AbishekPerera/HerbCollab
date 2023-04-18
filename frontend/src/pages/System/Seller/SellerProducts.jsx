import React, { useState } from "react";
import SellerSidebar from "../../../components/System/Sidebar/SellerSidebar";
import SellerNav from "../../../components/System/SystemNavBar/SellerNav";
import SystemFooter from "../../../components/System/SystemFooter/SystemFooter";
import "./styles/SellerProducts.css";
import AddProductModal from "../../../components/System/SellerProducts/AddProductModal";
import UpdateProductModal from "../../../components/System/SellerProducts/UpdateProductModal";


const SellerProducts = () => {
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showUpdateProductModal, setShowUpdateProductModal] = useState(false);
  
  const handleAddProductModalClose = () => setShowAddProductModal(false);
  const handleAddProductModalShow = () => setShowAddProductModal(true);
  
  const handleUpdateProductModalClose = () => setShowUpdateProductModal(false);
  const handleUpdateProductModalShow = () => setShowUpdateProductModal(true);
  
  
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
          <button 
            className="btn btnProduct" 
            onClick={handleAddProductModalShow} 
            value="Add Product"
          >
            Add Product
          </button>

          <AddProductModal 
            show={showAddProductModal} 
            handleClose={handleAddProductModalClose}
          />
           <UpdateProductModal 
            show={showUpdateProductModal} 
            handleClose={handleUpdateProductModalClose}
          />

<div class="container bg-white">
    
    <div class="row">
        <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
            <div class="product"> <img src="https://lk.spaceylon.com/wp-content/uploads/2022/12/Neroli-Jasmine-Hudrate-Treat-Rich-Body-Butter-1-300x300.jpg" alt=""/>
                <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                    <li class="icon "id="edit"  onClick={handleUpdateProductModalShow} ><span class="bi bi-pen" ></span></li>
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
            <div class="product"> <img src="https://lk.spaceylon.com/wp-content/uploads/2022/12/Neroli-Jasmine-Hudrate-Treat-Rich-Body-Butter-1-300x300.jpg" alt=""/>
                <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                    <li class="icon "id="edit"  onClick={handleUpdateProductModalShow} ><span class="bi bi-pen" ></span></li>
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
            <div class="product"> <img src="https://lk.spaceylon.com/wp-content/uploads/2022/12/Neroli-Jasmine-Hudrate-Treat-Rich-Body-Butter-1-300x300.jpg" alt=""/>
                <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                    <li class="icon "id="edit"  onClick={handleUpdateProductModalShow} ><span class="bi bi-pen"></span></li>
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
                    <li class="icon "id="edit"  onClick={handleUpdateProductModalShow} ><span class="bi bi-pen"></span></li>
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
                    <li class="icon "id="edit"  onClick={handleUpdateProductModalShow} ><span class="bi bi-pen"></span></li>
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
                  <li class="icon "id="edit"  onClick={handleUpdateProductModalShow} ><span class="bi bi-pen"></span></li>
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
                    <li class="icon "id="edit"  onClick={handleUpdateProductModalShow} ><span class="bi bi-pen"></span></li>
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
                    <li class="icon "id="edit"  onClick={handleUpdateProductModalShow} ><span class="bi bi-pen"></span></li>
                    <li class="icon mx-3"><span class="bi bi-trash"></span></li>
                </ul>
            </div>
            <div class="tag bg-red">Body Creams</div>
            <span class="tag1 bg-green"> 15</span>
            <div class="title pt-4 pb-1">Neroli Jasmin</div>
            <div class="d-flex align-content-center justify-content-center">
              <p>Helo werewsrfe reffefef dfdgfdgfdg fgfdgfgf fgdgdgdf fggdfgfdgd</p>
            </div>
            <div class="price">Rs 6000.00</div>
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
