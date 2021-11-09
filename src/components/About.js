import React,{useState} from "react";
import PropTypes from "prop-types";

export default function About(props) {

    const [myStyle,setMyStyle] = useState({
        color:'white',
        backgroundColor:'black'
    })
    // const [myText,setMyText] = useState('Light')
    // const toggleStyle = ()=>{
    //     if (myStyle.color === 'white'){
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor :'white'
    //         })
    //         setMyText('Light')
    //     }
    //     else{
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         setMyText('Dark')
    //     }
    // }
    return (
        <div className="container rounded-3 mt-3 border">
            <h3 className={`text-center my-1 text-${props.mode === 'light'?'dark':'light'}`} >About Us</h3>
            <div className="accordion accordion-flush my-2 py-2 border-dark rounded-3" id="accordionFlushExample" >
                <div className="accordion-item alert alert-info my-0 pt-4">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button
                            className="accordion-button collapsed alert alert-info border-dark rounded-3" 
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                            
                        >
                            Accordion Item #1
                        </button>
                    </h2>
                    <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                    >
                        <div className="accordion-body" >
                            Placeholder content htmlFor this accordion, which is intended to
                            demonstrate the <code>.accordion-flush</code> className. This is
                            the first item's accordion body.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header alert alert-info my-0 pt-4" id="flush-headingTwo">
                        <button
                            className="accordion-button collapsed alert alert-info my-0 pt-4 border-dark rounded-3"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                           
                        >
                            Accordion Item #2
                        </button>
                    </h2>
                    <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                    >
                        <div className="accordion-body" >
                            Placeholder content htmlFor this accordion, which is intended to
                            demonstrate the <code>.accordion-flush</code> className. This is
                            the second item's accordion body. Let's imagine this being filled
                            with some actual content.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header alert alert-info my-0 pt-4" id="flush-headingThree">
                        <button
                            className="accordion-button collapsed alert alert-info my-0 pt-4 border-dark rounded-3"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree"
                        >
                            Accordion Item #3
                        </button>
                    </h2>
                    <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample"
                    >
                        <div className="accordion-body" >
                            Placeholder content htmlFor this accordion, which is intended to
                            demonstrate the <code>.accordion-flush</code> className. This is
                            the third item's accordion body. Nothing more exciting happening
                            here in terms of content, but just filling up the space to make it
                            look, at least at first glance, a bit more representative of how
                            this would look in a real-world application.
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
