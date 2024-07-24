import { FaSearch, FaUserCircle } from 'react-icons/fa'
import {  IoMdNotificationsOutline } from 'react-icons/io'

export const NavBar = () => {
  return (
    <div className='w-full pt-4 flex justify-between text-black items-center'>
        <div className='text-3xl text-green-500 font-semibold font-mono ml-8'>{'GLASSDOOR'}</div>
        <div className='flex gap-4 font-semibold  '>
            <span className='pb-4 hover:border-b-4 border-green-500 '>Community</span>
            <span className='pb-4 hover:border-b-4 border-green-500'>Jobs</span>
            <span className='pb-4 hover:border-b-4 border-green-500'>Companies</span>
            <span className='pb-4 hover:border-b-4 border-green-500'>Salaries</span>
        </div>
       
        <div className='flex gap-4 mr-10'>
            <span><FaSearch /></span>
            <span>Search</span>
            <span className='text-xl'><IoMdNotificationsOutline /></span>
            <span className='text-xl'><FaUserCircle/></span>
        </div>
    </div>
  )
}
