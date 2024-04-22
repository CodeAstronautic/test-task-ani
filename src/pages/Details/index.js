import React from 'react';
import loginBg from '../../assets/login-bg.svg';
import rightCardSignup from '../../assets/RightCard-signup.svg';
import logo from '../../assets/logo.svg';
import { FaTwitter, FaGoogle, FaGithub } from "react-icons/fa";
import CommonButton from '../../components/CommonButton';
import CommonInput from '../../components/CommonInput';

export default function Details() {

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
                            <h1 className="text-[#1E1F20] font-medium text-[22px] leading-[30px]">Please Add your Business Details</h1>
                            <form className="mt-5">
                                <CommonInput placeholder="Davin Wong" label="COMPANY NAME" type="text" />
                                <CommonInput placeholder="Select a Category" label="BUSINESS TYPE" type="text" />
                                <CommonInput placeholder="20" label="EMPLOYEES" type="text" />
                                <CommonInput placeholder="+1- 656574-5658" label="PHONE" type="text" />
                                <div className='mb-10'>
                                    <CommonButton className="bg-warning">Create an account</CommonButton>
                                </div>
                            </form>
                            <div className='flex gap-3 justify-center items-center'>
                                <div className='flex gap-1.5'>
                                    <div className='border border-[#ECECF2] text-[#8181A5] p-4 rounded-lg'><FaTwitter /></div>
                                    <div className='border border-[#ECECF2] text-[#8181A5] p-4 rounded-lg'><FaGoogle /></div>
                                    <div className='border border-[#ECECF2] text-[#8181A5] p-4 rounded-lg'><FaGithub /></div>
                                </div>
                                <p className='text-[#8181A5] text-sm font-semibold cursor-pointer'>Or sign in with</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap content-center justify-center w-[34rem] h-auto">
                        <img className="w-full h-full bg-center bg-no-repeat bg-cover" src={rightCardSignup} />
                    </div>
                </div>
            </div>
        </div>
    )
}
