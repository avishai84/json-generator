import React, { Component } from 'react';

import './Generator.scss';

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
    }
    

    handleChange(event) {
        this.setState({
            value: event.target.value
       
        });
      }

      originalValueChanged(event){
        // console.dir(event.target);
          // check if value changed in input field by user -
          // and change bg color for visual indication

        this.setState({
            valueChange: (event.target.value !== "" && event.target.attributes['placeholder'].nodeValue !== event.target.value) ? event.target.setAttribute('style','background-color:#0092f61f') : event.target.setAttribute('style','background-color:transparent')
        });
      }

    generateInputFromForm(event){
       
        const myForm = document.querySelectorAll('.jsonFormIntake');
        const jsonRaw = myForm[0].querySelector('#jsonRaw');
 
        event.preventDefault();

        if(jsonRaw.value !== "" && jsonRaw.value.length > 0 ){
          // test if string looks like an object
            const regexStartWith = /^{/gm;
            const regexEndWith = /}$/gm;
            if(regexStartWith.test(jsonRaw.value) && regexEndWith.test(jsonRaw.value)){
                let formdata = JSON.parse(jsonRaw.value); 
                // test for a real object
                if(typeof formdata === 'object' && typeof formdata !== 'string'){
                    // loop though the object and make it editable
                    
                    for(let key in formdata){
                        
                        console.table(key, formdata[key]);
                        let foo = <label htmlFor={key}>{key}<input className="form-control" id={key} type="text" placeholder={formdata[key]} onBlur={this.originalValueChanged}/></label>;

                        this.setState({
                            populateForm:foo
                        });

                        // level 2
                        let formdata2 = formdata;
                        if(key === "data"){
                            for(let key2 in formdata2[key]){
                                console.table(key2, formdata2[key][key2]);
                            }
                        };
                            // for(let key2 in formdata2[key]){
                            //     console.log(formdata2[key][key2]);
                            // }
                        }
     
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
                 <input type="submit" onClick={this.generateInputFromForm} className="btn btn-primary" value="Generate"/> 
            </form>
        </main>
        <div className="flex-wrapper">
        <section>
            <h3>Editable Section</h3>
            <div>{this.state.populateForm}</div>
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
