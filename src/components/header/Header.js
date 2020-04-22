import React, { useEffect, useState } from 'react';
import './Header.css'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
const Header = () => {
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
        

        // if (!formError) {
        //     const host = process.env.REACT_APP_HOST + 'users/auth'
        //     fetch(host)
        //     .then((response) => {
        //         if (!response.ok) throw new Error("err");
        //         return response.json()
        //     })
        //     .then(res => {
    
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
        // }
    }
    const inputChangeHandler = e => {
        setDataQuery(e.target.value);
        // const name = e.target.name;
        // const value = e.target.value;
        // const updatedControl = {...formData[name]};
        // updatedControl.value = value;
        // console.log(updatedControl)
        // console.log(name + " " + value);

        // for (let rule of updatedControl.rules) {
        //     switch(rule.name) {
        //         case 'required': 
        //             updatedControl.isValid = !!updatedControl.value;
        //             break;
        //         case 'minLength':
        //             updatedControl.isValid = updatedControl.value && updatedControl.value.length >= 6;
        //             break;
        //         case 'match':
        //             updatedControl.isValid = updatedControl.value && updatedControl.value == formData.password.value
        //             break;
        //    } 
        //    if (!updatedControl.isValid) {
        //         updatedControl.error = rule.message;
        //         break;
        //    }
        // }

        // setFormData({
        //     ...formData,
        //     [name]: updatedControl
        // })
    }
    return (
        <div className="container hero">
            <div className="hero-header">
                <div className="text-center main-input">
                    <form onSubmit = { handleSumbit }>
                        <div className="input-group input-group-lg text-center search">
                                <input className="form-control"
                                       name = "productData" 
                                       type="text"
                                       onChange = { inputChangeHandler }
                                       placeholder="Enter product as examples below"/>
                            <div className="input-group-append">
                                    <button className="btn btn-primary" type="submit">
                                        <Link to={ '/products/' + dataQuery }>Go!</Link>
                            </button>
                            </div>
                        </div>
                        <div className="form-input-error">
                                    { !formData['productData'].isValid ? formData['productData'].error : '' }
                        </div>
                    </form>
                </div>
                <div className="main-samples">
                    <p>Лучший телефон за 100 000 тг</p>
                    <p>Игровой ноутбук</p>
                    <p>Игровой ноутбук asdas</p>

                </div>
            </div>
        </div>
    )
}
export default Header;
