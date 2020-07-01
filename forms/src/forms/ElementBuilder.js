import React from 'react';
import Text from './elements/Text';
import Select from './elements/Select';

export default function ElementBuilder(props) {
    return <>
        <h4>{props.title}</h4>
        { props.fields.map(elem =>
                <div key={elem.name} className="form-group">
                    <label key={elem.label} htmlFor={elem.name}>{elem.label}</label>
                    { getFormElement(elem) }
                </div>
        )}
    </>;
}


function getFormElement(elem) {
    switch(elem.type){
        case 'text':
            return <Text {...elem}/>;
        case 'dropdown':
            return <Select {...elem}/>;
        default:
            return <div className="alert alert-danger">Unknown element type</div>;
    }
}
