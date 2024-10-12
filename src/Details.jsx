import "./../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"

function CurencyColumn(){
  return(
    <div className="col-lg-6  ">
      <div className="details justify-content-evenly d-flex">
        <div className="one">
          <p className="t">Current rate</p>
          <p className="r">1.6346</p>
        </div>
        <div className="one">
          <p className="t">Last update</p>
          <p className="r">15 October 2024</p>
        </div>
      </div>
    </div>
  )

}


export default CurencyColumn;