import React, { useState } from "react";

function StudentLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Student Login Data:", formData);
    alert(
      "Login submitted successfully!\n\n(This is frontend only. Backend integration required to authenticate.)"
    );
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E0F7FA] to-[#FFF9AF] px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 sm:p-10 space-y-6"
      >
        <h2 className="text-3xl font-bold text-[#154D71] text-center mb-6">
          Student Login
        </h2>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#154D71] focus:border-[#154D71] transition"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#154D71] focus:border-[#154D71] transition"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full rounded-lg bg-[#154D71] text-white py-3 font-semibold text-lg hover:bg-[#1C6EA4] active:scale-95 transition transform shadow-md"
        >
          Login
        </button>

        {/* Optional: Forgot password link */}
        <div className="text-center mt-2">
          <a href="#" className="text-sm text-[#1C6EA4] hover:underline">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
}

export default StudentLogin;
