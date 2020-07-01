import React from 'react';
import { DataContext } from "../DataContext.js";

export default function Select(props) {
    return <DataContext.Consumer>
        { contextData => <select value={contextData.form[props.name]} className="form-control"
                                 id={props.name} name={props.name}>
            {props.options.map(option => <option key={option}>{option}</option>)}</select>
        }
    </DataContext.Consumer>;
}