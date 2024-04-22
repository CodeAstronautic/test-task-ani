import React from 'react';
import loginBg from '../../assets/login-bg.svg';
import rightCardPassword from '../../assets/RightCard-password.svg';
import logo from '../../assets/logo.svg';
import CommonButton from '../../components/CommonButton';
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import CommonInput from '../../components/CommonInput';

export default function ResetPassword() {

    return (
        <div className="login-background h-screen flex justify-center items-center relative">
            <img className="absolute inset-0 w-full h-full object-cover" src={loginBg} alt='' />
            <div className="absolute flex flex-wrap min-h-screen w-full content-center justify-center">
                <div className="flex shadow-md">
                    <div className="rounded-l-3xl bg-white w-[34rem] h-auto">
                        <div className='py-9 px-10 flex items-center gap-3'>
                            <img src={logo} alt='logo' />
                            <p className='text-3xl font-bold text-blue'>Asatera</p>
                        </div>
                        <div className="w-[410px] mx-auto pt-8">
                            <h1 className="text-[#1E1F20] font-medium text-[22px] leading-[30px]">Password Recovery</h1>
                            <p className="text-lightGray font-medium text-sm leading-5 pt-2.5">Enter your email to recover your password </p>
                            <form className="mt-[60px]">
                                <CommonInput label="Email" placeholder="davin.wong@mail.com" icon={IoCheckmarkCircleOutline} iconColor="#62CA76" />

                                <div className='mb-10'>
                                    <CommonButton className="bg-warning">Send Email</CommonButton>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="flex flex-wrap content-center justify-center w-[34rem] h-auto">
                        <img className="w-full h-full bg-center bg-no-repeat bg-cover" src={rightCardPassword} />
                    </div>
                </div>
            </div>
        </div>
    )
}
