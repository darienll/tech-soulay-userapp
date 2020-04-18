import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="container hero">
            <div className="hero-header">
                <div className="text-center main-input">
                    <form>
                        <div className="input-group input-group-lg text-center">
                            <input className="form-control" type="text" required="" placeholder="Enter product as examples below"/>
                            <div className="input-group-append"><button className="btn btn-primary" type="button">Go!</button></div>
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
