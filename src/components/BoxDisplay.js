import React from "react";


const BoxDisplay = ({boxes}) => {
    return (
        <div>
            { boxes.map((val, i)  => 

                <div key={i} style = {{ height: val.height + "px", width: val.height + "px", backgroundColor: val.color, border: "2px" + val.color, display:"inline-block" }}>
                    <p>color:{ val.color }</p>
                    <p>height:{ val.height }</p>
                </div>
            )}
        </div> 
    )
}

export default BoxDisplay;