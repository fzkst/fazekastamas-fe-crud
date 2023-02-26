import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PersonModal(props) {
  const {person, subscribed} = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='col me-2' variant="primary" onClick={handleShow}><i className="bi bi-arrow-up-right-square me-2"></i>
        Részletek
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}    
      >
        <Modal.Header id='modal-bg' closeButton>
          <Modal.Title>{person.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table">
                        <tbody>
                            <tr>
                                <th>#</th>
                                <td>{person.id}</td>
                            </tr>
                            <tr>
                                <th>Kor:</th>
                                <td>{person.age}</td>
                            </tr>
                            <tr>
                                <th>Hobbi:</th>
                                <td>{person.hobby}</td>
                            </tr>
                            <tr>
                                <th>Weboldal:</th>
                                <td>{person.website}</td>
                            </tr>
                            <tr>
                                <th>Feliratkozva:</th>
                                <td>{subscribed}</td>
                            </tr>
                        </tbody>
                    </table>
        </Modal.Body>
        <Modal.Footer id="modal-bg">
          <Button variant="primary" onClick={handleClose}>
            Bezár
          </Button>      
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PersonModal;