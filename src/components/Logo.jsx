import React from 'react';
import logo from '../../public/images/logo.png';
import Image from 'next/image';

const Logo = () => {
    return (
        <div>
            <Image src={logo}
            hight={50}
            width={150}
        
            alt="Logo" />
        </div>
    );
};

export default Logo;