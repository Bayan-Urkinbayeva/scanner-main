import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const ServiceTerms = () => {
    return ( 
        <>
        <Link to="/login">
        <FontAwesomeIcon icon={faAngleLeft} className="text-[22px] text-blue-600 mt-5 ml-5"/>
        </Link>
        <div className="terms m-4">
        <span className="">
        Dear User, thank you for visiting our site! 
        Please read this Agreement carefully before you start using the Site. 
        You must comply with the terms of this Agreement by accessing the Site, 
        using the services, services and applications offered on the Site. 
        If you do not agree with the terms of the Agreement, 
        you may not use the Site or use any services, services and 
        applications offered on the Site, as well as visit pages located in the domain zone of the Site. 
        The beginning of the use of the Site means the proper conclusion of this 
        Agreement and your full acceptance of all its terms. 
        1. User - a person who gains access to applications, services, services and information posted on the Site. 
        2. General terms and conditions 
        2.1. Any materials, files and services contained on the 
        Site may not be reproduced in any form, by any means, in whole or in part, 
        without the prior written permission of the Company, except as specified in this Agreement. 
        When the User reproduces the materials of the Site, including copyrighted works, 
        a link to the Site is required, and the text of the specified link should not contain false, 
        misleading, pejorative or offensive information.
        </span>
        </div>
        </>
     );
}
 
export default ServiceTerms;