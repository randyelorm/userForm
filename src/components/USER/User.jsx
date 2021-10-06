import React, {useState} from 'react';
import "./users.css"
import { DeleteUser} from "../../ACTIONS/UserAction"
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import EditForm from "../EDITFORM/EditForm"
import Modal from "react-bootstrap/Modal";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

 
const User = ({each_user_in_store, DeleteUser ,editUser}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (event)=> {
            DeleteUser(each_user_in_store.id)
    }

    



    return (
    <>
        <div className ="users">
        <Card style={{ width: '18rem' }} className ="card">
        <ListGroup variant="flush">
        <ListGroup.Item>Name: <span className = "user-info">{each_user_in_store.name} </span> </ListGroup.Item>
        <ListGroup.Item>Email: <span className = "user-info">{each_user_in_store.email}</span> </ListGroup.Item>
        <ListGroup.Item>Contact: <span className = "user-info">{each_user_in_store.number} </span></ListGroup.Item>
        <ListGroup.Item>ID: <span className = "user-info">{each_user_in_store.id}</span> </ListGroup.Item>
        <ListGroup.Item>   
            <Button variant="primary" onClick={handleShow}>Edit <i class="fas fa-edit"></i></Button>{' '} 
           <Button variant="secondary" onClick ={handleDelete}>Delete <i class="far fa-trash-alt"></i></Button>{' '}
          </ListGroup.Item>
        </ListGroup>
      </Card>
          
           
          
           
         
        </div>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm
            each_user_in_store={each_user_in_store}
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
