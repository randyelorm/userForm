import React, {useState} from 'react';
import "./users.css"
import { DeleteUser} from "../../ACTIONS/UserAction"
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import EditForm from "../EDITFORM/EditForm"
import Modal from "react-bootstrap/Modal";

 
const User = ({user, DeleteUser ,editUser}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (event)=> {
            DeleteUser(user.id)
    }

    



    return (
    <>
        <div className ="users">
           <h3>{user.name}</h3> 
           <h3>{user.email}</h3> 
           <h3>{user.number}</h3> 
           
           <Button variant="primary" onClick={handleShow}>Edit</Button>{' '} <br />
           <Button variant="secondary" onClick ={handleDelete}>Delete</Button>{' '}
        </div>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm
            user={user}
            editUser={editUser}
            closeModal={handleClose}
          />
        </Modal.Body>
      </Modal>

    </>
    );
}

const mapDispatchToProps = {
  
   DeleteUser: DeleteUser

}


export default connect(null, mapDispatchToProps)(User);
