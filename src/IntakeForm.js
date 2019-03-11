import React, { Component } from 'react';
import './Generator.scss';


class IntakeForm extends Component {
    constructor(props){
        super(props);
        this.state = {
          value:'Nothing to preview'
         
        };

        this.generateInputFromForm = this.generateInputFromForm.bind(this);
    }
    generateInputFromForm(event){
        event.preventDefault();
        // value from within the form
        console.dir(event.target.parentNode[0].value);

        // can we get this data as props?
        let data = event.target.parentNode[0].value;

        //data = JSON.stringify(data);
        // console.log(data);
        const mainData = document.querySelector('main.mainData');
        this.setState({
            att: mainData.setAttribute('formData', data)
        });
    }

render() {

    // console.dir(this.props);

    return (
    <main className="mainData">
        <form className="jsonFormIntake" name="myForm" >
            <div className="form-group">
                <label htmlFor="jsonRaw">Enter json:</label>
                <textarea id="jsonRaw" rows="10" cols="30" placeholder="Paste JSON file in here" onChange={this.handleChange} ></textarea>
            </div>
             <input type="submit" onClick={this.generateInputFromForm} className="btn btn-primary" value="Edit JSON"/> 
        </form>
        </main>
        );
    }
}
export default IntakeForm;