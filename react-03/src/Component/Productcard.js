import React from "react";

function Productcard(props) {
    const data=props.pdtdata;
  return <div className="mt-3 mx-2">
    <div  className="card" style={{width:250}}>
  <img src={data.thumbnail} className="card-img-top" alt="..." style={{height:150}} />
  <div  className="card-body">
    <h5  className="card-title ">{data.title.substring(0,20)}</h5>
    <p  className="card-text " >{data.description.substring(0,50)}</p>
    <p className="card-text  fs-3 fw-semibold text-primary">${data.price}<span className="fs-5 text-success"> (-{data.discountPercentage}% off)</span></p>
    <p className="card-text bg-warning text-light d-inline-block fw-semibold rounded fs-6">{data.rating} ★</p>
   <div className="d-flex justify-content-end"><a href="#"  className="btn btn-info ">Buy Now</a></div> 
  </div>
</div>
  </div>;
}

export default Productcard;
