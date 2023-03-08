import React from 'react'
import {FiTwitter,FiLinkedin,FiYoutube} from 'react-icons/fi'

const Footer = () => {
  return (
    <>
        <footer className='bg-purple-800 w-full px-10 py-4 font-nunito'>
        <div className="w-10/12 mx-auto">
            <div className="grid md:grid-cols-4 sm:grid-cols-1">
                <di className="grid place-content-center"><img src="/assets/Kinetic Logo white.png with tagline.png" alt="kinetic-logo" className='object-cover h-25 w-20 mx-auto' /></di>
                <div className="grid place-content-center">
                    <ul className='text-gray-400'>
                        <li>Home</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className="grid place-content-center">
                    <ul className='text-gray-400'>
                        <li>Blog</li>
                        <li>Resources</li>
                        <li>Contact: support</li>
                    </ul>
                </div>
                <div className="grid place-content-center">
                   
                    <ul className="text-gray-400">
                        <li>
                            <div className="flex items-center gap-1">
                                <di className='bg-white  rounded-md p-1 m-1'v><FiTwitter/></di>
                                <div><p>Twitter</p></div>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-1">
                                <div className='bg-white  rounded-md p-1 m-1'><FiLinkedin/></div>
                                <div><p>LinkedIn</p></div>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-1">
                                <di className='bg-white  rounded-md p-1 m-1'v><FiYoutube/></di>
                                <div><p>Youtube</p></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </footer>
    </>
  )
}

export default Footer