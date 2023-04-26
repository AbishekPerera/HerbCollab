import React, { useEffect, useState } from "react";
import SellerSidebar from "../../../components/System/Sidebar/SellerSidebar";
import SellerNav from "../../../components/System/SystemNavBar/SellerNav";
import SystemFooter from "../../../components/System/SystemFooter/SystemFooter";
import "./styles/SellerProducts.css";
import AddProductModal from "../../../components/System/SellerProducts/AddProductModal";
import UpdateProductModal from "../../../components/System/SellerProducts/UpdateProductModal";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const SellerProducts = () => {
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showUpdateProductModal, setShowUpdateProductModal] = useState(false);

  const handleAddProductModalClose = () => setShowAddProductModal(false);
  const handleAddProductModalShow = () => setShowAddProductModal(true);

  const handleUpdateProductModalClose = () => setShowUpdateProductModal(false);
  const handleUpdateProductModalShow = () => setShowUpdateProductModal(true);

  const [product, setProduct] = useState([]);

  function deleteProduct(id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this record!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        //if true do the following
        axios
          .delete("http://localhost:8071/products/delete/" + id)
          .then((res) => {
            swal("Your product has been deleted!", {
              icon: "success",
            });
            window.location.reload(false);
          })
          .catch((err) => {
            alert(err.message);
          });
      } else {
        swal("Delete cancelled success!");
      }
    });
  }

  const getProducts = () => {
    axios
      .get("http://localhost:8071/products/")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  useEffect(() => getProducts(), []);

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
              {product.map((product) => (
                <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                  <div class="product">
                    {/* <div className="productImg"> */}
                    <img
                      src={product.image}
                      alt={product.name}
                      // style={{ height: 'fit-content' }}
                    />
                    {/* </div> */}
                    <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                      <Link
                        to={"/system/seller-products/update/" + product._id}
                      >
                        <li class="icon " id="edit">
                          <span class="bi bi-pen"></span>
                        </li>
                      </Link>

                      <li
                        class="icon mx-3"
                        onClick={() => deleteProduct(product._id)}
                      >
                        <span class="bi bi-trash"></span>
                      </li>
                    </ul>
                  </div>
                  <div class="tag bg-red">{product.category}</div>
                  <span class="tag1 bg-green">{product.quantity}</span>
                  <div class="title pt-4 pb-1">{product.name}</div>
                  {/* <div class="d-flex align-content-center justify-content-center">
                    <p>{product.description}</p>
                  </div> */}
                  <div class="price">Rs. {product.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <SystemFooter />
      </div>
    </div>
  );
};

export default SellerProducts;
