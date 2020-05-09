import React, { useEffect, useState } from 'react';
import './Header.css'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Input } from 'antd'
const HeaderPage = () => {
    const [formData, setFormData] = useState({
        productData: {
            value: '',
            error: '',
            rules: [
                {name: 'required', message: 'Пожалуйста, сперва введите что-нибудь, например: '}
            ],
            isValid: false,
        }
    });
    const [dataQuery, setDataQuery] = useState('');
    const [formError, setFormError] = useState(true);



    const handleSumbit = e => {
        e.preventDefault();
        console.log("there");
        for (let key in formData) {
            let obj = formData[key].isValid;
            console.log(obj)
            if (obj === false) setFormError(true)
        }
    }
    const inputChangeHandler = e => {
        setDataQuery(e.target.value);
       
    }
    return (
        <div className="container hero header">
            <div className="hero-header">
                <div className="text-center main-input">
                    <form onSubmit = { handleSumbit }>
                        <div className="input-group input-group-lg text-center search">
                                <Input className="form-control"
                                       name = "productData" 
                                       type="text"
                                       onChange = { inputChangeHandler }
                                       placeholder="Enter product as examples below"/>
                            <div className="input-group-append">
                                    <Link to={ '/products/' + dataQuery }>
                                            <button className="btn btn-primary go" type="submit">
                                            Go!
                                        </button>
                                    </Link>   
                            </div>
                        </div>
                        <div className="form-input-error">
                                { !formData['productData'].isValid ? formData['productData'].error : '' }
                        </div>
                    </form>
                </div>
                <div className="main-samples">
                    <p>Лучший телефон за 100000 тг</p>
                    <p>Ноутбук для игр</p>
                    <p>Лучший компьютер для работы за 250000</p>
                </div>
            </div>
        </div>
    )
}
export default HeaderPage;
