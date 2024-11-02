import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
//variables
export default function RegisterPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

//state variables for setting error when no value in textbox
  const [nameError, setNameError] = useState('');
  const [lastnameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  async function registerUser(ev) {
    ev.preventDefault();


    setNameError('');
    setLastNameError('');
    setEmailError('');
    setPasswordError('');

    let hasError = false;
    //ensuring there is a value in the textbox
    if (!name) {
      setNameError("Name is required");
      hasError = true;
    }
    if (!lastname) {
      setLastNameError("Last name is required");
      hasError = true;
    }
    if (!email) {
      setEmailError("Email is required");
      hasError = true;
    }
    if (!password) {
      setPasswordError("Password is required");
      hasError = true;
    }

    if (hasError) return; 
//posting data using URL to database
    try {
      const response = await axios.post("http://localhost:5001/routes/auth/register", {
        name,
        lastname,
        email,
        password,
      });

      console.log("User registered successfully:", response.data);
      //navigate handle when clicking submit goes to loginpage 
      navigate("/login");

      
      setName('');
      setLastName('');
      setEmail('');
      setPassword('');
      //error handling
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
                    className={`w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none ${nameError ? 'border-red-500' : ''}`} 
                    placeholder="First name"
                  />
                  {nameError && <p className="text-red-500 text-xs">{nameError}</p>} {/* Error message */}
                </div>
                <div>
                  <label className="text-gray-800 text-xs block mb-2">Last Name</label>
                  <input 
                    value={lastname} onChange={ev => setLastName(ev.target.value)}
                    type="text"
                    className={`w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none ${lastnameError ? 'border-red-500' : ''}`} 
                    placeholder="Last name"
                  />
                  {lastnameError && <p className="text-red-500 text-xs">{lastnameError}</p>} {/* Error message */}
                </div>
              </div>
             
              <div>
                <label className="text-gray-800 text-xs block mb-2">Email</label>
                <input 
                  value={email} onChange={ev => setEmail(ev.target.value)}
                  type="email"
                  className={`w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none ${emailError ? 'border-red-500' : ''}`}
                  placeholder="Enter email"
                />
                {emailError && <p className="text-red-500 text-xs">{emailError}</p>} {/* Error message */}
              </div>
              <div className="mt-4">
                <label className="text-gray-800 text-xs block mb-2">Password</label>
                <input 
                  value={password} onChange={ev => setPassword(ev.target.value)}
                  type="password"
                  className={`w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none ${passwordError ? 'border-red-500' : ''}`}
                  placeholder="Enter password"
                />
                {passwordError && <p className="text-red-500 text-xs">{passwordError}</p>} {/* Error message */}
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