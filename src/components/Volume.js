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

    result = result / 6000;


    let gram = volume.substring(find + 1,final);
    if(gram.includes("k") == true || gram.includes("K") == true){
        gram = (parseInt(gram.replace(/[^0-9]/gi,"")));
        
    }else{
        gram = parseInt(gram.replace(/[^0-9]/gi,""))/1000;
    }

    let result_v = 0
    if(result > gram){
        result_v = result;     
    } else{
        result_v = gram;
    }

    result_v = (Math.ceil((result_v)*2)/2) + 2

     
    

    const onClickCalcButton = () => {
        // input 값 초기화 및 포커싱
        setVolume('');
        inputRef.current.focus();
    }
    
    const volume_price = [
        {"volume": 1, "price": 14860},
        {"volume": 1.5, "price": 17720},
        {"volume": 2, "price": 20580},
        {"volume": 2.5, "price": 23440},
        {"volume": 3, "price": 26300},
        {"volume": 3.5, "price": 29160},
        {"volume": 4, "price": 32020},
        {"volume": 4.5, "price": 34880},
        {"volume": 5, "price": 37740},
        {"volume": 5.5, "price": 40600},
        {"volume": 6, "price": 43460},
        {"volume": 6.5, "price": 46320},
        {"volume": 7, "price": 49180},
        {"volume": 7.5, "price": 52040},
        {"volume": 8, "price": 54900},
        {"volume": 8.5, "price": 57760},
        {"volume": 9, "price": 60620},
        {"volume": 9.5, "price": 63480},
        {"volume": 10, "price": 66340},
        {"volume": 10.5, "price": 69200},
        {"volume": 11, "price": 72060},
        {"volume": 11.5, "price": 74920},
        {"volume": 12, "price": 77780},
        {"volume": 12.5, "price": 80640},
        {"volume": 13, "price": 83500},
        {"volume": 13.5, "price": 86360},
        {"volume": 14, "price": 89220},
        {"volume": 14.5, "price": 92080},
        {"volume": 15, "price": 94940},
        {"volume": 15.5, "price": 97800},
        {"volume": 16, "price": 100660},
        {"volume": 16.5, "price": 103520},
        {"volume": 17, "price": 106380},
        {"volume": 17.5, "price": 109240},
        {"volume": 18, "price": 112100},
        {"volume": 18.5, "price": 114960},
        {"volume": 19, "price": 117820},
        {"volume": 19.5, "price": 120680},
        {"volume": 20, "price": 123540},
        {"volume": 20.5, "price": 126400},
        {"volume": 21, "price": 129260},
        {"volume": 21.5, "price": 132120},
        {"volume": 22, "price": 134980},
        {"volume": 22.5, "price": 137840},
        {"volume": 23, "price": 140700},
        {"volume": 23.5, "price": 143560},
        {"volume": 24, "price": 146420},
        {"volume": 24.5, "price": 149280},
        {"volume": 25, "price": 152140},
        {"volume": 25.5, "price": 155000},
        {"volume": 26, "price": 157860},
        {"volume": 26.5, "price": 160720},
        {"volume": 27, "price": 163580},
        {"volume": 27.5, "price": 166440},
        {"volume": 28, "price": 169300},
        {"volume": 28.5, "price": 172160},
        {"volume": 29, "price": 175020},
        {"volume": 29.5, "price": 177880},
        {"volume": 30, "price": 180740},
        {"volume": 30.5, "price": 183600},
        {"volume": 31, "price": 186460},
        {"volume": 31.5, "price": 189320},
        {"volume": 32, "price": 192180},
        {"volume": 32.5, "price": 195040},
        {"volume": 33, "price": 197900},
        {"volume": 33.5, "price": 200760},
        {"volume": 34, "price": 203620},
        {"volume": 34.5, "price": 206480},
        {"volume": 35, "price": 209340},
        {"volume": 35.5, "price": 212200},
        {"volume": 36, "price": 215060},
        {"volume": 36.5, "price": 217920},
        {"volume": 37, "price": 220780},
        {"volume": 37.5, "price": 223640},
        {"volume": 38, "price": 226500},
        {"volume": 38.5, "price": 229360},
        {"volume": 39, "price": 232220},
        {"volume": 39.5, "price": 235080},
        {"volume": 40, "price": 237940},
        {"volume": 40.5, "price": 240800},
        {"volume": 41, "price": 243660},
        {"volume": 41.5, "price": 246520},
        {"volume": 42, "price": 249380},
        {"volume": 42.5, "price": 252240},
        {"volume": 43, "price": 255100},
        {"volume": 43.5, "price": 257960},
        {"volume": 44, "price": 260820},
        {"volume": 44.5, "price": 263680},
        {"volume": 45, "price": 266540},
        {"volume": 45.5, "price": 269400},
        {"volume": 46, "price": 272260},
        {"volume": 46.5, "price": 275120},
        {"volume": 47, "price": 277980},
        {"volume": 47.5, "price": 280840},
        {"volume": 48, "price": 283700},
        {"volume": 48.5, "price": 286560},
        {"volume": 49, "price": 289420},
        {"volume": 49.5, "price": 292280},
        {"volume": 50, "price": 295140},
        {"volume": 50.5, "price": 298000},
        {"volume": 51, "price": 300860},
        {"volume": 51.5, "price": 303720},
        {"volume": 52, "price": 306580},
        {"volume": 52.5, "price": 309440},
        {"volume": 53, "price": 312300},
        {"volume": 53.5, "price": 315160},
        {"volume": 54, "price": 318020},
        {"volume": 54.5, "price": 320880},
        {"volume": 55, "price": 323740},
        {"volume": 55.5, "price": 326600},
        {"volume": 56, "price": 329460},
        {"volume": 56.5, "price": 332320},
        {"volume": 57, "price": 335180},
        {"volume": 57.5, "price": 338040},
        {"volume": 58, "price": 340900},
        {"volume": 58.5, "price": 343760},
        {"volume": 59, "price": 346620},
        {"volume": 59.5, "price": 349480},
        {"volume": 60, "price": 352340}]
  
        let result_vol_price = 0;
       for(let i of volume_price){
        if(i['volume'] == result_v){
            result_vol_price = i['price'];
        }
       }
       let result_vol_price_string = result_vol_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        const [cost,setCost] = useState('');

        const onChangeInputprice = (e) =>{
            setCost(e.target.value);
        }

        const dutyprice = parseFloat((cost / 1.19).toFixed(2));
        const dutypricefee = parseFloat((dutyprice * 0.09).toFixed(2));
        const realprice = parseFloat(dutyprice + dutypricefee).toFixed(2);
        const defpricefee = (cost -realprice).toFixed(2);


        const onClickpriceButton = () => {
            // input 값 초기화 및 포커싱
            setCost('');
            inputRef.current.focus();
        }

        let exchange_price = realprice * 1370;
        let exchange_price_string = exchange_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        let last_price = result_vol_price + exchange_price;
        // 숫자 , 추가하기
        last_price = last_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return (
        
        <div className='volume'>
            <input
                type="text"
                value={cost}
                ref={inputRef}
                placeholder="원가를 적어주세요"
                className='cost-inputbox-inp'
                onChange={onChangeInputprice}
                
            />
            <button
                type="submit"
                className='estimate-cost-calc'
                onClick={onClickpriceButton}
            >
                버튼
            </button>
            <div className='ind_Price'>
                <p>원가 : {cost}€</p>
                <p>면세가 : {dutyprice}€</p>
                <p>면세쇼핑 수수료 : {dutypricefee}€</p>
                <h4>실구매가격 : {realprice}€</h4>
                <p>원화 : {exchange_price_string}원</p>
            </div>
            
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
            <div className='ind_Volume'>
                <p>vol : {vol}</p>
                <p>gram : {gram}</p>
                <p>부피 : {result}</p>
                <p className='checkvol'>최종무게(+2) : {result_v}</p>
                <p>무게 비용 : {result_vol_price_string}</p>
            </div>
            <h4>배송비 + 원가 : {last_price}</h4>
            
        </div>
    );
};

export default Volume;