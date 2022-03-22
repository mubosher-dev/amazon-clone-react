import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom"
import { Input } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import { useStateValue } from "../../StateProvider";
import { auth } from '../../firebase';

function Header() {

    const [{ basket, user }] = useStateValue()

    const signOut = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <header className='header'>
            <Link to={"/"}>
                <img
                    className='header__logo'
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
            </Link>

            <div className="header__searchbox">
                <Input
                    placeholder='enter search product name'
                />
                <button>
                    <SearchIcon />
                </button>
            </div>

            <div className="header__link">
                <Link className='link' to={!user && "/login"}>
                    <div
                        onClick={signOut}
                        className="header__options">
                        <span>Hello {user?.email} </span>
                        <span>{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>

                <Link
                    to={"/"}
                    className='link'>
                    <div className="header__options">
                        <span>Returns</span>
                        <span>& Orders</span>
                    </div>
                </Link>

                <Link to={"/"} className='link'>
                    <div className="header__options ">
                        <span>Your</span>
                        <span>Prime</span>
                    </div>
                </Link>

                <Link to="/checkout">
                    <div className="flex">
                        <p>
                            <ShoppingBasketRoundedIcon />
                        </p>
                        <span>{basket.length}</span>
                    </div>
                </Link>
            </div>

        </header>
    )
}

export default Header