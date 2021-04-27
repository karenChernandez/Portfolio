import React from 'react';
import pdf from '../../images/Full-StackSoftwareEngineerCopy.pdf';
import {Container3} from '../StyledComponents';

export default function Resume() {
    return <div>
        <h1>RESUME!!</h1>
        <a href={pdf} type="Resume/PDF"/>
    </div>;
}

