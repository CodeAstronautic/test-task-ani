import React from 'react';
import loginBg from '../../assets/login-bg.svg';
import rightCard from '../../assets/Right-card.svg';
import logo from '../../assets/logo.svg';
import CommonButton from '../../components/CommonButton';
import whiteLogo from '../../assets/white-logo.svg';

export default function Confirmation() {

    return (
        <div className="login-background h-screen flex justify-center items-center relative">
            <img className="absolute inset-0 w-full h-full object-cover" src={loginBg} alt='' />
            <div className="absolute flex flex-wrap min-h-screen w-full content-center justify-center h-full">
                <div className="flex shadow-md lg:h-auto h-full">
                    <div className='grid lg:grid-cols-2 w-full'>
                        <div className='py-9 px-10 lg:hidden flex flex-col items-center gap-3 justify-end'>
                            <img src={whiteLogo} alt='logo' />
                            <p className='text-3xl font-bold text-[#FDFDFD]'>Asatera</p>
                        </div>
                        <div className="lg:rounded-l-3xl bg-white h-auto relative">
                            <div className='py-9 px-10 lg:flex hidden items-center gap-3 absolute'>
                                <img src={logo} alt='logo' />
                                <p className='text-3xl font-bold text-blue'>Asatera</p>
                            </div>
                            <div className="lg:w-[410px] w-full mx-auto flex flex-col h-full lg:justify-center justify-end pt-8 lg:px-0 px-7">
                                <h1 className="text-[#1E1F20] font-medium text-[22px] leading-[30px] text-center mb-[60px]">Registeration Completed. Please confirm your email id by clicking on the link sent to your email.</h1>
                                <div>
                                    <CommonButton className="bg-warning">Sounds Great !</CommonButton>
                                </div>
                                <div className='flex w-full justify-center pt-5 pb-2.5 lg:hidden'>
                                    <div className='bg-[#000000] rounded-md w-full max-w-36 h-[5px] flex justify-center'></div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex flex-wrap content-center justify-center h-auto hidden">
                            <img className="w-full h-full bg-center bg-no-repeat bg-cover" src={rightCard} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

