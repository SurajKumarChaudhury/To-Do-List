import React from "react";
function Footer(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return (
        <footer><p>Copyright © {year} Suraj Kumar Chaudhury. All rights reserved.</p></footer> );
}

export default Footer;