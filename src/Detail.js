/* eslint-disable */

import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.css";

let 박스 = styled.div`
  padding: 20px;
`;

//$ 변수명 넣는문법
let 제목 = styled.h4`
  font-size: 25px;
  color: ${(props) => props.색상};
`;

function Detail(props) {
  let [alert, alert변경] = useState(true);
  let [inputData, inputData변경] = useState("");

  useEffect(() => {
    let 타이머 = setTimeout(() => {
      alert변경(false);
    }, 2000);
    console.log("dd");
    return () => {
      clearTimeout(타이머);
    };
  }, [alert]);
  // []가 빈칸일시 처음딱 한번만 실행하고 실행하지 않음
  //   alert라는 state가 변경 될때만 실행
  //금 Detail 방문시 2초 후에 UI 사라지게 해주세요~ 라고 코드를 짰습니다.

  // 근데 2초가 되기도 전에 Detail을 벗어나면 어떻게 될까요?

  // 지금은 별 문제없는 것 같지만 코드가 길어지거나 꼬이면

  // 남아있는 타이머 때문에 이상한 현상이 일어날 수 있습니다.

  // 그래서 컴포넌트가 사라질 때 타이머를 없애는 코드도 추가해주는게 좋습니다.
  // useEffect안에는 return + 함수를 추가하면

  // 컴포넌트가 사라질 때 특정 코드를 실행할 수 있다고 했습니다.

  // 거기에 clearTimeout을 추가한겁니다.

  let { id } = useParams();
  //histoty는 방문기록을 저장해놓는 object
  let 찾은상품 = props.shoes.find(function (상품) {
    return 상품.id == id;
  });
  let history = useHistory();

  return (
    <div className="container">
      <박스>
        <제목 className="red">Detail</제목>
      </박스>
      {inputData}
      {/* //input에 값이 변경 될때마다 inputData변경으로 바꿔줌// */}
      <input
        onChange={(e) => {
          inputData변경(e.target.value);
        }}
      />
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.push("/");
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
