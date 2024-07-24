const LoginPage = () => {
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col gap-5 p-10 bg-white border border-gray-300 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-4xl text-green-500 font-semibold text-center">Login</h1>
        <form id='login'  className="flex flex-col gap-5">
          <input
          name='email'
            type="email"
            placeholder="Email"
            required
            className="border p-3 rounded-lg text-black w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
          name='password'
            type="password"
            placeholder="Password"
            required
            className="border p-3 rounded-lg text-black w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <div className='flex justify-center items-center mt-4'>
            <button
              type="submit"
              className="bg-green-500 text-white py-3 px-10 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-200"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
