import "./../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"
import React, {useState} from "react";

function CurencyColumn(props){
  let curencyOptions = props.curencyOptions;
  return(
    <div className="col-lg-5">
      <div className="content">
        <div className="drop">
          <select name="" onChange={props.handleCurencyChange} id="" value={props.selectedCurency}>
            {
              curencyOptions.map(function(key){
                return <option key={key} value={key}>{key}</option>
              })
            }
          </select>
        </div>
        <div className="input">
          <input type="text" value={props.ammount} onChange={props.handleAmmountChange}/>
        </div>
      </div>
    </div>
  )

}


export default CurencyColumn;