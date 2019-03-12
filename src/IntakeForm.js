import React, { Component } from 'react';
import './Generator.scss';
import EditableForm from './EditableForm.js';
import PreviewForm from './PreviewForm.js';
let increament = 0;

class IntakeForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:'Empty',
            replaceLiveData : false
        };
        this.handleChange = this.handleChange.bind(this);
        this.generateInputFromForm = this.generateInputFromForm.bind(this);

    }


    
    generateInputFromForm(event){
        event.preventDefault();

        const myForm = document.querySelectorAll('.jsonFormIntake');
        const jsonRaw = myForm[0].querySelector('#jsonRaw');
 
        event.preventDefault();

        if(jsonRaw !== null && jsonRaw.value !== "" && jsonRaw.value.length > 0 ){
          // test if string looks like an object
          // create the form object and submit button
            const regexStartWith = /^{/gm;
            const regexEndWith = /}$/gm;
            let itemsBuilder = '';
            if(regexStartWith.test(jsonRaw.value) && regexEndWith.test(jsonRaw.value)){
              
                // let inputData = jsonRaw.value;
                // console.log(inputData);
                let formdata = JSON.parse(jsonRaw.value); 
                // create array from object       
                //formdata = Object.values(formdata);

              //  console.log('formdata');
              //  console.log(formdata);
                // test for a real object

               

                // console.log(Object.values(formdata));
                // console.log(typeof formdata);
                console.log(formdata);
            

                if(typeof formdata === 'object' && typeof formdata !== 'string'){

                    for(let prop in formdata){
                        itemsBuilder += `<div><label for=${prop}${increament}>${prop}<input class="form-control" id=${prop}${increament} type="text" placeholder=${prop} /></label></div>`;
                        increament = increament+1;      
                        console.log(prop + ' : ' + formdata[prop]);

                        for(let prop1 in formdata[prop]){
                            console.log(prop1 + ' : ' + formdata[prop][prop1]);
                            itemsBuilder += `<div><label for=${prop1}${increament}>${prop1}<input class="form-control" id=${prop1}${increament} type="text" placeholder=${formdata[prop][prop1]} /></label></div>`;
                            increament = increament+1;

                            if(formdata[prop][prop1] == '[object Object]'){          

                                for(let prop2 in formdata[prop][prop1]){
                                    console.log(prop2 + ' : ' + formdata[prop][prop1][prop2]);
                           
                                    itemsBuilder += `<div><label for=${prop2}${increament}>${prop2}<input class="form-control" id=${prop2}${increament} type="text" placeholder=${formdata[prop][prop1][prop2]} /></label></div>`;
                                    increament = increament+1;


                                    if(formdata[prop][prop1][prop2] == '[object Object]'){ 
                                        for(let prop3 in formdata[prop][prop1][prop2]){
                                            console.log(prop3 + ' : ' + formdata[prop][prop1][prop2][prop3]);

                                            if(formdata[prop][prop1][prop2][prop3] == '[object Object]'){ 
                                                for(let prop4 in formdata[prop][prop1][prop2][prop3]){
                                                    itemsBuilder += `<div><label for=${prop4}${increament}>${prop4}<input class="form-control" id=${prop4}${increament} type="text" placeholder=${formdata[prop][prop1][prop2][prop3][prop4]} /></label></div>`;
                                                    increament = increament+1;

                                                    console.log(prop4 + ' : ' + formdata[prop][prop1][prop2][prop3][prop4]);
        
                                                }
                                            }

                                        }
                                    }

                                }
                            }
                        }
                    }
                    // (function(){
                     
                    //     for (let argument of arguments) {
                    //         console.log('--arguments--');
                    //         console.log(argument);
                    //         console.log(formdata[argument]);
                         
                    //             itemsBuilder += `<div><label for=${[argument]}>${[argument]}<input class="form-control" id=${[argument]} type="text" placeholder=${[argument]} /></label></div>`;
                    //             increament = increament+1;
                            

                    //     }
                    // }(formdata));



                    // for(let key in formdata){
                    //     console.dir(key);
                      
    
                    //         itemsBuilder += `<div><label for=${key}${increament}>${key}<input class="form-control" id=${key}${increament} type="text" placeholder=${key} /></label></div>`;
                    //         increament = increament+1;
                    //     }

                  //  console.dir(formdata);
                  
             
               

                    // for(let key in formdata){

                    //     increament = increament+1;
    
                    //         itemsBuilder += `<div><label for=${key}${increament}>${key}<input class="form-control" id=${key}${increament} type="text" placeholder=${key} /></label></div>`;
                    //         console.log(itemsBuilder);

                    //         // level 2
                    //         let formdata2 = formdata;
                    //             if(key === "data"){
                    //                 for(let key2 in formdata2[key]){
                    //                     itemsBuilder += `<div><label for=${key2}>${key2}<input class="form-control" id=${key2} type="text" placeholder=${formdata2[key][key2]} /></label></div>`;
                    //                     console.table(key2, formdata2[key][key2]);
                    //                 }
                    //             }

                    //     }
                        console.log(itemsBuilder);

                    this.setState({
                        replaceLiveData: true,
                        formDataAtt: event.target.parentNode[0].value,
                        editableElem: itemsBuilder
                 
                    });


                    // loop though the object and make it editable
                    // for (let argument of arguments) {
                    //     console.log(argument);
                    //     console.log(this.props);
                    //   }
                    // for(let key in formdata){

                    //     increament = increament+1;

                    //     itemsBuilder += `<div><label for=${key}${increament}>${key}<input class="form-control" id=${key}${increament} type="text" placeholder=${formdata[key]} /></label></div>`;

                    //     // level 2
                    //      let formdata2 = formdata;
                    //         if(key === "data"){
                    //             for(let key2 in formdata2[key]){
                    //                 itemsBuilder += `<div><label for=${key2}>${key2}<input class="form-control" id=${key2} type="text" placeholder=${formdata2[key][key2]} /></label></div>`;
                    //                 console.table(key2, formdata2[key][key2]);
                    //             }
                    //         }
                    //     }
                        // itemsBuilder += '</form>';
                        // after state after loop end
                        this.setState({
                            populateForm: document.querySelector('.editableForm').innerHTML = itemsBuilder
                        });
                   // console.log('lets do something with this json ');
                    }
                }else{
                this.setState({
                    value: <div className="err">This may not be a VALID json</div>      
                });
            }
        }
      
    }

// show the value from form element
    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }





render() {


    return (
        <div>
            <main className="mainData" contact={this.props}>
                <form className="jsonFormIntake" name="myForm" linktoclick={this.formDataProps} generatejson={this.state.formDataAtt}>
                    <div className="form-group">
                        <label htmlFor="jsonRaw">Enter json:</label>
                        <textarea id="jsonRaw" rows="10" cols="30" placeholder="Paste JSON file in here" onChange={this.handleChange} ></textarea>
                    </div>
                    <input type="submit" onClick={this.generateInputFromForm} className="btn btn-primary" value="Edit JSON"/> 
                </form>
  
            </main>
            <div className="generator-wrapper">
                <div className="flex-wrapper">
           
            <EditableForm formDataAtt={this.state.formDataAtt} replaceLiveData={this.state.replaceLiveData} editableElem={this.state.editableElem}/>

            <PreviewForm value={this.state.value} formDataAtt={this.state.formDataAtt} replaceLiveData={this.state.replaceLiveData}/>
                </div>
            </div>
        </div>

        );
    }
}
export default IntakeForm;