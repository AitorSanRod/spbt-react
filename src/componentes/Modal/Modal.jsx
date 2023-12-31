import { Button, Modal } from "react-bootstrap";

export default function Mod({show, handleClose}){
    return(
        <Modal show={show}>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
      </Modal>
    )
}