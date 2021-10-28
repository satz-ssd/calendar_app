import React from 'react'
import { Modal, Button } from "react-bootstrap";
import './DeleteConfirm.css'

const DeleteConfirmation = (props) => {
  const indexo = props.delIndex;
  const deleteFormData = (index) => {
    props.getDeleteDataIndex(index)
    handleClose()
  };

  const handleClose = () => props.setisShowDelete(false);
  const handleShow = () => props.setisShowDelete(true);
  return (

    <Modal show={handleShow} onHide={handleClose}>
      {/* <Modal.Header closeButton> */}
      {/* <Modal.Title>Delete Confirmation</Modal.Title> */}
      {/* </Modal.Header> */}
      <Modal.Body>
       
        <div className="alert ">
        <i className="deleteExclamation fas fa-exclamation-triangle 
        fa-3x "></i>
        <p className="mt-2">Are you sure you want to delete this calendar ?</p>
          <div className="delete__btns">
           <div>
           <Button variant="danger" onClick={() => { deleteFormData(indexo) }} >
              Confirm
            </Button>
           </div>
            <div className="ms-4">
              <Button variant="success " onClick={handleClose}>
              Cancel
            </Button>
              </div>
          </div>
        </div></Modal.Body>
      {/* <Modal.Footer>
       
      </Modal.Footer> */}
    </Modal>


    //   <Modal show={showModal} onHide={hideModal}>
    //   <Modal.Header closeButton>
    //     <Modal.Title>Delete Confirmation</Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body><div className="alert alert-danger">{message}</div></Modal.Body>
    //   <Modal.Footer>
    //     <Button variant="default" onClick={hideModal}>
    //       Cancel
    //     </Button>
    //     <Button variant="danger" onClick={() => confirmModal(type, id) }>
    //       Delete
    //     </Button>
    //   </Modal.Footer>
    // </Modal>
  )
}

export default DeleteConfirmation;