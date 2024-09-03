import React, {useState} from 'react';

// function Counter(){
const Counter=()=>{
    // const [변수, set함수] = useState(초기값);
    const [count, setCount] = useState(0);

    const onChangeCount=(e)=>{
        setCount(count+1);
    }

    return(
        <div>
            <p>총 {count}번 클릭 했습니다.</p>
            {/* <button onClick={()=>setCount(count+1)}>클릭</button> */}
            <button onClick={onChangeCount}>클릭</button>
        </div>
    );
}

export default Counter;