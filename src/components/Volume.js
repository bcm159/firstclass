import React, { useRef, useState } from 'react';

const Volume = () => {
    const [volume,setVolume] = useState('');
    const inputRef = useRef(null);

    const onChangeInput = (e) =>{
        setVolume(e.target.value);
    }
    

    let find = volume.indexOf(';');
    let final = volume.length;

    let vol = volume.substring(0,find);
    vol = vol.replace(/cm|(\s*)/g,"");
    let vol_ar = [];
    vol_ar = vol.split('x');
    let result = 1;
    for(let num of vol_ar){
        if(num != 'x'){
            result = result * parseFloat(num);
        }
    }


    let gram = volume.substring(find + 1,final);
    gram = parseInt(gram.replace(/[^0-9]/gi,""));
    

    const onClickCalcButton = () => {
        // input 값 초기화 및 포커싱
        setVolume('');
        inputRef.current.focus();
    }
    

    return (
        <div className='volume'>
            <input
                type="text"
                value={volume}
                ref={inputRef}
                placeholder="부피를 적어주세요."
                className='cost-inputbox-inp'
                onChange={onChangeInput}
            />
            
            <button
                type="submit"
                className='estimate-cost-calc'
                onClick={onClickCalcButton}
            >
                초기화
            </button>
            <p>vol : {vol}</p>
            <p>gram : {gram}</p>
            <p>부피 : {result}</p>
            
        </div>
    );
};

export default Volume;