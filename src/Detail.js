/* eslint-disable */

import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

function Detail(props){
    
    let { id } = useParams();
    //histoty는 방문기록을 저장해놓는 object
    let history = useHistory();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].title}</p>
          <button className="btn btn-danger">주문하기</button> 
          <button className="btn btn-danger" onClick={() => { history.push('/')}}>뒤로가기</button> 
        </div>
      </div>
  </div>  
  )
};

export default Detail ;