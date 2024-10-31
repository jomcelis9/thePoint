import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser(ev) {
    ev.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:5001/routes/auth/register", {
        name,
        lastname,
        email,
        password,
      });
  
      console.log("User registered successfully:", response.data);
      alert("Registration successful!");
      
      // Redirect to login page
      navigate("/login");

      // Reset form fields
      setName('');
      setLastName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error("Registration error:", error);
      alert("An error occurred: " + JSON.stringify(error.response?.data || error.message));
    }
  }

  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-thePointRed60 shadow-2xl rounded-md">
          <div className="md:max-w-md w-full px-4 py-4">
            <div className="flex flex-col items-center justify-center">
              <img src="/src/images/THE POINT LOGO tp 2.png" className="w-44 bg-transparent drop-shadow-2xl " alt="Logo" />
            </div>
            <form onSubmit={registerUser}>
              <div className="mb-12">
                <h3 className="text-gray-800 text-3xl font-bold">Register your account</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-5 my-4">
                <div>
                  <label className="text-gray-800 text-xs block mb-2">Name</label>
                  <input 
                    value={name} onChange={ev => setName(ev.target.value)}
                    type="text"
                    className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none" 
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label className="text-gray-800 text-xs block mb-2">Last Name</label>
                  <input 
                    value={lastname} onChange={ev => setLastName(ev.target.value)}
                    type="text"
                    className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none" 
                    placeholder="Last name"
                  />
                </div>
              </div>
             
              <div>
                <label className="text-gray-800 text-xs block mb-2">Email</label>
                <input 
                  value={email} onChange={ev => setEmail(ev.target.value)}
                  type="email"
                  className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none"
                  placeholder="Enter email"
                />
              </div>
              <div className="mt-4">
                <label className="text-gray-800 text-xs block mb-2">Password</label>
                <input 
                  value={password} onChange={ev => setPassword(ev.target.value)}
                  type="password"
                  className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none"
                  placeholder="Enter password"
                />
              </div>

              <div className="mt-12">
                <button type="submit" className="bg-gradient-to-r from-thePointRed to-thePointPink w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center transition ease-in hover:shadow-xl duration-300">
                  Register
                </button>
              </div>

              <div className="mt-6 text-center">
                <Link to="/login" className="text-thePointPink hover:underline">
                  Already have an account? Log in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
