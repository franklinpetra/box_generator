import React, { useState } from "react";


const BoxForum = ({boxes, setBoxes}) => {
    const [color, setColor] = useState ("orange");
    const [height, setHeight] = useState ("150");

    const colorHandler = (e) => {
        setColor(e.target.value);
    }

    const heightHandler = (e) => {
        setHeight(e.target.value);
    }

    const forumHandler = (e) => {
        e.preventDefault();
        setBoxes([...boxes, {
            color: color,
            height: height,
            style: {
                display: "inline-block",
                border: "2px solid" + color,
                height: height + "px"
            }
        }]);
            
    
    }
    return (
        <div>
           <form onSubmit={forumHandler}>
                <div>
                    <label>Choose color: </label> 
                    <input type="text"  value = {color}  onChange={ colorHandler }  />
                </div>

                <div>
                    <label>Choose size: </label> 
                    <input type="text"  value = {height} onChange={ heightHandler } />
                </div>

                <div>
                    <input type="submit" value= "Add box!"></input>  
                </div><br></br><br></br>
                       
            </form>
        </div>
    )
}

export default BoxForum;