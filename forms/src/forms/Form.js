import React, { Component } from 'react';
import './Form.css';
import ElementBuilder from './ElementBuilder';
import { DataContext } from "./DataContext";

export class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    updateFormValues = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let clone = Object.assign({}, this.state);
        Object.keys(clone).forEach(key => clone[key] = '');
        this.setState(clone);
    }

    logState = () => {
        Object.keys(this.state).forEach(key => console.log(`${key}:"${this.state[key]}"`));
    }

    render() {
        return <div className="panel panel-primary">
            <div className="panel-heading">
                <div className="panel-title">Account profile</div>
            </div>
            <div className="panel-body">
                <DataContext.Provider value={ {form:this.state} }>
                    <form onChange={ this.updateFormValues } onSubmit={this.handleSubmit }>
                        { this.props.data.map(item => <ElementBuilder key={item.title}
                                                                      title={item.title} fields={item.fields}/>)
                        }
                        <button type="submit" class="btn btn-primary btn-block">Submit</button>
                        <button type="button" onClick={ this.logState } class="btn btn-info btn-block">Log to console</button>
                    </form>
                </DataContext.Provider>
            </div>
        </div>
    }
}

export default Form;