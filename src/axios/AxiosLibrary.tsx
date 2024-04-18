import axios from 'axios'
import { error, time } from 'console';
import React from 'react'

//! axios 패키지(라이브러리) :
// - javascript에서 사용하는 HTTP 클라이언트 라이브러리
// - 웹 브라우저, Node.js 기반의 환경에서 동작함
// - Ajax, Fetch API 보다 간편함
// - axios api는 기본적으로 Promise로 작업을 수행

//* - npm i axios
// AxiosLibrary(React)함수형 컴포넌트 정의
export default function AxiosLibrary() {
    // GET_URL 상수에 api 엔드포인트 URL 저장
    const GET_URL = 'http://localhost:4100/api/v1/user/email@email.com';

    //! axios 객체 :
    //* - axios 객체는 http method에 해당하는 함수들을 포함하고 있음
    //* - 각각의 http method 함수는 URL, option을 매개변수로 받음 
    //* - 각각의 http method 함수는 결과를 promise 형태로 반환

    axios
    .get(GET_URL)
    //* 각각의 http method 함수는 결과는 then으로 받을땐 response객체를 
    //* 매개변수로 받는 콜백함수를 전달
    // axios가 get요청을 보내고, .then()은 요청이 성공한 경우의 콜백함수 전달
    .then(response => {
        //* response 객체는 status, header, data(body)를 포함하고 있음
        //* then 작업은 status code가 400, 500번대가 아닌 response를 받아옴
        console.log(response);
    })
    // .catch()은 요청이 실패했을 경우 콜백함수 정의
    .catch(error => {
        //* 해당 request에 대해서 request가 실패하거나 status code가 
        //* 400, 500번대이면 catch로 AxiosErrod 객체를 받아옴
        //* response가 존재하는 에러는 error객체에 response가 포함되어 있음
        console.log(error);
    })

    //* option 매개변수
    //* - request의 header를 조작할 때 사용됨

    // get요청을 보내고, 옵션객체 headers인 Authorization 헤더에 Bearer 토큰을 설정
    axios.get(GET_URL, {headers: { 'Authorization' : 'Bearer 12423145' },
    // params 요청에 쿼리 파라미터를 추가(서버로 데이터 전달, 필터링 등 작업 수행 가능)
    params: {time: 1234} });

    //! request body 매개변수 :
    //* - post, patch, put 함수는 두번째 매개변수로 request body 데이터를 전달함

    // PATCH 요청을 보냄, PATCH_URL에는 닉네임을 업데이트할 api를 저장
    const PATCH_URL = 'http://localhost:4100/api/v1/user/nickname'
    // 객체 형태의 데이터를 전송하여 이메일, 닉네임을 업데이트한다.
    axios.patch(PATCH_URL, { email: 'email@email.com', nickname: '코스피'  })

    return <div>AxiosLibrary</div>

}
