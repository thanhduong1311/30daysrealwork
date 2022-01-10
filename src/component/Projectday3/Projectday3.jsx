import React from 'react'
import "./asset/Projectday3.css"
export default function Projectday3() {
    return (
        <div className="Projectday3">
               <div className="modal__open-btn">
                   Open Modal
               </div>
           <div className="modal ">
               <div className="modal__container">
                      <div className="modal__container-header">
                          <span className="modal__container-header-name">Welcome to Nodemy</span>
                          <span className="close-icon">
                          <i class="fas fa-times"></i>
                          </span>
                      </div>
                      <div className="modal__container-body">
                          <div className="modal__container-body-content">
                              <h4 className="modal__container-body-content-header">Modal</h4>
                              <p className="modal__container-body-content-body">Đây là phần body của modal</p>
                          </div>
                          <div className="modal__container-body-footer">
                              <button className="modal__container-body-footer-btn">
                                    Close
                              </button>
                          </div>
                      </div>
               </div>
           </div>
        

        </div>
    )
}
