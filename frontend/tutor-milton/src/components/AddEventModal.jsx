/* eslint-disable import/no-anonymous-default-export */

import React, {useState} from "react";
import Modal from "react-modal";

import Datetime from 'react-datetime';

import './profcomps.css'

export default function ({isOpen, onClose, onEventAdded}) {
    const [title, setTitle] = useState("");
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    const [reoccurrence, setReoccurrence] = useState();

    const onSubmit = (event) => {
        event.preventDefault();

        onEventAdded({
            title,
            start,
            end,
            reoccurrence
        })
        onClose();
    }
    
    return(
        
        <Modal className="modal" isOpen={isOpen} onRequestClose={onClose} >
        
        <div className="App-bg">
            <div className="Row">
                
            <form onSubmit={onSubmit}>
            
            <div className="title-Box">
                <input placeholder="Title" className="txt-Box" value={title} onChange={e => setTitle(e.target.value)} />
            </div>

            <div className="column">
                    <label className="se-Label">Start Date</label>
          
                    <Datetime className="datePicker" value={start} onChange={date => setStart(date)} />
            </div>

            

                <div className="column">
                    <label className="se-Label">End Date</label>
                
                    <Datetime className="datePicker" value={end} onChange={date => setEnd(date)} />
                </div>
                <div>
                    <label className="se-Label">Reoccurrence</label>
                
                    {/* <Datetime value={start} onChange={date => setEnd(date)} /> */}
                </div>

                <button className="conf-button">Submit</button>
            </form>
            </div>
            </div>
        </Modal>
    )
}