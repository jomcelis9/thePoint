import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import videoBg from '../../Videos/videoLogo.mp4';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); 
    setLoading(true);

    
    if (!email || !password) {
      setError('Please enter both email and password');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5001/routes/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/booking'); 
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
    <div className="bg-gradient-to-r from-thePointRed to-thePointPink">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-2xl rounded-md bg-white">
          <div className="md:max-w-md w-full px-4 py-4 bg-gray-100">
            <div className="flex flex-col items-center justify-center">
              <img src="/src/images/THE POINT LOGO tp 2.png" className="w-44 bg-transparent drop-shadow-2xl" alt="Logo" />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-12">
                <h3 className="text-gray-800 text-3xl font-bold">Sign in</h3>
                <p className="text-sm mt-4 text-gray-800">
                  Don’t have an account?
                  <Link to="/register">
                    <span className="text-thePointRed font-semibold hover:underline ml-1">Register here</span>
                  </Link>
                </p>
              </div>

              <div>
                <label htmlFor="email" className="text-gray-800 text-xs block mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none"
                  placeholder="Enter email"
                  required
                />
              </div>

              <div className="mt-8">
                <label htmlFor="password" className="text-gray-800 text-xs block mb-2">Password</label>
                <input
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none"
                  placeholder="Enter password"
                  required
                />
              </div>

              {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

              <div className="flex items-center justify-between gap-4 mt-6">
                <label className="flex items-center text-sm text-gray-800">
                  <input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                  <span className="ml-2">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-orange-500 font-semibold text-sm hover:underline">Forgot Password?</Link>
              </div>

              <div className="mt-12">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-thePointRed to-thePointPink w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 transition transform hover:scale-105 duration-300"
                >
                  {loading ? 'Signing in...' : 'Sign in'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
