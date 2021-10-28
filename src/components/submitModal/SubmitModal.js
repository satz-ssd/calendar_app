import { Button, Modal } from 'react-bootstrap'
import './Modal.css';
function SubmitModal(props) {
  // const [smShow, setSmShow] = useState(false);

  const handleClose = () => props.setisShowSubmitModal(false);
  const handleShow = () => props.setisShowSubmitModal(true);

  return (
    <div >
      {/* <Button onClick={() => setSmShow(true)}>Small modal</Button>{' '}  */}
      <Modal show={handleShow} onHide={handleClose} className="modal__main"
        size="sm"
        aria-labelledby="example-modal-sizes-title-md" >
        <Modal.Body id="example-modal-sizes-title-md">
          <div  >
            <div id="container">
              {/* <div id="success"><i className="fa-regular fa-circle-check"></i></div> */}
              <div id="success"><i className="far fa-check-circle"></i></div>
              <p id="text">Calendar has been successfully created</p>
              <div id="btn"><Button id="button" onClick={handleClose} >OK</Button></div>
            </div>
          </div>
        </Modal.Body>

      </Modal>

    </div>
  );

}
export default SubmitModal