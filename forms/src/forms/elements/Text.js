import React from 'react';
import { DataContext } from "../DataContext.js";

export default function Text(props) {
    return <DataContext.Consumer>
        { contextData => <input value={contextData.form[props.name]}
                                id={props.name} name={props.name} className="form-control"/>
        }
    </DataContext.Consumer>;

}