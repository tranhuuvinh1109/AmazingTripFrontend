import React from 'react'
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import './Form.css'



function Form() {
        const [name, setName] = useState("");
        const [img, setImg] = useState("");
        const [map, setMap] = useState("");
        const [descri, setDescri] = useState("");

        async function addAddress(){
                console.warn(name)
                const formData = new FormData();
                formData.append('name', name);
                formData.append('descri', descri);
                formData.append('map', map);
                formData.append('img', img);
                console.log(formData)
        
                let results = await fetch("http://localhost:8000/api/create", {
                        method: "POST",
                        body: formData
                })
                alert('Tạo địa điểm thành công');

        }
       
  return (
          <div> <div className="main-content">
                  <div className="container">
                          <div className="image">
                                  <h1>
                                          Cùng gia nhập<br />
                                          đại gia đình <span className="nameWeb">AmazingTrip</span>
                                  </h1>
                          </div>
                          <div className="content">
                                  <h1>Thêm địa điểm của bạn</h1>
                                  <form  >

                                          <div>
                                                  <label className="">Địa điểm của bạn là?</label>
                                                  <input onChange={(e) => setName(e.target.value)}  type="text" className="inputForm" placeholder="Nhập tên địa điểm" />
                                          </div>
                                          <div>
                                                  <label>Địa điểm của bạn ở đâu?</label>
                                                  <input onChange={(e) => setMap(e.target.value)} className="inputForm" type="text" placeholder="Nhập vị trí" />
                                          </div>
                                          <div>
                                                  <label>Địa điểm của bạn có gì ?</label>
                                                  <textarea onChange={(e) => setDescri(e.target.value)}  className="inputForm" id="" cols="10" rows="3" placeholder="Nhập mô tả địa điểm"></textarea>
                                          </div>
                                          <div>
                                                  <label>Hình ảnh về địa điểm của bạn</label>
                                                  <input onChange={(e) => setImg(e.target.value)} type="file" className=" uploadFile" />
                                          </div>
                                          <button onClick = {addAddress} type="submit" className="submitBtn">Tham gia</button>
                                  </form>
                          </div>
                  </div>
          </div></div>
  )
}

export default Form;