import React from "react";
import "./FormComponents.scss"

class FormComponent extends React.Component {
    render() {
        return (
            <div>
                <form >
                    <input type="text" name="input1" placeholder="Your name" className="inputField1" />
                    <input type="email" name="input2" placeholder="Email Address" className="inputField2" />
                    <input type="text" name="input3" placeholder="Subject" className="inputField3" />
                    <input type="text" name="input4" className="inputField4" />
                    <button>SUBMIT NOW</button>
                </form>
            </div>
        )
    }
}

export default FormComponent;