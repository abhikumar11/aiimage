import React, { useRef, useState } from "react";
import "./style.css";
const ImageGenerator = () => {
    const [imageurl, setImageUrl] = useState("/");
    let inputRef=useRef(null);
    const generateImage=async()=>{
        if(inputRef.current.value=="")
        {
            return 0;
        }
        const data=await fetch("https://api.openai.com/v1/images/generations",{
            method: "POST",
            headers: { 'Content-type': 'application/json',
            Authorization:"Bearer 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",
            "User-Agent": "Chrome"
         },
         body:JSON.stringify({
            prompt:`${inputRef.current.value}`,
            n:1,
            size:"512x512"
         })
          
        });
        let response=await data.json();
        console.log(response)
    }
     return (
          <div className="ai-container">
               <div className="header">
                    Ai Image <span>Generator</span>
                    <div className="image-loading">
                         <div className="image">
                              <img src={imageurl==="/"?"ai.svg":imageurl} alt="pic" />
                         </div>
                         <div className="search-box">
                              <input
                                   ref={inputRef}
                                   type="text"
                                   className="search-input"
                                   placeholder="Search..."
                              />
                              <div className="btn" onClick={()=>{generateImage()}}>Generate</div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ImageGenerator;
