import React, {Component} from 'react';
import Modal from './Modal';
import './App.scss';

class App extends Component {
  state = {
    showModal: false
  }

  handleOpenModal = () => this.setState({ showModal: true });
  handleCloseModal = () => this.setState({ showModal: false });

  render() {
    return (
      <div className="app">
        <button type="button" 
                className="show-details"
                onClick={this.handleOpenModal}
        >
          Show details
        </button>
        {this.state.showModal ? <Modal handleCloseModal={this.handleCloseModal}/> : null}
      </div>
    );
  }
}

export default App;
