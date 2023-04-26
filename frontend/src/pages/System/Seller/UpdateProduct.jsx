import React, { useEffect, useState } from 'react';
import SellerSidebar from '../../../components/System/Sidebar/SellerSidebar';
import SellerNav from '../../../components/System/SystemNavBar/SellerNav';
import SystemFooter from '../../../components/System/SystemFooter/SystemFooter';
import './styles/SellerDashboard.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const UpdateProduct = () => {
  useEffect(() => {
    getProduct();
  }, []);

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const { id } = useParams();
  const getProduct = () => {
    axios
      .get('http://localhost:8071/products/get/' + id)
      .then((res) => {
        console.log('Product: ', res.data);
        const updateProduct = {
          name: res.data.product.name,
          category: res.data.product.category,
          description: res.data.product.description,
          quantity: res.data.product.quantity,
          price: res.data.product.price,
          image: res.data.product.image,
        };

        setName(updateProduct.name);
        setCategory(updateProduct.category);
        setDescription(updateProduct.description);
        setQuantity(updateProduct.quantity);
        setPrice(updateProduct.price);
        setImage(updateProduct.image);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updateProduct = {
      name,
      category,
      description,
      quantity,
      price,
      image,
    };

    axios
      .put(`http://localhost:8071/products/update/${id}`, updateProduct)
      .then(() => {
        swal('Product Updated!', 'Product Updated Successfully!', 'success');
        navigate('/system/seller-products');
        setTimeout(function () {
          // window.location = 'system/seller-products';
        }, 1000);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className='mainContainer'>
      <div className='sidebar'>
        <SellerSidebar />
      </div>

      <div className='contentContainer'>
        <div className='systemNavBar'>
          <SellerNav />
        </div>
        <div className='content'>
          <form>
            <div className='form-group'>
              <label htmlFor='ProductName'>Product Name</label>
              <input
                type='text'
                className='form-control'
                id='name'
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor='ProductCategory'>Product Category</label>
              <input
                type='text'
                id='category'
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                class='form-control'
              />
            </div>
            <br />

            <div class='form-group'>
              <label htmlFor='ProductDescription'>Product Description</label>
              <input
                type='text'
                id='description'
                class='form-control'
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <br />

            <div class='form-group'>
              <label htmlFor='ProductQuantity'>Quantity</label>
              <input
                type='number'
                id='quantity'
                class='form-control'
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />
            </div>
            <br />

            <div class='form-group'>
              <label htmlFor='ProductPrice'>Price</label>
              <input
                type='number'
                class='form-control'
                id='price'
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>
            <br />

            <div class='form-group'>
              <label htmlFor='ProductImage'>Image</label>
              <input
                type='text'
                class='form-control'
                id='image'
                value={image}
                onChange={(e) => {
                  setImage(e.target.value);
                }}
              />
            </div>
            <br />

            <button
              type='submit'
              class='btn btn-success'
              variant='secondary'
              onClick={handleSubmit}>
              Update Product
            </button>
          </form>
        </div>
        <SystemFooter />
      </div>
    </div>
  );
};

export default UpdateProduct;
