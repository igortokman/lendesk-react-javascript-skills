import React  from 'react';
import data from './data.json';
import { Form } from "./forms/Form";

export default function App(props) {
    return <Form data={data.questions}/>;
}
