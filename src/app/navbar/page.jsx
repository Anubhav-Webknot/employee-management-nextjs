 import styles from "./page.module.css"
 import Link from "next/link"

 export default function navbar(){
    return (
        
           <nav className={ `${styles.navigationbar} text-gray-600 body-font`}>
  <div className="bg-teal-500 container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 hover:cursor-pointer">
      <span className="ml-3 text-xl font-bold">Webknot</span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/employee" className="mr-5 text-black font-semibold hover:text-white">Employee</Link>
      <Link href="/projects" className="mr-5 text-black font-semibold hover:text-white">Projects</Link>
      <Link href="/" className="mr-5 text-black font-semibold hover:text-white">Dashboard</Link>
      <div className="flex flex-row items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={14}
          width="12.25"
          viewBox="0 0 448 512"
        >
          {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
          <path
            fill="#000000"
            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
          />
        </svg>
        <Link href="/profile" className="mr-5 text-black font-semibold  hover:text-white">
          Profile
        </Link>
      </div>
    </nav>
    <button className="text-black inline-flex font-semibold items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      Logout
    </button>
  </div>
</nav>

    )
}