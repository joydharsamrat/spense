import React from 'react';
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiChevronDown, FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner h-screen flex justify-center items-start max-h-[600px]'>
            <div className='flex justify-center items-center mt-[15%]'>
                <div className="dropdown">
                    <label tabIndex={0} className="bg-white px-4 py-3 font-bold rounded-l-lg flex items-center justify-start gap-5 w-52"><FaRegCalendarAlt className='text-2xl'></FaRegCalendarAlt> <span>Check In</span><FiChevronDown className='font-bold'></FiChevronDown></label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
                <div className="dropdown">
                    <label tabIndex={0} className="bg-white mx-[1px] px-4 py-3 flex items-center justify-start gap-5 w-52 font-bold"><FaRegCalendarAlt className='text-2xl'></FaRegCalendarAlt ><span>Check Out</span><FiChevronDown className='font-bold'></FiChevronDown></label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
                <div className="dropdown">
                    <label tabIndex={0} className="bg-white px-4 py-3 flex items-center justify-start rounded-r-lg w-80 font-bold">3 adults - 0 children - 2 rooms</label>
                    <div tabIndex={0} className="dropdown-content text-left py-2 px-10 shadow bg-white w-80">

                        <p>Maximum 8 adults per room</p>
                        <div className='flex items-center justify-between my-3'>
                            <div>
                                <h4 className='font-bold'>Rooms</h4>
                                <p className='text-sm'>(Maximum 8 adults per room)</p>
                            </div>
                            <div className='flex items-center justify-center gap-3'>
                                <p><FiMinusCircle></FiMinusCircle></p>
                                <p>1</p>
                                <p><FiPlusCircle></FiPlusCircle></p>
                            </div>
                        </div>
                        <div className='flex items-center justify-between my-3'>
                            <div>
                                <h4 className='font-bold'>Adults</h4>
                                <p className='text-sm'>(Maximum 8 adults per room)</p>
                            </div>
                            <div className='flex items-center justify-center gap-3'>
                                <p><FiMinusCircle></FiMinusCircle></p>
                                <p>1</p>
                                <p><FiPlusCircle></FiPlusCircle></p>
                            </div>
                        </div>
                        <div className='flex items-center justify-between my-3'>
                            <div>
                                <h4 className='font-bold'>Children</h4>
                                <p className='text-sm'>(Maximum 8 adults per room)</p>
                            </div>
                            <div className='flex items-center justify-center gap-3'>
                                <p><FiMinusCircle></FiMinusCircle></p>
                                <p>1</p>
                                <p><FiPlusCircle></FiPlusCircle></p>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <button className='border-2 border-blue-700 text-blue-700 px-[40px] rounded-lg'>Done</button>
                        </div>
                    </div>

                </div>
                <button className='btn btn-warning ml-3'>Check Availability</button>
            </div>
        </div>
    );
};

export default Banner;