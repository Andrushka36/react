import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';

export default class ModalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modal: false};

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }


    render() {
        return (

            <div>
                <h1>React Bootstrap Modal Example</h1>
                <Button color="success" onClick={this.toggle}>React Modal</Button>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>IPL 2018</ModalHeader>
                    <ModalBody>
                        11
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>

        );
    }
}
