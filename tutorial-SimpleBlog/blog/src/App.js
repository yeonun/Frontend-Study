/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import React, {useState} from 'react';

function App() {
  let posts = "시작하기전 프로젝트 세팅하기";
  let [title, setTitle] = useState(['시작하기전 프로젝트 세팅하기','state에 데이터를 저장하기', '저녁 메뉴를 고르는 방법']);
  let postTitleStyle = { color: " black ", fontSize: "25px" };

  let [modalVisible, setModalVisible] = useState(false);
  function modalClick(){
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
    setLikey(likey+1);
  }

  return (
    <div className="App">
      <div className="Black-nav">
        <div> yeonun의 연습장</div>
      </div>
      <button onClick = { setTitleClick }> 제목을 바꾸는 버튼 </button>
      <button onClick = { arrangeClick }> 글 정렬 하는 버튼 </button>
      <div className="postList" >
        <h3 style = { postTitleStyle }> { title[0] }
        <span onClick={ likeUpClick }> 👍 </span> {likey}
        </h3>
        <p> 4월 27일 작성 </p>
        <hr/>
      </div>
      <div className="postList">
        <h3 style = { postTitleStyle }> { title[1] } </h3>
        <p> 4월 28일 작성 </p>
        <hr/>
      </div>
      <div className="postList">
        <h3 style = { postTitleStyle } onClick={modalClick}> { title[2] } </h3>
        <p> 4월 29일 작성 </p>
        <hr/>
      </div>
      <div>
        {
          modalVisible === true
          ? <Modal />
          : null
        }
      </div>
    </div>
  );
}

function Modal(){
  return(
    <div className="modal">
      <h2> 제목 </h2>
      <p> 날짜 </p>
      <p> 상세 내용 </p>
    </div>

  )
}

export default App;
