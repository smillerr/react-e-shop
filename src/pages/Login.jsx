import { useRef } from 'react';
import '@styles/Login.scss';
import { SecondaryButton } from '@components/SecondaryButton';
import { ShopLogo } from '@components/ShopLogo';


function Login(){
    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            email: formData.get('email'),
            password: formData.get('password')
        }
        console.log(data);
    }
    return (
        <div className="Login">
            <div className="Login-container"> 
                <ShopLogo />
                <form action="/" className="login-form" ref={form}>
                    <label htmlFor="email" className="email"> Email address </label>
                    <input type="email" name="email" placeholder="someone@example.com" className="input input-email" required />
                    <label htmlFor="password" className="password"> Password </label>
                    <input type="password" name="password" placeholder="*********" className="input input-password" required />
                    <input type="submit" className="primary-button logIn-button" value="Log in" onClick={handleSubmit}/>
                    <a href="/recovery-password" className="forgot-password">Forgot my password</a>
                </form>
                <SecondaryButton text="Sign up" />
            </div>
        </div>
    );
}

export {Login};
