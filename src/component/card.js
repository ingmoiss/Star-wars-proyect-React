import React from 'react';

export const Tarjeta = () => {


    return (
        <div className="card" style={{width: "18rem"}}>
            <img src="https://fibrex.com.co/img/400X200.gif" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title  </h5>
                    <p className="card-text">
                    Gender:  <br />
                    Hair Color: <br />  
                    Eye-Color:
                    </p>
                
                   
                <a href="#" className="btn btn-outline-primary  border-5">Learn more!</a>
                <button type="button" className="btn btn-outline-warning float-right" style={{fontSize:"2em", maxHeight:"1.2em",display:"flex",alignItems:"center"}}>   &#9825;     </button>
                </div>
        </div>
    )
}