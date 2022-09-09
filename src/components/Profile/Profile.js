import logo from '../img/logo.svg'
import cart_icon from '../img/cart_icon.png'
import icon_user from '../img/icon_user.png'
import React from "react";
import menu from '../img/menu.png'
import favouriteAfter from '../img/favorite-after.png';
import axios from "axios";
import {Route, Routes, Link} from "react-router-dom";
import Header from "../header/header";

const Profile = () => {
    return (
        <>
            <div className="jumbotron">
                <div className="mt-4">
                    <h1 className="display-3 mb-3">Портфолио</h1>
                    <p>Это место, где собраны ваши научные публикации. Здесь вы можете добавлять свои научные работы,
                        получать информацию об их уникальности и смотреть отзывы ваших научных руководителей.</p>
                    <p><a className="btn btn-primary btn-lg" href="#" role="button">Добавить работу</a></p>
                </div>
            </div>
            </>
    )
}


export default Profile
