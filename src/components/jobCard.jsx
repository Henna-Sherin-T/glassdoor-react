import PropTypes from "prop-types";
const JobCard = ({job}) => {
     
  return (
    <div className="pt-3 ">
      <div>
        <div className="border rounded-sm border-gray-300 w-[400px] p-3 shadow-md">
          <div className="rounded-full p-3 ">
            <div className="flex items-center">
              <img className='border rounded-full'
                src={job.company.logo}
                alt="glassdoor"
                width={25}
                height={25}
              />
              <span className="mr-3 ml-2">{job.company.name}</span>
              <span>4.5</span>
            </div>
          </div>

          <div className='font-semibold'>{job.title}</div>
          <div className='text-gray-500 text-md'>{job.location}</div>
          <div>salary - {job.salary}</div>
        </div>
      </div>
    </div>
  );
}

export default JobCard

JobCard.propTypes = {
  job: PropTypes.object
}