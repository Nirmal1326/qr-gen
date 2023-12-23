import React from "react";
import qr from "qr-image";
import fs from "fs";
const QrGen = (props) => {
    const url=props.URL; 
    const name=props.NAME;
    var qr_svg= qr.image(url);
    qr_svg.pipe(fs.createWriteStream(name+".png"));
    fs.writeFile(name+".txt",url,(err)=>{
            if(err) throw err;
    });
    return ( 
        <div>
            {/* <h1>{props.URL}</h1>
            <p>{props.NAME}</p> */}
        </div>
     );
}
 
export default QrGen;