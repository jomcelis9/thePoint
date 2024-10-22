import  {useState } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5001/api/auth/login', {
        email,
        password,
      });

      if (response.data) {
        const token = response.data.token;
        localStorage.setItem('token', token);
      }
    } catch (error) {
      setError(error.response ? error.response.data.message : 'An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="bg-gradient-to-r from-thePointRed to-thePointPink ">
      <div className="min-h-screen flex flex-col items-center justify-center ">
        <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-2xl rounded-md bg-white">
          <div className="md:max-w-md w-full px-4 py-4 bg-gray-100">
            <div className="flex flex-col items-center justify-center ">
              <img src="/src/images/THE POINT LOGO tp 2.png" className="w-44 bg-transparent drop-shadow-2xl " alt="" />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-12">
                <h3 className="text-gray-800 text-3xl font-bold">Sign in</h3>
                <p className="text-sm mt-4 text-gray-800">
                  <Link to={"/register"}>
                    <span className="text-thePointRed font-semibold hover:underline ml-1 whitespace-nowrap">
                      Register here</span>
                  </Link>
                </p>
              </div>

              {error && <p className="text-red-500">{error}</p>}

              <div>
                <label htmlFor="email" className="text-gray-800 text-xs block mb-2">Email</label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {/* Email icon here */}
                </div>
              </div>

              <div className="mt-8">
                <label htmlFor="password" className="text-gray-800 text-xs block mb-2">Password</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    required
                    className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {/* Password icon here */}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                    Remember me
                  </label>
                </div>
                <div>
                  <a href="javascript:void(0);" className="text-orange-500 font-semibold text-sm hover:underline">
                    Forgot Password?
                  </a>
                </div>
              </div>

              <div className="mt-12">
                <button type="submit" className="bg-gradient-to-r from-thePointRed to-thePointPink w-full text-white bg-primary-600 focus:ring-2 focus:outline-none focus:ring-amber-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                transform active:scale-x-100 transition-transform transition ease-in delay-100 hover:-translate-y-1 hover:drop-shadow-xl duration-300 ">
                  Sign in
                </button>
              </div>

              <div className="space-x-6 flex justify-center mt-6">
                {/* Social media buttons here */}
              </div>
            </form>
          </div>

          <div>
            <img src="src/images/RADIENT.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
