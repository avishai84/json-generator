import React, { Component } from 'react';
import './Generator.scss';
import IntakeForm from './IntakeForm';

let increament = 0;

class Generator extends Component {

    constructor(props){
        super(props);
        this.state = {
          value:'Nothing to preview',
          populateForm:'empty',
          valueChange:'',
          fromFormData:'',
          dataInitState:'false',
          rmvdisable: 'disabled',
          generate: 'Generate JSON',
          pp:'init'
         
        };

        this.handleChange = this.handleChange.bind(this);
        this.generateInputFromForm =  this.generateInputFromForm.bind(this);
        this.originalValueChanged = this.originalValueChanged.bind(this);
        this.editFormBtn = this.editFormBtn.bind(this);
        this.generateJsonContent = this.generateJsonContent.bind(this);
        this.formDataPropsChange = this.formDataPropsChange.bind(this);
    }
    

    handleChange(event) {
        this.setState({
            value: event.target.value
       
        });
      }

      originalValueChanged(event){
        // console.dir(event.target);
        // Tracking for changed values by users
          // check if value changed in input field by user -
          // and change bg color for visual indication

        this.setState({
            valueChange: (event.target.value !== "" && event.target.attributes['placeholder'].nodeValue !== event.target.value) ? (event.target.setAttribute('style','outline: 4px solid #ffc107'), this.editFormBtn('true')) : event.target.setAttribute('style','outline-color: transparent'),
            ff: console.log('HEEE222E') 
        });
      }

      editFormBtn(canEdit){
        
        if(canEdit === 'true'){
           
            // Expossing generate json btn
        this.setState({
            dataInitState : 'true',
            rmvdisable: '',
            generate: 'Generating....',

            // createBtn : document.querySelector('.generator-wrapper .theNewForm .generateForm').dataset.exposed === 'false' ? document.querySelector('.generator-wrapper .theNewForm .generateForm').dataset.exposed = 'true' + document.querySelector('.generator-wrapper .theNewForm .generateForm').removeAttribute('style') : 'false'

            ff: console.log('HEEEE') 

                })
            }
        }

    generateInputFromForm(event){
       
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
                let formdata = JSON.parse(jsonRaw.value); 
                // test for a real object
                if(typeof formdata === 'object' && typeof formdata !== 'string'){
                    // loop though the object and make it editable
                    for (let argument of arguments) {
                        console.log(argument);
                        console.log(this.props);
                      }
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
                            populateForm: document.querySelector('.editableForm').innerHTML = itemsBuilder,
                            c: document.querySelectorAll('.editableForm .theNewForm input').forEach( (item) => 
                                item.addEventListener('blur', this.originalValueChanged))
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

    generateJsonContent(event){
        event.preventDefault();
        console.log(event.name);
        console.log('appending value to each input inside the form element');
  
        // when use click append value to all inputs
        //create FormData and pass all values
        this.setState({
           
         updateValueToInput: document.querySelectorAll('.editableForm .theNewForm input').forEach((item) => {
                if(item.value === ""){
                    item.value = item.attributes['placeholder'].nodeValue;  
                }
         }),
         a: document.querySelector('.editableForm .theNewForm'),
         b: console.log(this.a)
        //fromFormData: new FormData(document.querySelector('.editableForm .theNewForm'))
       // console.log(fromFormData); 
        });
     

    }
    // componentDidMount(){
        
    // }

    formDataPropsChange() {
 
        // getting form value
        // console.dir(event.target.parentElement.childNodes[1].childNodes[0].children[0].children[1].value);

        // this.setState({
        //     pp: event.target.parentElement.childNodes[1].childNodes[0].children[0].children[1].value
        // });
       
        this.props.generatejson(this.state.formDataAtt);

    }


  render() {
  
    return (
      <div className="generator-wrapper">
        <header>
            <h2>JSON GENERATOR</h2>
        </header>
        <IntakeForm  />
        {/* formDataPropsChange={this.state.formDataAtt} */}
      
     <button onClick={this.linktoclick} className="btn btn-primary">Edit JSON</button>  




       
        {/* <main>
            <form className="jsonFormIntake" name="myForm" >
                <div className="form-group">
                    <label htmlFor="jsonRaw">Enter json:</label>
                    <textarea id="jsonRaw" rows="10" cols="30" placeholder="Paste JSON file in here" onChange={this.handleChange} ></textarea>
                </div>
                 <input type="submit" onClick={this.generateInputFromForm} className="btn btn-primary" value="Edit JSON"/> 
            </form>
        </main> */}

        <div className="flex-wrapper">
        <section>
            <form className="theNewForm" name="myForm" onSubmit={this.generateJsonContent} >
          
                <h3>Editable Section</h3>
                <div className="editableForm">
                {/* {this.state.rmvdisable} */}
                {/* data-exposed={this.state.createBtn}  */}
                {/* {this.state.populateForm} */}
                </div>

                <input rmvdisable={this.state.rmvdisable} className="btn btn-warning generateForm" data-exposed={this.state.dataInitState} value={this.state.generate} type="submit"/>
            </form>
        </section>
        <section>
            <h3>Preview of origin content</h3>
            <div>{this.state.value}</div>
        </section>
        </div>

      </div>
    );
  }
}

export default Generator;
