import React from 'react';

const CommonInput = ({ type,onChange, placeholder, label, icon: Icon, iconColor, togglePasswordVisibility }) => {
    return (
        <div className="mb-5 relative">
            <label className="mb-2.5 block text-[#1E1F20] text-xs font-bold leading-5 tracking-[1px] uppercase">{label}</label>
            <div className="relative">
                <input
                    type={type}
                    placeholder={placeholder}
                    className="block w-full h-12 text-sm rounded border-2 border-[#E9E9EC] focus:outline-none py-1 px-3.5 text-black placeholder:text-lightGray"
                    onChange={onChange}
                />
                {Icon && (
                    <Icon
                        color={iconColor}
                        className="absolute right-3 top-4 cursor-pointer text-dark"
                        onClick={togglePasswordVisibility}
                    />
                )}
            </div>
        </div>
    );
};

export default CommonInput;
