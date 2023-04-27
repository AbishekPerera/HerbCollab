import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./ShopPage.css";
import { Col, Pagination, Row } from "react-bootstrap";
import Card from "../../components/ItemCard/ItemCard";
import FooterBanner from "../../components/FooterBanner/FooterBanner";
import axios from "axios";
import CustomerFloatingBtn from "../../components/CustomerFloatingBtn/CustomerFloatingBtn";
import CustomerCartFloatingBtn from "../../components/CustomerFloatingBtn/CustomerCartFloatingBtn";

const ShopPage = () => {
  // const products = [
  //   {
  //     id: 1,
  //     title: "Product 1",
  //     image:
  //       "https://mymed.lk/public/storage/products_assets/6114a16bbee4e.jpg",
  //     price: "$10.00",
  //   },
  //   {
  //     id: 2,
  //     title: "Product 2",
  //     image:
  //       "https://mymed.lk/public/storage/dev_images/products_assets/60d530404aa4e.jpg",
  //     price: "$20.00",
  //   },
  //   {
  //     id: 3,
  //     title: "Product 3",
  //     image:
  //       "https://mymed.lk/public/storage/products_assets/614c12af03c80.png",
  //     price: "$30.00",
  //   },
  //   {
  //     id: 4,
  //     title: "Product 4",
  //     image:
  //       "https://mymed.lk/public/storage/products_assets/614d827c00aa1.jpg",
  //     price: "$40.00",
  //   },
  //   {
  //     id: 5,
  //     title: "Product 5",
  //     image:
  //       "https://mymed.lk/public/storage/products_assets/614d876228cfd.jpg",
  //     price: "$40.00",
  //   },
  //   {
  //     id: 6,
  //     title: "Product 6",
  //     image:
  //       "https://mymed.lk/public/storage/products_assets/614d88568ca26.jpg",
  //     price: "$40.00",
  //   },
  //   {
  //     id: 7,
  //     title: "Product 7",
  //     image:
  //       "https://mymed.lk/public/storage/products_assets/6135ac6edd3d5.jpg",
  //     price: "$40.00",
  //   },
  //   {
  //     id: 8,
  //     title: "Product 8",
  //     image:
  //       "https://mymed.lk/public/storage/products_assets/612c56d1d51f1.png",
  //     price: "$40.00",
  //   },
  //   {
  //     id: 9,
  //     title: "Product 9",
  //     image:
  //       "https://mymed.lk/public/storage/products_assets/61262d0c4911e.jpg",
  //     price: "$40.00",
  //   },
  //   {
  //     id: 10,
  //     title: "Product 10",
  //     image:
  //       "https://mymed.lk/public/storage/products_assets/61262c58df611.jpg",
  //     price: "$40.00",
  //   },
  //   {
  //     id: 11,
  //     title: "Product 11",
  //     image:
  //       "https://mymed.lk/public/storage/products_assets/61262d8a3a528.jpg",
  //     price: "$40.00",
  //   },
  //   {
  //     id: 12,
  //     title: "Product 12",
  //     image:
  //       "https://mymed.lk/public/storage/products_assets/6184bdc63310f.jpg",
  //     price: "$40.00",
  //   },
  // ];

  const [productslist, setProductslist] = useState([]);

  useEffect(() => {
    getAllProducts();
  });

  //get all product
  const getAllProducts = async () => {
    const response = await axios.get("http://localhost:8071/products/");
    // console.log(response.data);
    setProductslist(response.data);
  };

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Header />
      <div className="shop-page">
        {/* <!-- BREADCRUMB AREA START --> */}
        <div class="ltn__breadcrumb-area-shop text-left bg-overlay-white-30 bg-image">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="ltn__breadcrumb-inner">
                  <h1 class="page-title">Shop</h1>
                  <div class="ltn__breadcrumb-list">
                    <ul>
                      <li>
                        <Link to="/">
                          <span class="ltn__secondary-color">
                            <i class="bi bi-house-fill"></i>
                          </span>
                          Home
                        </Link>
                      </li>
                      <li>Shop</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- BREADCRUMB AREA END --> */}
        {/* <!-- SHOP AREA START --> */}
        <div className="shop-all-products">
          <div class="section-title-area ltn__section-title-2--- text-center">
            <h1 class="section-title">All Products</h1>
            <p>
              Taking care of your health has never been easier with our pharmacy
              products.
            </p>
          </div>
          {/* search bar  */}
          <Row className="search-bar justify-content-center">
            <div className="col-8">
              <form class="d-flex header-search-2">
                <input
                  class="form-control me-sm-2"
                  type="search"
                  placeholder="Search"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button class="btn btn-search" type="submit">
                  Search
                </button>
              </form>
            </div>
          </Row>
          {/* search bar  */}

          <div className="ourproductgrid">
            <Row xs={2} md={4} lg={5} className="g-4">
              {/* add grid classes */}
              {productslist
                .filter((val) => {
                  if (searchTerm == "") {
                    return val;
                  } else if (
                    val.name.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((product) => (
                  <Col key={product.id}>
                    <Card
                      id={product._id}
                      title={product.name}
                      image={product.image}
                      price={product.price}
                    />
                  </Col>
                ))}
            </Row>
          </div>
        </div>
        <div className="shop-pagination">
          <Pagination className="justify-content-center">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
        <CustomerFloatingBtn />
        <FooterBanner />
        <CustomerCartFloatingBtn />
      </div>
      <Footer />
    </div>
  );
};

export default ShopPage;
