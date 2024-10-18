import { Link } from 'react-router-dom';
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/users/forgot-password', { // potential endpoint sa backend
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Password reset link sent to your email');
      } else {
        setError(data.message || 'Error sending reset link.');
      }
    } catch (err) {
      setError('Server error. Please try again later.');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-thePointRed to-thePointPink">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-2xl rounded-md">
        <div className="flex justify-center"> 
          <img src="/src/images/THE POINT LOGO tp 2.png" className="w-44 bg-transparent drop-shadow-2xl" alt="Logo" />
        </div>
        <h3 className="text-3xl font-bold text-center">Forgot Password</h3>
        <p className="text-sm text-gray-800 text-balanced text-center px-20 mb-5">Enter your e-mail address and we'll give you reset instructions.</p>
        
        {message && <p className="text-green-500">{message}</p>}
        {error && <p className="text-red-500">{error}</p>}
        
        <form onSubmit={handleForgotPassword} disabled={loading}>
          <div className="mb-4 relative">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 pt-4">Email Address</label>
            <div className="relative">
              <input 
                id="email" 
                type="email" 
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 pr-10 shadow-sm focus:outline-none focus:ring-thePointPink focus:border-thePointPink sm:text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-3 top-3" viewBox="0 0 682.667 682.667">
                <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                    <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                    </clipPath>
                </defs>
                <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                    <path fill="none" stroke-miterlimit="10" stroke-width="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                    <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                </g>
              </svg>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="bg-gradient-to-r from-thePointRed to-thePointPink w-full text-white bg-primary-600 focus:ring-2 focus:outline-none focus:ring-amber-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center transform active:scale-x-100 transition-transform transition ease-in delay-100 hover:-translate-y-1 hover:drop-shadow-xl duration-300"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Reset Link'}
            </button>
            <div className="mt-6 text-center">
                <Link to="/login" className="text-orange-500 font-semibold text-sm hover:underline">
                    Back to Login
                </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
