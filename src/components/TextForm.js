import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
    const [Text, setText] = useState("");
    // // Text = 'Hrishi' //Wrong way to update any const variable or state
    // const [myStyle,setMyStyle] = useState({
    //     color:'white',
    //     backgroundColor:'black'
    // })
    // const [myText,setMyText] = useState('Light')
   
    // const toggleStyle = ()=>{
    //     if (myStyle.color === 'white'){
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor :'white',
               
    //         })
    //         setMyText('Light')
    //     }
    //     else{
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black',
               
    //         })
    //         setMyText('Dark')
    //     }
    // }
    
    const handleUpClick = () => {
        // console.log('Upper one is clicked!!',Text)
        let newtext = Text.toUpperCase();
        setText(newtext);
        props.showAlert('Text has been converted to Upper Case','info')
    };

    const handlelowerClick = () => {
        let newtext = Text.toLowerCase();
        setText(newtext);
        props.showAlert('Text has been converted to Lower Case','info')

    };
    const handleremovePunctuation = () => {
        let newtext = Text.replace(/[^a-zA-Z ]/g, "");
        setText(newtext);
        props.showAlert('Punctuation marks has been deleted from Text','warning')

    };
    const handleExtraSpace = () => {
        let newtext = Text.replace(/\s+/g, " ").trim();
        setText(newtext);
        props.showAlert('Extra space from Text has been removed','info')

    };
    const handleRemoveText = () =>{
        let newtext = ''
        setText(newtext)
        props.showAlert('Text has been deleted','danger')

    };

    const handleCopyClipboard = () =>{
            var copyText = document.getElementById("mybox");
            copyText.select();
            console.log(copyText.value)
            navigator.clipboard.writeText(copyText.value);
            props.showAlert('Text has been copied to','info')

        }
        
    
    
    const handleOnChange = (event) => {
        // console.log('On Change');
        setText(event.target.value);
    };
    return (
        <div className="container rounded-3 border" >
            <div className="row g-3 ">
                <div className="col">
                    <label htmlFor="mybox" className={`text-${props.mode === 'light'?'dark':'light'}`}>{props.heading}</label>
                    <textarea
                        type="text"
                        className={`form-control my-1 bg-${props.mode === 'light'?'dark':'light'} text-${props.mode === 'light'?'light':'dark'}` }
                        placeholder="Enter Text Here...."
                        value={Text}
                        onChange={handleOnChange}
                        id="mybox"
                        rows="8"
                    ></textarea>
                </div>
            </div>

            <div className="text-center my-1">
                <button
                    className="btn btn-outline-danger mx-1 my-1"
                    onClick={handleUpClick}
                >
                    UpperCase
                </button>
                <button
                    className="btn btn-outline-info mx-1 my-1"
                    onClick={handlelowerClick}
                >
                    LowerCase
                </button>
                <button
                    className={`btn btn-outline-${props.mode === 'light'?'secondary':'light'} mx-1 my-1`}
                    onClick={handleremovePunctuation}
                >
                    Remove Punctuations
                </button>
                <button
                    className="btn btn-outline-success mx-1 my-1"
                    onClick={handleExtraSpace}
                >
                    Remove Extra Space
                </button>

                <button
                     className="btn btn-outline-primary mx-1 my-1"
                     onClick={handleRemoveText}>
                    Clear All Text
                </button>

                <button
                     className="btn btn-outline-warning mx-1 my-1"
                     onClick={handleCopyClipboard}>
                    Copy To Clipboard
                </button>
            </div>

            <div className={`container my-2 text-${props.mode == 'light'?'dark':'light'}`}>
                <h4>Your Text Summary</h4>
                <p>
                    Total Words : {Text.split(" ").length - 1}
                    <br />
                    Total Characters : {Text.length} <br />
                    Read Time : {0.008 * Text.split(" ").length } Min.<br/>
                    Pages : {Math.round(0.0022 * Text.split(" ").length,1)}
                </p> 
                <div className="card" Htmlstyle="width: 18rem;">
                    <div className={`card-body bg-${props.mode==='light'?'light':'dark'}`}>
                        <p className={`card-title alert alert-${props.mode === 'light' ?'success':'warning'} py-2 my-2 px-0 text-center shadow `}>
                            <strong>Preview </strong>
                        </p>
                        <p className={`card-text text-${props.mode == 'light'?'dark':'light'}`}>{Text.length > 0 ?Text:'Enter Some Text First To Preview Here.'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

//props
TextForm.propsTypes = {
    heading: PropTypes.string.isRequired,
};
