import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'

//! react-router 패키지(라이브러리) :
// - react의 SPA(Signle Page Application)에서 라우팅을 구현하기 위한 라이브러리
// - 웹 페이지에서 다양한 뷰와 경로를 관리할 수 있도록 도와중
// - 웹 애플리케이션 내에서 URL 이동이 있을 때 웹 페이지를 새로고침 하지 않도록 함
// - 웹 애플리케이션 내에서 네이비게이션 역학을 수행

//* npm i react-router react-router-dom

// !- root 경로에 있는 index.tsx의 root.render()안에 포함되어 있는 <App /> 컴포넌트를 <BrowserRouter>컴포넌트로 묶어야 함
// <BrowserRouter> : URL을 사용하여 브라우저 주소 표시줄에 현재위치를 저장하고 탐색할 수 있도록 하는 컴포넌트

//! - 특정 URL 패턴에 대해서 컴포넌트를 각각 다르게 랜더링하고자 한다면 App.tsx에 <Routes> 컴포넌트와 <Route>컴포넌트를 이용하여 경로에 따른 컴포넌트를 지정

//! <Routes> :
// - <Route> 컴포넌트로 URL에 따른 컴포넌트 랜더링을 할 수 있도록 하는 컴포넌트

//! <Route> :
// - URL 패턴에 따라서 랜더링 하고자 하는 컴포넌트를 지정하는 컴포넌트
// - path 속성 : URL 패턴 지정
// - element 속성: 랜더링할 컴포넌트 지정
// - index 속성: 현재 패턴의 기본 라우터로 지정

// http://localhost:3000
// http://localhost:3000/router

// ReactRouterLibrary함수 컴포넌트 정의
export default function ReactRouterLibrary() {

  //! - a 요소로 페이지 전환을 하게 되면 새로운 요청을 보내게 되어 반드시
  // 페이지가 새로고침 된다.
  // - 페이지가 새로고쳐지면 상태 유지가 안됨

  //! <Link> :
  // - 사용자가 해당 웹 애플리케이션 내에서 다른 페이지로 이동할 수 있도록 하는 컴포넌트
  // - a 요소와 href로 페이지 전환을 하게되면 새로운 페이지로 전향되는 반면 <Link>컴포넌트는
  //  새로고침을 하지 않고 URL만 변경한다.
  // - 다른 웹 애플리케이션으로 이동하는 작업은 <Link>컴포넌트로 수행하지 않음, to속성이 필수
  //! - 문제점: 해당 <Link>컴포넌트를 클릭했을 때 다른 작업을 같이 수행하고자 한다면 그 작업이 정상적으로 수행되지 않음
  // - 페이지 이동 전에 특정 작업 결과에 따라 이동하고 싶으면 <Link>컴포넌트를 사용하지 않음

  // return 반환에서 onClick으로 onLinkClick함수가 정의된 버튼 클릭 시 '클릭!' 표시
  const onLinkClick = () => {
    alert('클릭!');
  }

  // useNavigate() :
  // - Navigator 함수를 반환하는 훅 함수
  // - Navigator 함수는 특정 조건에 따라서 URL을 변경하고자 할 때 사용할 수 있음

  // useNavigate()함수 호출, navigator선언
  const navigator = useNavigate();
  // 상태함수, 상태변경함수 지정, useState로 타입과 초기값 설정
  const [count, setCount] = useState<number>(0);
  // onButtonClick 함수 버튼 클릭할 때마다 count가 증가, count가 10이 되면 /zustand페이지로 이동
  const onButtonClick = () => {
    if (count===10) navigator('/zustand');
    setCount(count +1);
  }

  // 반환 값
  return (
    <div>
      ReactRouterLibrary
      {/* <a href="httl://localhost:3000/zustand">Zustand로!</a> */}
      <Link to='/zustand' onClick={onLinkClick}>Zustand로!</Link>
      <div>
        <h4>{count}</h4>
        <button onClick={onButtonClick}>버튼</button>
      </div>
    </div>
  )
}

// http://localhost:3000/page1
// http://localhost:3000/router/page1

// ReactRouterPage1함수 컴포넌트 정의
export function ReactRouterPage1() {

  //! useParams : 
  // - <Route> 컴포넌트의 path 속성에 매칭되는 동적 URL 패턴에 따른 데이터를 받는 훅 함수
  // - 해당 URL 경로에 대한 모든 동적 URL 패턴을 name, value 형태로 받아옴

  //* value 정의를 하지 않아 화면에 출력이 안됨
  const { value } = useParams();

  return <h1>페이지 1: { value }</h1>
}

// http://localhost:3000/page2
// http://localhost:3000/router/page2
export function ReactRouterPage2() {
  //! useSearchPparams:
  // - 현재 URL에 있는 쿼리 문자열을 읽을 때 사용하는 훅 함수
  // - 쿼리 문자열에 대한 배열을 반환 

  // 
  const [queryString] = useSearchParams();
  const time = queryString.get('time');

  return <h1>페이지 2:{time}</h1>
}