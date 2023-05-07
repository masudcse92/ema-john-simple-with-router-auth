import React from 'react';
import './SingUp.css';

const SignUp = () => {
    return (
        <div className='form-container'> 
        <h2 className='form-title text-center'>Sign Up</h2>
        <form>
            <div className='form-control'>
                <label htmlFor="">Email</label>
                <input type="email" name="email" id="" required placeholder='Your Email'/>
            </div>
            <div className='form-control'>
                <label htmlFor="">Password</label>
                <input type="password" name="password" id="" required placeholder='Your Password'/>
            </div>
            <div className='form-control'>
                <label htmlFor="">Confrim Password</label>
                <input type="password" name="Confrim" id="" required placeholder='Your Password'/>
            </div>
            <input className='btn-submit' type="submit" value="login" />
        </form>
    </div>
    );
};

export default SignUp;