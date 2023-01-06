import React from 'react';
import { useParams } from 'react-router-dom';

const About = () => {
    const {id} = useParams();
    return (
        <div className="mt-5 d-flex justify-content-center">
           
           
            <h3>User Id is :{id}</h3>
        </div>
    );
};

export default About;