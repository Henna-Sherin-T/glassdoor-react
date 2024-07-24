import { useEffect } from "react"
import JobCard from "../components/jobCard"
import { JobDetail } from "../components/jobDetail"
import { NavBar } from "../components/NavBar"
import { useDispatch, useSelector } from "react-redux"
import { getJobs } from "../slices/jobSlice/JobSlice"

const HomePage = () => {
  const jobState = useSelector((state) => state.job)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getJobs())
  }, [dispatch])



  return (
    <>
      <NavBar />
      <div className='text-black flex flex-col min-h-screen pt-5 items-center pb-5'>
        <div className='text-lg flex rounded-full p-2 overflow-hidden max-w-md'>
          <input type="text" placeholder="Find your perfect job" className='flex border rounded-l-full p-1' />
          <input type="text" placeholder="Location" className='border rounded-r-full p-1' />
        </div>
        <div className='flex gap-5 font-semibold pt-4'>
          <span className='hover:border-b-4 border-green-500'>For You</span>
          <span className='hover:border-b-4 border-green-500'>Search</span>
          <span className='hover:border-b-4 border-green-500'>Your activity</span>
        </div>
        <hr className='w-full' />
        <div className='flex justify-between pt-3'>
          <div className='h-screen overflow-y-scroll mr-5'>
            {jobState?.status === 'succeeded' && jobState?.jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
          <div>
            <JobDetail />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
