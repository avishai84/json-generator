import React, { Component } from 'react';
import './Generator.scss';


// function FormAsProps(props){

//     return ('<div></div>');
    
// }
class IntakeForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            formDataAtt:'Init State'
            // isFormDataReady: this.formDataAtt,
            // formData:''
       
        };
        this.formDataProps = this.formDataProps.bind(this);
        // this.generateInputFromForm = this.generateInputFromForm.bind(this);
        // this.GetMeNewProps = this.GetMeNewProps.bind(this);
    }
    // generateInputFromForm(event){
    //     event.preventDefault();
    //     // value from within the form
    //     console.dir(event.target.parentNode[0].value);

    //     // can we get this data as props?
    //     //let data = event.target.parentNode[0].value;

    //     // data = JSON.stringify(data);
    //     // console.log(data);
      
    //     this.setState({
    //         formDataAtt: event.target.parentNode[0].value,
    //         //formData: this.onchangeGetProps(this.formDataAtt)
    //     });
    // }

    // GetMeNewProps(formData){
    //     this.props.isFormDataReady(this.state.formData);
    //     return (this.props.isFormDataReady);
    //     }

    formDataProps(event){
        this.setState({
            formDataAtt:'YOU CHANGED STATE'  
        });
    }
//    formDataAtt: event.target.parentNode[0].value,    
render() {
   // console.log('INtake props:',this.props); 
    //const isFormDataReady = this.props.formDataAtt;
   // console.log(GetMeNewProps());
    return (
    <main className="mainData">
        <form className="jsonFormIntake" name="myForm" linktoclick={this.formDataProps} generatejson={this.state.formDataAtt}>
            <div className="form-group">
                <label htmlFor="jsonRaw">Enter json:</label>
                <textarea id="jsonRaw" rows="10" cols="30" placeholder="Paste JSON file in here" onChange={this.handleChange} 
                  ></textarea>
            </div>
           
        </form>
       {/* <GetMeNewProps formValue={this.props}/>   <input type="submit"  className="btn btn-primary" value="Edit JSON"/>  */}
       {/*            */}
    </main>
        );
    }
}
export default IntakeForm;