import React from 'react';
import loginBg from '../../assets/login-bg.svg';
import rightCardPassword from '../../assets/RightCard-password.svg';
import logo from '../../assets/logo.svg';
import CommonButton from '../../components/CommonButton';
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import CommonInput from '../../components/CommonInput';
import whiteLogo from '../../assets/white-logo.svg';
import { useNavigate } from 'react-router-dom';

export default function ResetPassword() {
    const navigate = useNavigate();

    return (
        <div className="login-background h-screen flex justify-center items-center relative">
            <img className="absolute inset-0 w-full h-full object-cover" src={loginBg} alt='' />
            <div className="absolute flex flex-wrap min-h-screen w-full lg:content-center content-end justify-center">
                <div className="flex shadow-md lg:w-auto w-full">
                    <div className='grid lg:grid-cols-2 w-full'>
                        <div className='py-9 px-10 lg:hidden flex flex-col items-center gap-3 '>
                            <img src={whiteLogo} alt='logo' />
                            <p className='text-3xl font-bold text-[#FDFDFD]'>Asatera</p>
                        </div>
                        <div className="lg:rounded-l-3xl bg-white h-auto">
                            <div className='py-9 px-10 lg:flex hidden items-center gap-3'>
                                <img src={logo} alt='logo' />
                                <p className='text-3xl font-bold text-blue'>Asatera</p>
                            </div>
                            <div className="pt-8 lg:px-[65px] px-7">
                                <h1 className="text-[#1E1F20] font-medium text-[22px] leading-[30px]">Password Recovery</h1>
                                <p className="text-lightGray font-medium text-sm leading-5 pt-2.5">Enter your email to recover your password </p>
                                <form className="lg:mt-[60px] mt-12">
                                    <CommonInput label="Email" placeholder="davin.wong@mail.com" icon={IoCheckmarkCircleOutline} iconColor="#62CA76" />

                                    <div className='mb-10'>
                                        <CommonButton onClick={() => navigate('/details')} className="bg-warning">Send Email</CommonButton>
                                    </div>
                                </form>
                                <div className='flex w-full justify-center pt-5 pb-2.5 lg:hidden'>
                                    <div className='bg-[#000000] rounded-md w-full max-w-36 h-[5px] flex justify-center'></div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex flex-wrap content-center justify-center h-auto hidden">
                            <img className="w-full h-full bg-center bg-no-repeat bg-cover" src={rightCardPassword} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
