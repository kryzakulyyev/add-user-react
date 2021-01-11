import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            job: ''
        }; 
        this.handleInput = this.handleInput.bind(this) 
        this.handleButton =  this.handleButton.bind(this)
    }
  handleInput(e){
      
    this.setState({
      [e.target.name]: e.target.value
      })
  }
  handleButton(){
      this.props.nameUpdate(this.state)
  }
    render() {
        console.log()
        const { name, job } = this.state; 
        return (
            <form>
                <h2>{name} {job}</h2>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    onChange={this.handleInput}
                     />
                <label htmlFor="job">Job</label>
                <input 
                    type="text" 
                    name="job" 
                    id="job"
                    onChange={this.handleInput}
                     />
                <button type="button" onClick={this.handleButton}>
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;
