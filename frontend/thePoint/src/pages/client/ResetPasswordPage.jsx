import { useState } from "react";
import { Link } from "react-router-dom";

export default function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false); 
  const [resetSuccess, setResetSuccess] = useState(false); 

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/users/reset-password', { // potential backend sa endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        setResetSuccess(true); 
      } else {
        setError(data.message || 'Error resetting password.');
      }
    } catch (err) {
      setError('Server error. Please try again later.');
    }

    setLoading(false);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordsMatch(newPassword === e.target.value); 
  };

  if (resetSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-thePointRed to-thePointPink">
        <div className="max-w-md w-full px-6 py-8 bg-white shadow-lg rounded-md text-center">
          <h3 className="text-3xl font-bold text-center mb-5">Password Reset Successfully</h3>
          <p className="text-lg text-gray-800">Your password has been reset. You can now log in with your new password.</p>
          <Link to="/login" className="mt-6 inline-block bg-gradient-to-r from-thePointRed to-thePointPink text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center transform hover:-translate-y-1 hover:drop-shadow-xl duration-300">
            Back to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-thePointRed to-thePointPink">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-lg rounded-md">
        <div className="flex justify-center"> 
          <img src="/src/images/THE POINT LOGO tp 2.png" className="w-44 bg-transparent drop-shadow-2xl" alt="Logo" />
        </div>
        <h3 className="text-3xl font-bold text-center mb-5">Reset your Password</h3>
        {message && <p className="text-green-500">{message}</p>}
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleResetPassword}>
          <div className="mb-4 relative">
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
            <div className="relative">
              <input 
                id="newPassword" 
                type={showPassword ? 'text' : 'password'} 
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 pr-10 shadow-sm focus:outline-none focus:ring-thePointPink focus:border-thePointPink sm:text-sm"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required 
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500"
                onClick={() => setShowPassword(!showPassword)} 
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.55 1.68-1.512 3.18-2.753 4.255M15 12a3 3 0 01-6 0m9 0h.01M12 15v.01" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825a8.968 8.968 0 01-1.875.175c-4.477 0-8.268-2.943-9.542-7 .645-1.985 1.806-3.76 3.263-5.02m9.378 9.38A9.964 9.964 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.964 9.964 0 012.21-3.623m3.153 2.763a3 3 0 104.243 4.243" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input 
              id="confirmPassword" 
              type="password" 
              className={`mt-1 block w-full border ${passwordsMatch ? 'border-gray-300' : 'border-red-500'} rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-thePointPink focus:border-thePointPink sm:text-sm`}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required 
            />
            {!passwordsMatch && <p className="text-red-500 text-sm mt-1">Passwords do not match.</p>}
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="bg-gradient-to-r from-thePointRed to-thePointPink w-full text-white bg-primary-600 focus:ring-2 focus:outline-none focus:ring-amber-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center transform active:scale-x-100 transition-transform transition ease-in delay-100 hover:-translate-y-1 hover:drop-shadow-xl duration-300"
              disabled={loading || !passwordsMatch} 
            >
              {loading ? 'Resetting...' : 'Reset Password'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
