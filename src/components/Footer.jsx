import React from 'react'
import {FiFacebook,FiTwitter,FiInstagram,FiLinkedin,FiYoutube} from 'react-icons/fi'

const Footer = () => {
  return (
    <>
        <footer className='bg-purple-800 w-full px-10 py-4 font-nunito'>
        <div className="w-10/12 mx-auto">
            <div className="grid grid-cols-5">
                <di className="grid place-content-center"><img src="/src/assets/Kinetic Logo white.png with tagline.png" alt="kinetic-logo" className='object-cover h-25 w-20 mx-auto' /></di>
                <div className="grid place-content-center">
                    <ul className='text-gray-400'>
                        <li>Home</li>
                        <li>About</li>
                        <li>For Schools Heads</li>
                    </ul>
                </div>
                <div className="grid place-content-center">
                    <ul className='text-gray-400'>
                        <li>For School Heads</li>
                        <li>For Teachers</li>
                        <li>Careers</li>
                        <li>Culture</li>
                    </ul>
                </div>
                <div className="grid place-content-center">
                    <ul className='text-gray-400'>
                        <li>Blog</li>
                        <li>Community</li>
                        <li>Resources</li>
                        <li>FAQs</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="grid place-content-center">
                   
                    <ul className="text-gray-400">
                        <li>
                            <div className="flex items-center gap-1">
                                <div className='bg-white  rounded-md p-1 m-1'><FiFacebook/></div>
                                <div><p>Facebook</p></div>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-1">
                                <di className='bg-white  rounded-md p-1 m-1'v><FiTwitter/></di>
                                <div><p>Twitter</p></div>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-1">
                                <div className='bg-white  rounded-md p-1 m-1'><FiInstagram/></div>
                                <div><p>Instagram</p></div>
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