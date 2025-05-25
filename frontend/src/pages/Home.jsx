"use client";

import React from "react";
import { Link } from "react-router-dom";
import { ChevronUp } from "lucide-react";
import useAuth from "../hooks/useAuth";
import Heroimg from "../components/Heroimg";

export default function Home() {
  const { user, isLoading } = useAuth();;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  if (isLoading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
              <div className="rounded-full bg-white p-1 px-2">
                <p className="text-sm font-medium">Get started</p>
              </div>
              <p className="text-sm font-medium">Join Us...</p>
            </div>
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
              Your only Task Manager
            </h1>
            <p className="mt-8 text-lg text-gray-700">
              Get started and begin your journey to manage all your tasks.
              Perfect for individuals and organizations.
            </p>
            <div className="mt-8 flex items-start space-x-4">
              {user ? (
                <Link
                  to="/dashboard"
                  className="rounded-md bg-blue-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                >
                  Go to Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="rounded-md border border-green-600 px-6 py-2 text-sm font-semibold text-green-600 shadow-sm hover:bg-green-600 hover:text-white"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="rounded-md bg-green-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <Heroimg width="1000px" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto my-32 max-w-7xl px-2 lg:px-8">
        <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          {[
            {
              title: "Task tracking",
              desc: "Built-in workflows for assignment and tracking across teams.",
              color: "bg-blue-100",
              iconColor: "text-blue-600",
              path: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              ),
            },
            {
              title: "Task scheduling",
              desc: "Define milestones needed to complete your projects.",
              color: "bg-orange-100",
              iconColor: "text-orange-600",
              path: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              ),
            },
            {
              title: "Time management",
              desc: "Plan and prioritize tasks based on urgency and importance.",
              color: "bg-green-100",
              iconColor: "text-green-600",
              path: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              ),
            },
            {
              title: "Task planning",
              desc: "Consolidate all your tasks in one place efficiently.",
              color: "bg-red-100",
              iconColor: "text-red-600",
              path: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              ),
            },
          ].map(({ title, desc, color, iconColor, path }, i) => (
            <div key={i}>
              <div
                className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full ${color}`}
              >
                <svg
                  className={`h-9 w-9 ${iconColor}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {path}
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">{title}</h3>
              <p className="mt-4 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs Section */}
      <section className="mx-auto max-w-7xl bg-gray-50 px-2 py-10 md:px-0">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-black">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
            Find answers to common queries about using the Task Management
            System.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
          <div className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200">
            <button
              type="button"
              className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
              onClick={toggleMenu}
            >
              <span className="text-lg font-semibold text-black">
                How do I get started?
              </span>
              {isMenuOpen ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronUp className="rotate-180 h-5 w-5 text-gray-500" />
              )}
            </button>
            {isMenuOpen && (
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p className="text-gray-500">
                  Simply create an account, log in, and start creating tasks and
                  managing your workflow.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
