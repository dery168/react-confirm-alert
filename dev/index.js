import React from 'react'
import ReactDOM from 'react-dom'
import { confirmAlert, confirmAlert2 } from 'react-confirm-alert'
import '../src/react-confirm-alert.css'

class App extends React.Component {
  submit = () => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => alert('Click Yes')
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    })
  }

  handleClickCustomUI = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui'>
            <h1>Are you sure?</h1>
            <p>You want to delete this file?</p>
            <button onClick={onClose}>No</button>
            <button onClick={onClose}>Yes, Delete it!</button>
          </div>
        )
      }
    })
  }

  showConfirmAlert2 = (name) => {
    confirmAlert2({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui'>
            <h1>Confirmation for file '{name}'</h1>
            <p>You want to delete the file '{name}'?</p>
            <button onClick={onClose}>No</button>
            <button onClick={onClose}>Yes, Delete it!</button>
          </div>
        )
      }
    })
  }


  render () {
    return (
      <div className='main-container'>
        <section className='section1'>
          <div className='center'>
            <div className='title'>React confirm alert 2</div>
            <br />
            <br />
            <a href='javascript:;' className='button' onClick={this.submit}>
              Show confirm
            </a>
            <a href='javascript:;' className='button outline' onClick={this.handleClickCustomUI}>
              Show confirm Custom UI
            </a>
            <a href='javascript:;' className='button' onClick={
              () => { this.showConfirmAlert2('apple.gif'); this.showConfirmAlert2('orange.gif') }}>
              Show multiple confirms
            </a>
            
          </div>
        </section>
      </div>
    )
  }
}

const rootEl = document.getElementById('root')
ReactDOM.render(<App />, rootEl)
