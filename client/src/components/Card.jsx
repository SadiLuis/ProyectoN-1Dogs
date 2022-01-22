import React from "react";
import {FaRegWindowClose} from "react-icons/fa";


export  function DogCards( { name, image,temperament, weight} ){

    // function handleClose(){
    //     if(typeof onClose === 'function'){
    //         onClose();
    //     }        
    // }

    return (
        <div  style={{
            // gridColumn: "1/3",
            // gridRow: "1/3",
            // gridTemplateColumns: "repeat(3, 1fr)",
                       
            // alignItems: "center",
            // justifyContent: "center",
           
            // backgroundPosition: "center",
            // backgroundSize: "cover",
            // backgroundRepeat: "no-repeat",
            // borderColor: "black",
            // weight: "100%",
            //height: "100%",
            
        }} >
           


            <h3  style={{
                // fontSize: "30px",
                // color: "black",
                // fontFamily: "Arial",
                // fontWeight: "bold",
                // textAlign: "center",
                // marginTop: "20px",
                // marginBottom: "20px",

            }}> { name } </h3>
            <img src={ image } alt={ name } width="200px" height="200px" style={{
                // borderRadius: "10px",
                // border: "1px solid black",
                // margin: "10px",
                // cursor: "pointer",

            }} />
            <h5  style ={{
                // fontSize: "15px",
                // color: "black",
                // fontFamily: "Arial",
                // fontWeight: "bold",
                // textAlign: "center",
                // marginTop: "20px",
                // marginBottom: "20px",

            }}> { temperament } </h5>
            <h6  style={{
                // fontSize: "15px",
                // color: "black",
                // fontFamily: "Arial",
                // fontWeight: "bold",
                // textAlign: "center",
                // marginTop: "20px",
                // marginBottom: "20px",
            }}> { weight } </h6>
        </div>
    )
}

export default DogCards;