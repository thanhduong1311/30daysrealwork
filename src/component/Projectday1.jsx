import React from 'react'
import "./assets/Projectday1.css"

export default function Projectday1() {
    return (

    <>
    <div className="main">
    <div className="card">
            <div className="card-icon">
            <i className="far fa-heart"></i>
            <i className="fas fa-shopping-cart"></i>
            </div>
            <div className="card-img">
                <img className="img-shoes1" src="https://www.nodemy.vn/projects/html-css-js/product-card/Nike%20Zoom%20KD%2012.png" alt=""/>
            </div>
            <div className="card-title">
                Nike-Pro-Plus
            </div>
            <div className="card-price">
                3000$
            </div>
            <div className="card-size">
               <h3>Size:</h3>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
            </div>
            <div className="card-color">
            <h3>Color:</h3>
                <span className="red"></span>
                <span className="green"></span>
                <span className="blue"></span>

            </div>
            <div className="card-action">
                <button className="buy-btn">Buy now</button>
                <button className="add-btn">Add Cart</button>
            </div>
        </div>
  
    </div>
    </>
    
     
    
 )
}
