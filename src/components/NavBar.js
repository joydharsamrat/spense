import React from 'react';

const NavBar = () => {
    return (
        <div className="flex items-center justify-between py-3 px-12">
            <h1 className='text-3xl icon font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-800 via-amber-500 to-purple-400'>Sample Logo</h1>
            <p className='text-sm'>Need help ? call 8107344682</p>
        </div>
    );
};

export default NavBar;