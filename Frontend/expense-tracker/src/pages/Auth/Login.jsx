import React from "react";
import Authlayout from "../../components/layouts/Authlayout";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../../components/Input/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Your login logic here
  };

  return (
    <Authlayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center p-6">
        <h3 className="text-2xl font-bold text-gray-800  mb-1">
          Welcome Back
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          Please enter your credentials to login.
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email Address"
            placeholder="john@example.com"
            type="email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            placeholder="Min 8 Characters"
            type="password"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          
          {error && (
            <p className="text-red-500 text-sm py-1 dark:text-red-400">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            LOGIN
          </button>

          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300 underline"
            >
              Signup
            </Link>
          </p>
        </form>
      </div>
    </Authlayout>
  );
};

export default Login;