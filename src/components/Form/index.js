import React, {useState} from "react";

export default function () {
    const[state, setState] = useState({
        subject: "",
        message: ""
    })
    const handleOnChange = event => {
         const {name, value} = event.target
         setState({
             ...state,
             [name]: value
         });
        console.log(value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(state.subject, state.message)
        window.location.href= "mailto:rnguyen7388@gmail.com?subject="+state.subject+"&body="+state.message
    }
    return (
      <>
      <div className='container-fluid'>
        <div className='portfolio'>
          <h2>CONTACT</h2>
        
        <form className="container mt-5 shadow align-items-center col-sm-7" style={{backgroundColor: "white", height: "53vh"}}>
            <div className="row">
                <div className="col-md-12">
                    <label className="mt-4">Email Address</label>
                    <input className="form-control" name="subject" value={state.subject} onChange={handleOnChange} ></input>
                    <label className="mt-3">Subject</label>
                    <input className="form-control" name="subject" value={state.subject} onChange={handleOnChange} ></input>
                    <label className="mt-3">Message</label>
                    <textarea className="form-control" name="message" value={state.message} onChange={handleOnChange} style={{height: "20vh", resize: "none"}}></textarea>
                </div>
            </div>
            <br/>
            <button className="btn btn-primary btn" onClick={handleSubmit}>
             Submit
            </button>
        </form>
        </div>
      </div>
    </>
    )
}