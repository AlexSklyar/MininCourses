import React, { Fragment } from 'react'
import './Modal.css'

export default class Modal extends React.Component{
    state = {
        isOpen: false
    }
    render(){
        return (

            <Fragment>
                <button onClick={()=>this.setState({isOpen: true})}>Open modal</button>
                {this.state.isOpen && <div className='modal'>
                    <div className='modal-body'>
                        <p>Modal window import...</p>
                        <button onClick={()=>this.setState({isOpen: false})}>Close modal</button>
                    </div>
                </div>}
            </Fragment>
        )
    }
}