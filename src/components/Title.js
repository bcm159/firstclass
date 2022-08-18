import React, { useRef, useState } from 'react';

const Title = () => {
    const [title,setTitle] = useState('');
    const inputRef = useRef(null);
    const [totalbyte,setTotalbyte] = useState(0);
    

    const onChangeInput = (e) =>{
        setTitle(e.target.value);
        
    }
    const text_val = title;
    const text_len = text_val.length; //입력한 문자수
    let totalByte = 0;
    
    for(let i=0; i<text_len; i++){
        const each_char = text_val.charAt(i);
        const uni_char = escape(each_char); //유니코드 형식으로 변환
        if(uni_char.length>4){
            // 한글 : 2Byte
            totalByte += 2;
        }else{
            // 영문,숫자,특수문자 : 1Byte
            totalByte += 1;
        }
    }
    

    const onClickCalcButton = () => {
        // input 값 초기화 및 포커싱
        setTitle('');
        inputRef.current.focus();
    }
    return (
        <div className='Title'>
            
            <input 
                type="title"
                value={title}
                ref={inputRef}
                placeholder="제목을 적어주세요."
                className='cost-inputbox-ttl'
                onChange={onChangeInput}
                onKeyUp="fn_checkByte(this)"
            />
            <button
                type="submit"
                className='estimate-cost-tlt'
                onClick={onClickCalcButton}
            >
                초기화
            </button>
            <span className='totalB'>{totalByte}</span>
        </div>
    );
};

export default Title;