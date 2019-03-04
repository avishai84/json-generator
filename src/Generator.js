import React, { Component } from 'react';
import './Generator.scss';
let increament = 0;

class Generator extends Component {

    constructor(props){
        super(props);
        this.state = {
          value:'Nothing to preview',
          populateForm:'empty',
          valueChange:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.generateInputFromForm =  this.generateInputFromForm.bind(this);
        this.originalValueChanged = this.originalValueChanged.bind(this);
        this.editFormBtn = this.editFormBtn.bind(this);
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
            valueChange: (event.target.value !== "" && event.target.attributes['placeholder'].nodeValue !== event.target.value) ? (event.target.setAttribute('style','background-color:#dc35454a'), this.editFormBtn('true')) : event.target.setAttribute('style','background-color:transparent')
        });
      }

      editFormBtn(canEdit){
        
        if(canEdit === 'true'){
            console.log('CAN EDIT - add btn for saving edited json')
        this.setState({
            createBtn : document.querySelector('.generator-wrapper').contains(document.querySelector('.generateForm')) ? 'false' : document.querySelector('.flex-wrapper > section:nth-child(1)').insertAdjacentHTML('afterbegin','<button class="btn btn-warning generateForm">Generate JSON</button>')
            })
            }
        }

    generateInputFromForm(event){
       
        const myForm = document.querySelectorAll('.jsonFormIntake');
        const jsonRaw = myForm[0].querySelector('#jsonRaw');
 
        event.preventDefault();

        if(jsonRaw !== null && jsonRaw.value !== "" && jsonRaw.value.length > 0 ){
          // test if string looks like an object
            const regexStartWith = /^{/gm;
            const regexEndWith = /}$/gm;
            let itemsBuilder = ' <form class="theNewForm" name="myForm" >';
            if(regexStartWith.test(jsonRaw.value) && regexEndWith.test(jsonRaw.value)){
                let formdata = JSON.parse(jsonRaw.value); 
                // test for a real object
                if(typeof formdata === 'object' && typeof formdata !== 'string'){
                    // loop though the object and make it editable
                    
                    for(let key in formdata){

                        increament = increament+1;

                        itemsBuilder += `<div><label for=${key}${increament}>${key}<input class="form-control" id=${key}${increament} type="text" placeholder=${formdata[key]} /></label></div>`;

                        // level 2
                         let formdata2 = formdata;
                            if(key === "data"){
                                for(let key2 in formdata2[key]){
                                    itemsBuilder += `<div><label for=${key2}>${key2}<input class="form-control" id=${key2} type="text" placeholder=${formdata2[key][key2]} /></label></div>`;
                                    console.table(key2, formdata2[key][key2]);
                                }
                            }
                        }
                        itemsBuilder += '</form>';
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


    componentDidMount(){
        
    }

  render() {
    return (
      <div className="generator-wrapper">
        <header>
            <h2>JSON GENERATOR</h2>
        </header>
        <main>
            <form className="jsonFormIntake" name="myForm" >
                <div className="form-group">
                    <label htmlFor="jsonRaw">Enter json:</label>
                    <textarea id="jsonRaw" rows="10" cols="30" placeholder="Paste JSON file in here" onChange={this.handleChange} ></textarea>
                </div>
                 <input type="submit" onClick={this.generateInputFromForm} className="btn btn-primary" value="Edit JSON"/> 
            </form>
        </main>
        <div className="flex-wrapper">
        <section>
            <h3>Editable Section</h3>
            <div className="editableForm">
            
            {/* {this.state.populateForm} */}
            </div>
       
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
