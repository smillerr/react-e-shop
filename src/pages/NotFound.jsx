import React from "react";
import '@styles/NotFound.scss';
import notFound from '@images/404_not_found.svg';
import logo from '@images/logo_yard_sale.svg';
import { PrimaryButton } from "@components/PrimaryButton";
function NotFound(){
    return (
        <div className="not-found">
            <div className="error-container">
                <img src={logo} alt="logo" className="logo" />
                <div className="error-icon-container">
                    <img src={notFound} alt="logo" className="error-icon" />
                </div>
                <h1 className="title">Ooops! You weren't supposed to see this</h1>
                <p className="subtitle">
                The page that you are looking for doesn't exist or another error ocurred
                </p>
                <PrimaryButton text="Go back" />
            </div>
        </div>
    );
}

export {NotFound};