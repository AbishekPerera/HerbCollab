import React,{useState,useEffect}from 'react';

import './styles/Dashboard.css';
import SystemFooter from '../../../components/System/SystemFooter/SystemFooter';
import Sidebar from '../../../components/System/Sidebar/Sidebar';
import SystemNav from '../../../components/System/SystemNavBar/SystemNav';
import axios from "axios";
import ViewSellerModal from '../../../components/System/Seller/ViewSellerModal';


const AllSellers = () => {

  const [SellerModal, setSellerModal] = useState(false);
  const [id, setID] = useState('');
  const [input, setInput] = useState({Account:''});
  const [statusChanged, setStatusChanged] = useState(false);
 


  const handleSellerModalClose = () => setSellerModal(false);
  const handleSellerModalShow = (id) => {
    setSellerModal(true);
    setID(id);
  };

 
    const [sellers, setSellers] =useState('');
    
  
        const getSellers = async()=>{
            try{
            const res =await axios.get("http://localhost:8084/users/",
              ).then((res)=>{
                const data =  res.data;
                setSellers(data)
                 console.log(data) 
            })
          }catch(err){ console.log(err)};
                
          
        }

    useEffect(()=>{
        getSellers();
   
     },[])

    function DeleteSeller(id){
        if (window.confirm("Are you sure to Delete the item?")) {
        axios.delete("http://localhost:8084/users/delete/"+id).then((res)=>{
                setSellers((sellers)=>
                sellers.filter((_,i) => i !== id));
                window.location.reload(false);
                 
            }).catch((err)=>{
                alert(err);
            })
        }

    }

         
    function handleChange(e, sellerData) {
      setInput(prev => ({
        ...prev,
        [e.target.name]: e.target.value
      }));
    
      setID(sellerData._id);
      setStatusChanged(true);
    }
    
    function Update() {
      console.log("Account", input.Account);
      console.log("ID", id);
    
      try {
        axios.put("http://localhost:8084/users/updateStatus/" + id, {
          Account: input.Account,
        }).then((res) => {
          const data = res.data;
          alert("Update Seller Status Successfully")
          window.location.reload(false);
    
        })
      } catch (err) {
        console.log(err)
      };
    }
    

    useEffect(() => {
      if (statusChanged) {
        Update();
        setStatusChanged(false); // reset the state variable
      }
    }, [statusChanged]);
    


  return (
    <><ViewSellerModal
      show={SellerModal}
      handleClose={handleSellerModalClose}
      id={id} /><div className="mainContainer">
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="contentContainer">
          <div className="systemNavBar">
            <SystemNav />
          </div>
          <div style={{ textAlign: 'center' }}>
            <h2>All Sellers</h2>
          </div>
          <br />
          {/* Search Bar */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginRight: '20px',
            }}
          >
            <form
              className="example"
              action="/action_page.php"
              style={{ maxWidth: '300px' }}
            >
              <input type="text" placeholder="Search.." name="search2" />
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
          <br />
          {/* Table */}
          <div className="table-container" style={{ width: '98%' }}>
            <table>
              <tr class="header-row">
                <th>Seller ID</th>
                <th>Seller Name</th>
                <th>Seller Store Name</th>
                <th>Email</th>
                <th>Mobile Number</th>
                <th>Address</th>
                <th>Seller Status</th>
                <th>Action</th>
              </tr>
              {sellers && sellers.filter(sellerData => sellerData.Role === 'Seller').map((sellerData, index) =>(
             
                <tr key={index}>
                  <td>{index + 1}</td>
                  
                  <td>{sellerData.UserName}</td>
                  <td>{sellerData.StoreName}</td>
                  <td>{sellerData.Email}</td>
                  <td>{sellerData.MobileNo}</td>
                  <td>{sellerData.Address}</td>
                  <td>
                 
                    <select style={{ width: '180px' }} name='Account' value={sellerData.Account} onChange={((e)=>handleChange(e,sellerData))}>
                    <option  value={sellerData.Account} selected disabled>{sellerData.Account}</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </td>
                  <td className="d-flex justify-content-between">
                    <button className="btn btnx btn-success" onClick={(() => handleSellerModalShow(sellerData._id))}><span class="glyphicon">&#xe105;</span></button>
                    <button className="btn btnx btn-success"><a href={'/UpdatSeller/' + sellerData._id} style={{ color: 'white', textDecoration: 'none' }}> <span class="glyphicon glyphicon-pencil"></span></a></button>
                    <button className="btn btnx btn-danger" onClick={(() => DeleteSeller(sellerData._id))}><span class="glyphicon">&#xe020;</span></button>
                  </td>
                </tr>
                ))}
            </table>
          </div>
          <br /> <br /> <br />
          <SystemFooter />
        </div>
      </div></>
  );
};

export default AllSellers;