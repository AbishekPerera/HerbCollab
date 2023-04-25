import React,{useEffect,useState} from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";


const ViewSellerModal = ({ show, handleClose,id}) => {
  const [user,setUser] = useState([]);

  const sendRequest = async()=>{
    try{
      
    const res =await axios.get("http://localhost:8084/users/user/"+id).then((res)=>{
        const data =  res.data;
        setUser(data)
        
    })
  }catch(err){ alert(err)};
        
  
}


useEffect(() => {
  if (show) {
    sendRequest();
  }
}, [show, id]);


  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Seller Details</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="form-group">
          <label htmlFor="Seller ID">Seller ID:{id}</label>  
        </div>

        <div className="form-group">
          <label htmlFor="seller Name">Seller Name:{user.UserName}</label>
        </div>
        <div class="form-group">
          <label for="Store Name">Store Name: {user.StoreName} </label>
        </div>
        <div class="form-group">
          <label for="Email">Email: {user.Email}</label>
        </div>
        <div class="form-group">
            <label for="Address">Mobile No:{user.MobileNo} </label>
        </div>
        <div class="form-group">
            <label for="Address">Address: {user.Address}</label>
        </div>
        <div class="form-group">
            <label for="Address">RegisteredDate: {user.RegisteredDate}</label>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button class="btn btn-danger" variant="primary" onClick={handleClose}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};
export default ViewSellerModal;