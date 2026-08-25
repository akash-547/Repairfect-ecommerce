"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/shared/Container";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan apni Authentication Logic integrate karen (e.g. NextAuth / Firebase / API Call)
    console.log("Sign In Data:", formData);
  };

  return (
    <div className="min-h-screen bg-[#0d0414] text-white flex items-center justify-center py-12 px-4 relative overflow-hidden">
      {/* Background Glow Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#A71EDB]/15 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <div className="max-w-[450px] mx-auto bg-[#130620]/90 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative z-10">
          
          {/* Logo & Header */}
          <div className="flex flex-col items-center text-center mb-8">
            <Link href="/" className="mb-4">
              <Image
                src="/assets/logo.png"
                alt="RepairFect Logo"
                width={150}
                height={50}
                className="object-contain"
                priority
              />
            </Link>
            <h1 className="text-2xl font-bold text-white tracking-wide">
              Welcome Back
            </h1>
            <p className="text-zinc-400 text-sm mt-1">
              Sign in to manage your bookings and orders
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            
            {/* Email Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-zinc-300 text-sm font-medium">
                Email Address
              </label>
              <div className="relative flex items-center">
                <FiMail className="absolute left-3.5 text-zinc-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full bg-[#1c0b2e] border border-purple-500/20 rounded-lg py-3 pl-11 pr-4 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-[#A71EDB] transition-colors"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label className="text-zinc-300 text-sm font-medium">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-[#A71EDB] hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative flex items-center">
                <FiLock className="absolute left-3.5 text-zinc-400 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-[#1c0b2e] border border-purple-500/20 rounded-lg py-3 pl-11 pr-11 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-[#A71EDB] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  {showPassword ? (
                    <FiEyeOff className="w-5 h-5" />
                  ) : (
                    <FiEye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-2 w-full bg-[#A71EDB] hover:bg-[#8e18bc] text-white font-medium py-3 rounded-lg transition-all duration-300 active:scale-[0.98] shadow-lg shadow-[#A71EDB]/25 cursor-pointer"
            >
              Sign In
            </button>
          </form>

          {/* Footer Navigation */}
          <div className="mt-6 text-center text-sm text-zinc-400">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-[#A71EDB] font-medium hover:underline"
            >
              Sign Up
            </Link>
          </div>

        </div>
      </Container>
    </div>
  );
}