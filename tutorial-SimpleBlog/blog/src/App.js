/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  let posts = "시작하기전 프로젝트 세팅하기";
  let [title, setTitle] = useState([
    "시작하기전 프로젝트 세팅하기",
    "state에 데이터를 저장하기",
    "저녁 메뉴를 고르는 방법",
  ]);
  let [date, setDate] = useState(["4월 27일", "4월 28일", "4월 29일"]);
  let [inputData, setInputData] = useState('');

  let postTitleStyle = { color: " black ", fontSize: "25px" };

  let[clickTitleNum,setClickTitleNum] = useState(0);

  let [modalVisible, setModalVisible] = useState(false);
  function modalClick() {
    setModalVisible(!modalVisible);
  }

  let [likey, setLikey] = useState(0);

  function setTitleClick() {
    var newTitle = [...title];
    newTitle[2] = "점심 메뉴를 고르는 방법";
    setTitle(newTitle);
  }

  function arrangeClick() {
    var arrangeTitle = [...title];
    arrangeTitle = arrangeTitle.sort();
    setTitle(arrangeTitle);
  }

  function likeUpClick() {
    setLikey(likey + 1);
  }

  return (
    <div className="App">
      <div className="Black-nav">
        <div> yeonun의 연습장</div>
      </div>
      <button onClick={setTitleClick}> 제목을 바꾸는 버튼 </button>
      <button onClick={arrangeClick}> 글 정렬 하는 버튼 </button>

      {title.map(function (titleNo, i) {
        return (
          <div className="Post-List" key={i}>
            <h3 style={postTitleStyle} onClick={ ()=>{setClickTitleNum(i)}}>
              {titleNo}
              <span onClick={likeUpClick} > 👍 </span> {likey}
            </h3>
            <p> 4월 29일 </p>
            <hr />
          </div>
        );
      })}
      {/* {inputData}<input onChange={(e)=>{ setInputData(e.target.value) }} ></input> */}

      <div className="Write-Area">
        <input onChange={(e)=>{ setInputData(e.target.value) }}></input>
        <button onClick={ ()=>{
          let addTitle = [...title];
          addTitle.unshift(inputData);
          //아래에 넣고싶으면 push, 위에 넣고싶으면 unshift
          setTitle(addTitle)
        }}> 저장 </button>
      </div>

      <button onClick={modalClick} > 모달 열기 </button>
      <div>{modalVisible === true ? <Modal title={title} clickTitleNum={clickTitleNum} date={date}/> : null}</div>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2> {props.title[props.clickTitleNum]} </h2>
      <p> 작성일 </p>
      <p> 상세 내용 </p>
    </div>
  );
}

export default App;
