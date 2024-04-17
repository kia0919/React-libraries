import React, { useState } from 'react'
import { create } from 'zustand';

//! zustand 패키지(라이브러리):
// - react에서 사용할 수 있는 상태 관리 라이브러리 중 하나
// - 상태 관리 라이브러리 중 Redux 라이브러리가 현재 가장 많이 사용된다.
// - Redux의 고질적인 문제점으로 복잡한 코드 구조와 높은 학습 곡선을 요구
// - Zustand는 단순한 코드 구조와 학습 곡선이 매우 낮음 - useState 사용 수준의 학습 곡선을 요구
// - Redux, Mobx와 같은 타 상태관리 라이브러리들에 비해 번들의 크기가 작음 - 빌드 할 때 패키징 속도 향상/ 빌드 후에 번들의 크기가 작아짐

//! - zustand를 이용한 글로벌 상태 선언 방법
// 1. zustand의 create 함수를 사용하여 store를 생성
// store : 상태와 상태 관리 로직을 하나로 묶은 객체 
// store 생성하는 create 함수의 반환 데이터는 훅 함수를 반환 (use라는 이름의 함수명으로 받아야 함)

//! - create 함수의 매개변수로 set 인자를 받는 콜백 함수를 전달해야 함.
// - 매개변수로 전달한 콜백 함수는 store 객체를 반환해야 함.
// - store 객체는 상태, store 갹체를 변경하는 함수가 포함됨

//! - typescript에서 zustand의 create 함수를 사용할때는 create 함수의 제너릭으로 store의 타입을 지정해야 함
interface Store {
    zNormal : number;
    // setZNormal은 함수이므로 타입또함 함수로 반환받는다
    // , zNormal의 상태를 변경하기 위해 매개변수 zNomal를 받아온다.
    setZNormal : (zNormal: number) => void;
    increaseZNormal: () => void;
    decreaseZNormal: () => void;
}

//! create 함수의 콜백함수가 받는 set 인자는 상태 변경을 위한 함수
const useStore = create<Store>((set) => 
    ({
        zNormal : 0,
        // set 함수는 매개변수로 현재 상태를 인자로 받는 콜백 함수를 전달해야 함
        // set 함수의 매개변수로 전달된 함수는 상태객체(store)를 반환해야 함
        setZNormal: (zNormal: number) => set(state => ({...state, zNormal })),
        // state.zNoraml로 원래 상태의 매개변수를 가져옴
        // state로 콜백함수 전달, zNormal: 객체(state). 에서 원래상태인 zNormal을 불러옴, increaseZNormal는 +1 작업이므로, +1.
        increaseZNormal: () => set(state => ({ ...state, zNormal: state.zNormal +1 })),
        // state로 콜백함수 전달, zNormal: 객체(state). 에서 원래상태인 zNormal을 불러옴, decreaseZNormal +1 작업이므로, -1.
        decreaseZNormal: () => set(state => ({ ...state, zNormal: state.zNormal -1 }))

    }));

export default function ZustandLibrary() {
    
    // useState를 이용한 상태 선언 방법
    const [normal, setNormal] = useState<number>(0);

    const changeNormal = (normal: number) => {
        setNormal(normal);  //함수를 통해 변경작업 해줌
    }

    const increaseNormal = () => {
        setNormal(normal + 1);
    }

    const decreaseNormal = () => {
        setNormal(normal - 1);
    }

    // zustand로 선언한 상태 사용
    // const {상태, 상태변경함수} = useStoreZustand 훅 함수(); 호출
    const { zNormal, setZNormal, increaseZNormal, decreaseZNormal } = useStore();

    return (
        <div>
            <div>
                <h4>useState 방식 : {normal}</h4>
                <button onClick={decreaseNormal}>-</button>
                <button onClick={increaseNormal}>+</button>
            </div>
            <div>
                <h4>zustand 방식 : {zNormal}</h4>
                <button onClick={decreaseZNormal}>-</button>
                <button onClick={increaseZNormal}>+</button>
            </div>
        </div>
    )
}
