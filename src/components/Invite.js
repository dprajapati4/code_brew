import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import {sendSms} from '../helper-function/sendSms';

Modal.setAppElement('#root');

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


export default class Invite extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      phoneNumber: "",
      modelIsOpen: false
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
   openModal() {
    console.log('sehint')
    // setIsOpen(true);
    this.setState({modelIsOpen: true})
  }
  closeModal() {
    // setIsOpen(true);
    this.setState({modelIsOpen: false})
  }
  async sendMessage(event){
    event.preventDefault();
    try {
      const sentMessage = await sendSms(this.state.phoneNumber)
    } catch (error) {
    }
  }

  render(){
    const {modalIsOpen} = this.state;
    console.log("this state", this.state);
    return(
      <div id="mo">
         <h4>Invite A Friend</h4>
            <span className="cup-image">
              <img
                src="http://clipart-library.com/images/di48x8LAT.jpg"
                alt="coffee cup"
                width="50"
                height="50"
              />
            </span>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        ></Modal>
      </div>
    );
  }

}