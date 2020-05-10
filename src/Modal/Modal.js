import React from 'react';
import './Modal.css';

export default class Modal extends React.Component {
    state = {
        isOpen: false
    }
    OpenModal = () => {
        this.setState({isOpen: true})
    }
    CloseModal = () => {
        this.setState({isOpen: false})
    }
    render() {
        return (
            <React.Fragment>
                <button onClick={this.OpenModal}>
                    Open modal
                </button>
                
                {this.state.isOpen &&
                    <div className="modal">
                        <div className="modal-body">
                            <h1>Modal title</h1>
                            <p>I am awesome modal!</p>
                            <button onClick={this.CloseModal}>
                                Close modal
                            </button>
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}