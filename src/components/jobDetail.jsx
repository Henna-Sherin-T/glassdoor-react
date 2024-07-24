

export const JobDetail = () => {
  return (
    <div className='pt-3 '>
        <div className='border rounded-sm border-gray-300 p-3 w-[900px] min-h-screen'>
        <div className="rounded-full p-3 ">
            <div className="flex items-center">
              <img className='border rounded-full'
                src={""}
                alt="glassdoor"
                width={25}
                height={25}
              />
              <span className="mr-3 ml-2 font-semibold">{}</span>
              <span>4.5</span>
            </div>
          </div>
            <div className='flex justify-between p-3 items-center'><div className='text-2xl font-semibold items-center'>{}<div className='text-gray-500 text-sm font-medium'>{}</div></div><button className='bg-green-500 px-5 py-2   rounded-lg hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-200'>Easy apply</button></div>
            
            <div>{}</div>
            <div>{}</div>
           
        </div>
    </div>
  )
}
