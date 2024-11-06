import { useState } from "react";
import { Link } from "react-router-dom";
import videoBg from '../../Videos/videoLogo.mp4';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // checking if there are values on email and password textbox
    if (!email || !password) {
      setError('Please enter both email and password');
      setLoading(false);
      return;
    }

    // fetching data by direct URL
    try {
      const response = await fetch('http://localhost:5001/routes/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        window.location.href = '/'; // if login successful, goes to bookingpage
      } else {
        setError(data.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      console.error('Error during login:', err);
      setError('Server error. Please try again later.');
    } finally {
      setLoading(false);
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
                    <span className="text-thePointRed font-semibold hover:underline ml-1 whitespace-nowrap">Register here</span>
                  </Link>
                </p>
              </div>

              <div>
                <label htmlFor="email" className="text-gray-800 text-xs block mb-2">Email</label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none"
                    placeholder="Enter email"
                  />
                </div>
              </div>

              <div className="mt-8">
                <label htmlFor="password" className="text-gray-800 text-xs block mb-2">Password</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none"
                    placeholder="Enter password"
                  />
                </div>
              </div>

              {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

              <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">Remember me</label>
                </div>
                <div>
                  <Link to="/forgot-password" className="text-orange-500 font-semibold text-sm hover:underline">Forgot Password?</Link>
                </div>
              </div>

              <div className="mt-12">
                <button type="submit" className="bg-gradient-to-r from-thePointRed to-thePointPink w-full text-white bg-primary-600 focus:ring-2 focus:outline-none focus:ring-amber-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center transform active:scale-x-100 transition-transform transition ease-in delay-100 hover:-translate-y-1 hover:drop-shadow-xl duration-300 ">
                  {loading ? 'Signing in...' : 'Sign in'}
                </button>
              </div>
            </form>
          </div>

          {/* Video section */}
          <div className="w-full h-full object-cover">
            <video autoPlay loop muted className="w-full h-full object-cover ">
              <source src={videoBg} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
