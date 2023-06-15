import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Rudy&#39;s Nutrition</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        {/* Nav */}
        <nav className="bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-600">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
            <div>
              <Link href="/" className="flex items-center">
                <Image src="/images/blue-green-gradient-lighter-logo-icon.svg" className="h-8 mr-3" width={27.47} height={32} alt="Rudy&#39;s Nutrition Logo" />
                <span className="self-center text-xl md:text-2xl font-medium whitespace-nowrap text-white">Rudy&#39;s Nutrition</span>
              </Link>
            </div>
            <div className="flex md:order-2">
              <button
                type="button"
                onclick="window.location.href='#pricing';"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-px md:px-4 md:py-2 text-center mr-2 md:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              >
                Get started
              </button>
              <button data-collapse-toggle="navbar-sticky" type="button" id="menu-button" className="inline-flex items-center p-2 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-300 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="hidden w-full md:flex md:items-center md:w-auto ml-auto px-4" id="menu">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
                <li>
                  <a href="#services" className="block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700" aria-current="page">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#about" className="block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Nav */}

        {/* Hero */}
        <section className="bg-center bg-repeat bg-[url('/images/straightened-blue-shoes-weights-1920.png')] bg-gray-500 bg-blend-multiply">
          <div className="px-4 mx-auto max-w-screen-xl text-center pt-40 pb-24 lg:pt-72 lg:pb-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Begin Your Fitness Journey Today</h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Whether you want to pack on muscle or lose weight, our coach can give you the guidance you need to crush your goals.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a href="#pricing" className="sm:mx-0 mx-20 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-900">
                {" "}
                Get started{" "}
              </a>
              <a href="#services" className="sm:mx-0 mx-20 inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Learn more
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </section>
        {/* Hero */}

        {/* Services */}
        <section className="bg-gray-900 pb-24" id="services">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-lg mb-8 lg:mb-12">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white text-center">Here&#39;s how it works</h2>
              <p className="mb-5 font-light sm:text-xl text-gray-300">
                Nutrition: - 1 (5 - 10 min) phone call a week. To check in to see how the week is going, and to see if they have questions. - 1 (20 - 30 min) video call every other week. Go over some of the obstacles they might be having, and also see what else is going on with them. - Help go over
                meal planning and prepping when needed. <br />
                Online Training: - Go over what they want to accomplish with their body, and create a workout plan for them to follow. - Not a copy-and-paste work-out plan. I will create it with their specific goals in mind.
              </p>
            </div>
          </div>
        </section>
        {/* Services */}

        {/* Pricing Table */}
        <section className="bg-gray-900" id="pricing">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Health and fitness plans tailored to you</h2>
              <p className="mb-5 font-light sm:text-xl text-gray-300">Don’t worry. Every new member will receive a free consultation to determine which plan is right for you.</p>
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
              {/* Pricing Card */}
              <div className="flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg border shadow border-gray-600 xl:p-8 bg-gray-800 text-white">
                <h3 className="mb-4 text-2xl font-semibold">Nutrition</h3>
                <p className="font-light sm:text-lg text-gray-300">Calorie surplus? Calorie deficit? Nutrition is hard to make heads or tails of. Best for those that need a little help in the kitchen.</p>
                <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">$99</span>
                  <span className="text-gray-300">/month</span>
                </div>
                {/* List */}
                <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                    {/* Icon */}
                    <svg className="flex-shrink-0 w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>One to one coaching</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* Icon */}
                    <svg className="flex-shrink-0 w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Weekly check-ins</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* Icon */}
                    <svg className="flex-shrink-0 w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>New meal plan every month</span>
                  </li>
                </ul>
                <a href="#" className="sm:mx-0 mx-20 mt-auto inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                  Schedule your free call
                </a>
              </div>
              {/* Pricing Card */}
              <div className="flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg border shadow border-gray-600 xl:p-8 bg-gray-800 text-white">
                <h3 className="mb-4 text-2xl font-semibold">Training</h3>
                <p className="font-light sm:text-lg text-gray-300">Don&#39;t hit the gym without a plan. Our coach will create a workout plan specific to your needs every 6 weeks.</p>
                <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">$99</span>
                  <span className="text-gray-300">/month</span>
                </div>
                {/* List */}
                <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                    {/* Icon */}
                    <svg className="flex-shrink-0 w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>One to one coaching</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* Icon */}
                    <svg className="flex-shrink-0 w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Weekly check-ins</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* Icon */}
                    <svg className="flex-shrink-0 w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>New workout plan every 6 weeks</span>
                  </li>
                </ul>
                <a href="#" className="sm:mx-0 mx-20 mt-auto inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                  Schedule your free call
                </a>
              </div>
              {/* Pricing Card */}
              <div className="flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg border shadow border-gray-600 xl:p-8 bg-gray-800 text-white">
                <h3 className="mb-4 text-2xl font-semibold">Bundle and Save</h3>
                <p className="font-light sm:text-lg text-gray-300">Exercise is nothing without nutrition. Best for individuals who would like guidance and accountability on both fronts.</p>
                <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">$149</span>
                  <span className="text-gray-300">/month</span>
                </div>
                {/* List */}
                <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                    {/* Icon */}
                    <svg className="flex-shrink-0 w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>One to one coaching</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* Icon */}
                    <svg className="flex-shrink-0 w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Weekly check-ins</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* Icon */}
                    <svg className="flex-shrink-0 w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Optimal support from your coach</span>
                  </li>
                </ul>
                <a href="#" className="sm:mx-0 mx-20 mt-auto inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                  Schedule your free call
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Pricing Table */}

        {/* About */}
        <section className="bg-gray-900 pb-24" id="about">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-lg mb-8 lg:mb-12">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white text-center">Meet your Coach</h2>
              <p className="mb-5 font-light sm:text-xl text-gray-300">
                Nutrition: - 1 (5 - 10 min) phone call a week. To check in to see how the week is going, and to see if they have questions. - 1 (20 - 30 min) video call every other week. Go over some of the obstacles they might be having, and also see what else is going on with them. - Help go over
                meal planning and prepping when needed. <br />
                Online Training: - Go over what they want to accomplish with their body, and create a workout plan for them to follow. - Not a copy-and-paste work-out plan. I will create it with their specific goals in mind.
              </p>
            </div>
          </div>
        </section>
        {/* About */}

        {/* Footer */}

        <footer className="rounded-lg shadow bg-gray-900 m-4">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                <Image src="/images/blue-green-gradient-lighter-logo-icon.svg" className="h-8 mr-3" width={27.47} height={32} alt="Rudy&#39;s Nutrition Logo" />

                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Rudy&#39;s Nutrition</span>
              </a>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-300">
                <li>
                  <a href="#services" className="mr-4 hover:underline md:mr-6 ">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="mr-4 hover:underline md:mr-6">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#about" className="mr-4 hover:underline md:mr-6 ">
                    About
                  </a>
                </li>
                <li>
                  <button onClick={() => (window.location = "mailto:rudynutrition1@gmail.com")} className="hover:underline">
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
            <span className="block text-sm sm:text-center text-gray-300">
              © 2023{" "}
              <Link href="/" className="hover:underline">
                Rudy&#39;s Nutrition™
              </Link>
              . All Rights Reserved.
            </span>
          </div>
        </footer>
        {/* Footer */}
      </>
    </>
  );
}
