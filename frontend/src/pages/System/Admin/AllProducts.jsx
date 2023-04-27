import React, { useEffect, useState } from 'react';
import './styles/Dashboard.css';
import './styles/AllProductsSearch.css';
import SystemFooter from '../../../components/System/SystemFooter/SystemFooter';
import DataTable from 'react-data-table-component';
import Sidebar from '../../../components/System/Sidebar/Sidebar';
import SystemNav from '../../../components/System/SystemNavBar/SystemNav';
import axios from 'axios';
import { tableCustomStyles } from './styles/tableStyle.jsx';

const AllProducts = () => {
  const [product, setProduct] = useState([]);

  const getProducts = () => {
    axios
      .get(`http://localhost:8071/products/`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  useEffect(() => getProducts(), []);

  const columns = [
    {
      name: 'Product',

      selector: (row) => (
        <img
          className='cart-product-img'
          src={row.image}
          alt={row.name}
          style={{ height: '120px', width: '120px' }}
        />
      ),
    },
    {
      name: 'Product Name',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Category',
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: 'Quantity',
      selector: (row) => row.quantity,
      sortable: true,
    },
    {
      name: 'Price',
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: 'Seller Name',
      selector: (row) => row.sellerUsername,
      sortable: true,
    },
  ];

  return (
    <div className='mainContainer'>
      <div className='sidebar'>
        <Sidebar />
      </div>

      <div className='contentContainer'>
        <div className='systemNavBar'>
          <SystemNav />
        </div>
        <div className='content'>
          <br />
          <h1 style={{ textAlign: 'center' }}>All Products</h1>
          <br />
          <br />
          <DataTable
            customStyles={tableCustomStyles}
            columns={columns}
            data={product}
            pagination={true}
            paginationPerPage={5}
            paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
            noDataComponent='No Products Found'
          />
        </div>
        <SystemFooter />
      </div>
    </div>
  );
};
export default AllProducts;
