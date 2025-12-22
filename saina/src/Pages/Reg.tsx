import React from "react";

function Reg() {
  // Register
  const openStudentRegister = () => window.open("/register/student", "_blank");
  const openMentorRegister = () => window.open("/register/mentor", "_blank");

  // Login
  const openStudentLogin = () => window.open("/login/student", "_blank");
  const openMentorLogin = () => window.open("/login/mentor", "_blank");
  const openAdminLogin = () => window.open("/login/admin", "_blank");

  return (
    <div className="flex min-h-screen justify-center items-start pt-20 sm:pt-24 md:pt-28 lg:pt-32 px-4 gap-8 flex-wrap">
      {/* Register Button */}
      <div className="relative group">
        <button className="w-full sm:w-auto rounded-lg bg-[#FFF9AF] px-6 py-3 text-[#154D71] font-medium">
          Register
        </button>
        <div className="absolute left-0 mt-2 w-full sm:w-48 rounded-md bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
          <button
            onClick={openStudentRegister}
            className="block w-full px-4 py-2 text-left text-sm text-[#154D71] hover:bg-[#FFF9AF]"
          >
            Register as Student
          </button>
          <button
            onClick={openMentorRegister}
            className="block w-full px-4 py-2 text-left text-sm text-[#154D71] hover:bg-[#FFF9AF]"
          >
            Register as Mentor
          </button>
        </div>
      </div>

      {/* Login Button */}
      <div className="relative group">
        <button className="w-full sm:w-auto rounded-lg bg-[#FFF9AF] px-6 py-3 text-[#154D71] font-medium">
          Login
        </button>
        <div className="absolute left-0 mt-2 w-full sm:w-48 rounded-md bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
          <button
            onClick={openStudentLogin}
            className="block w-full px-4 py-2 text-left text-sm text-[#154D71] hover:bg-[#E0F7FA]"
          >
            Login as Student
          </button>
          <button
            onClick={openMentorLogin}
            className="block w-full px-4 py-2 text-left text-sm text-[#154D71] hover:bg-[#E0F7FA]"
          >
            Login as Mentor
          </button>
          <button
            onClick={openAdminLogin}
            className="block w-full px-4 py-2 text-left text-sm text-[#154D71] hover:bg-[#E0F7FA]"
          >
            Login as Admin
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reg;
