import React from 'react';
import loginBg from '../../assets/login-bg.svg';
import rightCardSignup from '../../assets/RightCard-signup.svg';
import logo from '../../assets/logo.svg';
import { FaTwitter, FaGoogle, FaGithub } from "react-icons/fa";
import CommonButton from '../../components/CommonButton';
import CommonInput from '../../components/CommonInput';
import whiteLogo from '../../assets/white-logo.svg';
import { useNavigate } from 'react-router-dom';

export default function Details() {
    const navigate = useNavigate();

    return (
        <div className="login-background h-screen flex justify-center items-center relative">
            <img className="absolute inset-0 w-full h-full object-cover" src={loginBg} alt='' />
            <div className="absolute flex flex-wrap min-h-screen w-full lg:content-center content-end justify-center">
                <div className="flex shadow-md lg:w-auto w-full">
                    <div className='grid lg:grid-cols-2 w-full'>
                        <div className='py-9 px-10 lg:hidden flex flex-col items-center gap-3'>
                            <img src={whiteLogo} alt='logo' />
                            <p className='text-3xl font-bold text-[#FDFDFD]'>Asatera</p>
                        </div>
                        <div className="lg:rounded-l-3xl bg-white h-auto">
                            <div className='py-9 px-10 lg:flex hidden items-center gap-3'>
                                <img src={logo} alt='logo' />
                                <p className='text-3xl font-bold text-blue'>Asatera</p>
                            </div>
                            <div className="pt-8 lg:px-[65px] md:px-7 px-5">
                                <h1 className="text-[#1E1F20] font-medium md:text-[22px] text-lg leading-[30px] flex md:justify-start justify-center">Please Add your Business Details</h1>
                                <form className="mt-5">
                                    <CommonInput placeholder="Davin Wong" label="COMPANY NAME" type="text" />
                                    <CommonInput placeholder="Select a Category" label="BUSINESS TYPE" type="text" />
                                    <CommonInput placeholder="20" label="EMPLOYEES" type="text" />
                                    <CommonInput placeholder="+1- 656574-5658" label="PHONE" type="text" />
                                    <div className='mb-10'>
                                        <CommonButton onClick={() => navigate('/confirmation')} className="bg-warning">Create an account</CommonButton>
                                    </div>
                                </form>
                                <div className='lg:flex hidden gap-3 justify-center items-center'>
                                    <div className='flex gap-1.5'>
                                        <div className='border border-[#ECECF2] text-[#8181A5] p-4 rounded-lg'><FaTwitter /></div>
                                        <div className='border border-[#ECECF2] text-[#8181A5] p-4 rounded-lg'><FaGoogle /></div>
                                        <div className='border border-[#ECECF2] text-[#8181A5] p-4 rounded-lg'><FaGithub /></div>
                                    </div>
                                    <p className='text-[#8181A5] text-sm font-semibold cursor-pointer'>Or sign in with</p>
                                </div>
                                <div className='flex w-full justify-center pt-5 pb-2.5 lg:hidden'>
                                    <div className='bg-[#000000] rounded-md w-full max-w-36 h-[5px] flex justify-center'></div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex flex-wrap content-center justify-center h-auto hidden">
                            <img className="w-full h-full bg-center bg-no-repeat bg-cover" src={rightCardSignup} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
