import React, { useState } from 'react';

const Mobile = () => {
    const [charge, setCharge] = useState(100)

    const getChargeUp = () =>{
        if(charge<100){
            
        // const newCharge = charge + 10;
        setCharge(currentCharge => currentCharge + 10)
        }
    }
    const getChargeByClick = () =>{
       if(charge>0){
        // const newCharge = charge - 10;
        setCharge(currentCharge => currentCharge-10)
       }
       
    }
    
    return (
        <div style={{border: "2px solid purple",width: "300px",height: "150px", margin: "auto" }}>
            <h2>Mobile Phone</h2>
            <h4>Charge: {charge} % </h4>
            <button onClick={getChargeByClick}>Battery Down</button>
            <button onClick={getChargeUp}>Battery up</button>
        </div>
    );
};

export default Mobile;