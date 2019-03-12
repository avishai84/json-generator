import React, { Component } from 'react';
import './Generator.scss';

class PreviewForm extends Component {

    constructor(props){
        super(props);
        // this.state = {
        //   value:'Nothing to preview'
        // };
       // this.originalValueChanged = this.originalValueChanged.bind(this);
    }
    
    // handleChange(event) {
    //     this.setState({
    //         value: event.target.value
    //     });
    //   }

    // generateInputFromForm(event){
    //     const myForm = document.querySelectorAll('.jsonFormIntake');
    //     const jsonRaw = myForm[0].querySelector('#jsonRaw');
    //     event.preventDefault();

    //     if(jsonRaw !== null && jsonRaw.value !== "" && jsonRaw.value.length > 0 ){
    //       // test if string looks like an object
    //       // create the form object and submit button
    //         const regexStartWith = /^{/gm;
    //         const regexEndWith = /}$/gm;
    //         let itemsBuilder = '';
    //         if(regexStartWith.test(jsonRaw.value) && regexEndWith.test(jsonRaw.value)){
    //             let formdata = JSON.parse(jsonRaw.value); 
    //             // test for a real object
    //             if(typeof formdata === 'object' && typeof formdata !== 'string'){
    //                 // loop though the object and make it editable
    //                 for (let argument of arguments) {
    //                     console.log(argument);
    //                     console.log(this.props);
    //                   }
    //                 // for(let key in formdata){

    //                 //     increament = increament+1;

    //                 //     itemsBuilder += `<div><label for=${key}${increament}>${key}<input class="form-control" id=${key}${increament} type="text" placeholder=${formdata[key]} /></label></div>`;

    //                 //     // level 2
    //                 //      let formdata2 = formdata;
    //                 //         if(key === "data"){
    //                 //             for(let key2 in formdata2[key]){
    //                 //                 itemsBuilder += `<div><label for=${key2}>${key2}<input class="form-control" id=${key2} type="text" placeholder=${formdata2[key][key2]} /></label></div>`;
    //                 //                 console.table(key2, formdata2[key][key2]);
    //                 //             }
    //                 //         }
    //                 //     }
    //                     // itemsBuilder += '</form>';
    //                     // after state after loop end
    //                     // this.setState({
    //                     //     populateForm: document.querySelector('.editableForm').innerHTML = itemsBuilder,
    //                     //     c: document.querySelectorAll('.editableForm .theNewForm input').forEach( (item) => 
    //                     //         item.addEventListener('blur', this.originalValueChanged))
    //                     // });
    //                // console.log('lets do something with this json ');
    //                 }
    //             }
    //         //     else{
    //         //     this.setState({
    //         //         value: <div className="err">This may not be a VALID json</div>      
    //         //     });
    //         // }
    //     }
    // }


  render() {
   // console.log(this.props);
    return (
    <section>
        <h3>Preview of origin content</h3>
        <div>{this.props.replaceLiveData ? this.props.formDataAtt : this.props.value}</div>
    </section>
    );
  }
}

export default PreviewForm;
