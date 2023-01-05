import React from 'react';

const About = () => {
    return (
        <div className='my-8'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='font-bold'>Hotel Visal @ airport</h1>
                    <p>104/2/2, National Highway, Mahipalpur, New <span className='ml-4 text-blue-600 underline'><a href="/">View Map</a></span></p>
                    <p>Delhi, 1137 New delhi, india</p>
                    <p className='font-bold my-4'>+91-7654564545, 8107344682</p>
                </div>
                <div>
                    <img className='h-28 w-28 rounded-xl' src="https://i.ibb.co/hZk1Hrv/thumbnail.jpg" alt="map" />
                </div>
            </div>
            <ul className='list-disc flex gap-10 font-bold ml-5 mb-5'>
                <li>Free parking</li>
                <li>Conference Room</li>
                <li>ATM</li>
                <li>Conference Room</li>
                <li>Conference Room</li>
            </ul>
            <p>Located In New delhi Lorem, , vero animi blanditiis autem libero numquam nisi aut vel? Labore sapiente corrupti inventore placeat, atque omnis nulla ex facilis consequuntur? Blanditiis possimus voluptate quisquam, ipsam aspernatur eius illo impedit accusamus obcaecati odit.</p>
        </div>
    );
};

export default About;