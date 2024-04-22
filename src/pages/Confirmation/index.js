import React from 'react';
import loginBg from '../../assets/login-bg.svg';
import rightCard from '../../assets/Right-card.svg';
import logo from '../../assets/logo.svg';
import CommonButton from '../../components/CommonButton';

export default function Confirmation() {

    return (
        <div className="login-background h-screen flex justify-center items-center relative">
            <img className="absolute inset-0 w-full h-full object-cover" src={loginBg} alt='' />
            <div className="absolute flex flex-wrap min-h-screen w-full content-center justify-center">
                <div className="flex shadow-md">
                    <div className="rounded-l-3xl bg-white w-[34rem] h-auto relative">
                        <div className='py-9 px-10 flex items-center gap-3 absolute'>
                            <img src={logo} alt='logo' />
                            <p className='text-3xl font-bold text-blue'>Asatera</p>
                        </div>
                        <div className="w-[410px] mx-auto flex flex-col gap-[60px] h-full justify-center">
                            <h1 className="text-[#1E1F20] font-medium text-[22px] leading-[30px] text-center">Registeration Completed. Please confirm your email id by clicking on the link sent to your email.</h1>
                            <div>
                                <CommonButton className="bg-warning">Sounds Great !</CommonButton>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap content-center justify-center w-[34rem] h-auto">
                        <img className="w-full h-full bg-center bg-no-repeat bg-cover" src={rightCard} />
                    </div>
                </div>
            </div>
        </div>
    )
}

