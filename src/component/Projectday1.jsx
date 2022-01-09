import React from 'react'
import "./assets/Projectday1.css"

export default function Projectday1() {
    return (

    <>
    <div className="main">
    <div class="card">
            <div class="card-icon">
                <i class="ti-heart"></i>
                <i class="ti-shopping-cart"></i>
            </div>
            <div class="card-img">
                <img class="img-shoes1" src="https://www.nodemy.vn/projects/html-css-js/product-card/Nike%20Zoom%20KD%2012.png" alt=""/>
            </div>
            <div class="card-title">
                Nike-Pro-Plus
            </div>
            <div class="card-price">
                3000$
            </div>
            <div class="card-size">
               <h3>Size:</h3>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
            </div>
            <div class="card-color">
            <h3>Color:</h3>
                <span class="red"></span>
                <span class="green"></span>
                <span class="blue"></span>

            </div>
            <div class="card-action">
                <button class="buy-btn">Buy now</button>
                <button class="add-btn">Add Cart</button>
            </div>
        </div>
  
    </div>
    </>
    
     
    
 )
}
