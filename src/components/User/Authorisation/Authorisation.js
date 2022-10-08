import React from "react";
import '../user.css'

import Header from "../../Header/Header";
import {useForm} from "react-hook-form";

const Authorisation = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = (data) => {
        alert(`Your login ${data.login}; Your password ${data.password}`)
    }

    console.log(errors)
    return (
        <div className="text-center auth-body overlay-white">
            <div className="position-absolute header">
                <Header/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="form-signin">
                <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt=""
                     width="72" height="72"/>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputName" className="sr-only">Login</label>
                <input {...register('login',
                    {required: 'Login is required field'},
                )} type="text" id="inputName" className="form-control" placeholder="Login"
                       autoFocus=""/>
                {errors.login && <div className='mb-1' style={{color: 'red', textAlign: 'start'}}>{errors.login.message}</div>}
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input{...register('password',
                      {required: 'Password is required field'},
                )} type="password" id="inputPassword" style={{marginBottom: 0}} className="form-control" placeholder="Password"
                />
                {errors.password && <div className='mb-1' style={{color: 'red', textAlign: 'start'}}>{errors.password.message}</div>}
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
            </form>
        </div>
    )
}

export default Authorisation