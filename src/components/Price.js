import React, { useRef, useState } from 'react';

const Price = () => {
    const [cost,setCost] = useState('');
    // const [defpricefee,setDefpricefee] = useState('');
    const inputRef = useRef(null);

    

    const onChangeInput = (e) =>{
        setCost(e.target.value);
    }

    const dutyprice = parseFloat((cost / 1.19).toFixed(2));
    const dutypricefee = parseFloat((dutyprice * 0.1).toFixed(2));
    const realprice = parseFloat(dutyprice + dutypricefee).toFixed(2);
    const defpricefee = (cost -realprice).toFixed(2);


    const onClickCalcButton = () => {
        // input 값 초기화 및 포커싱
        setCost('');
        inputRef.current.focus();
    }
    return (
        <div className='Price'>
            <input
                type="text"
                value={cost}
                ref={inputRef}
                placeholder="원가를 적어주세요"
                className='cost-inputbox-inp'
                onChange={onChangeInput}
                
            />
            <button
                type="submit"
                className='estimate-cost-calc'
                onClick={onClickCalcButton}
            >
                버튼
            </button>
            <div className='ind_Price'>
                <p>원가 : {cost}€</p>
                <p>면세가 : {dutyprice}€</p>
                <p>면세쇼핑 수수료 : {dutypricefee}€</p>
                <h4>실구매가격 : {realprice}€</h4>
                <p>차액 : {defpricefee}€</p>
            </div>
            
        </div>
    );
};

export default Price;