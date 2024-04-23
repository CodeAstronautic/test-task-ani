import React, { useState } from 'react';
import loginBg from '../../assets/login-bg.svg';
import rightCard from '../../assets/Right-card.svg';
import logo from '../../assets/logo.svg';
import whiteLogo from '../../assets/white-logo.svg';
import { FaTwitter, FaGoogle, FaGithub } from "react-icons/fa";
import CommonButton from '../../components/CommonButton';
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdRemoveRedEye } from "react-icons/md";
import { IoMdEyeOff } from "react-icons/io";
import CommonInput from '../../components/CommonInput';
import { Link, useNavigate } from 'react-router-dom';
import { updateEmail, updatePassword } from '../../actions';
import { connect } from 'react-redux';

const Login = ({ updateEmail, updatePassword }) => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

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
                                <h1 className="text-[#1E1F20] font-medium text-[22px] leading-[30px]">Welcome Back!</h1>
                                <p className="text-lightGray font-medium text-sm leading-5 pt-2.5">Sign in to continue </p>
                                <form className="lg:mt-[60px] mt-5">
                                    <CommonInput label="Email" placeholder="davin.wong@mail.com" icon={IoCheckmarkCircleOutline} iconColor="#62CA76" onChange={(e) => updateEmail(e.target.value)} />
                                    <CommonInput
                                        label="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="*****"
                                        icon={showPassword ? MdRemoveRedEye : IoMdEyeOff}
                                        togglePasswordVisibility={togglePasswordVisibility}
                                        iconColor="dark"
                                        onChange={(e) => updatePassword(e.target.value)}
                                    />
                                    <div className="mb-[30px] mt-5 lg:flex hidden flex-wrap justify-end">
                                        <a href="#" className="text-sm font-sembbold text-lightGray">Forgot password?</a>
                                    </div>
                                    <div className='lg:mb-10 mb-6'>
                                        <CommonButton className="bg-warning">Login</CommonButton>
                                        <div className="mb-3.5 mt-[18px] lg:hidden flex flex-wrap justify-center">
                                            <a href="#" className="text-sm font-bold text-lightGray">Forgot password?</a>
                                        </div>
                                        <CommonButton onClick={() => navigate('/signUp')} className="border-2 border-[#E9E9EC] bg-white">Create an account</CommonButton>
                                    </div>
                                </form>
                                <div className='flex gap-3 justify-center items-center'>
                                    <div className='flex gap-1.5'>
                                        <div className='border border-[#ECECF2] text-[#8181A5] p-4 rounded-lg'><FaTwitter /></div>
                                        <div className='border border-[#ECECF2] text-[#8181A5] p-4 rounded-lg'><FaGoogle /></div>
                                        <div className='border border-[#ECECF2] text-[#8181A5] p-4 rounded-lg'><FaGithub /></div>
                                    </div>
                                    <Link to="/signUp" className='text-[#8181A5] sm:text-sm text-xs font-semibold cursor-pointer'>Or sign in with</Link>
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

const mapStateToProps = (state) => ({
    email: state.form.email,
    password: state.form.password,
});

const mapDispatchToProps = {
    updateEmail,
    updatePassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

