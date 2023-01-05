import React from 'react';

const Photos = () => {
    return (
        <div className='grid grid-cols-7 gap-5 mt-12'>
            <div className='col-span-3 relative'>
                <img className='rounded-xl w-full h-full' src="https://i.ibb.co/9vdMfgr/pexels-bilal-mansuri-13722890.jpg" alt="" />
                <div className='absolute bg-white h-60 w-60 bottom-10 left-10 rounded-full'>
                </div>
                <div className='absolute bottom-36 left-24 bg-green-600 h-20 w-20 rounded-full flex justify-center items-center'>
                    <p className='text-6xl font-bold text-white' >V</p>
                </div>
                <div className='absolute bottom-24 left-36 border-8 border-white bg-yellow-400 h-[90px] w-[90px] rounded-full flex justify-center items-center'>
                    <p className='text-6xl font-bold text-Black' >R</p>
                </div>
            </div>
            <div className='col-span-4'>
                <div className='grid gap-y-[45px] gap-x-5 grid-cols-2'>
                    <figure>
                        <img className='rounded-xl h-44 w-54' src="https://i.ibb.co/3dyrrGQ/pexels-donald-tong-189296.jpg" alt="" />
                    </figure>
                    <figure>
                        <img className='rounded-xl h-44 w-54' src="https://i.ibb.co/3FctbY2/pexels-pixabay-261102.jpg" alt="" />
                    </figure>
                    <figure>
                        <img className='rounded-xl h-44 w-54' src="https://i.ibb.co/jG2cdGd/pexels-iv-n-rivero-1001965.jpg" alt="" />
                    </figure>
                    <figure>
                        <img className='rounded-xl h-44 w-54' src="https://i.ibb.co/TMLJwSG/pexels-elevate-1267320.jpg" alt="" />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Photos;