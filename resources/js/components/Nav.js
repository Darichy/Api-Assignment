import React from "react";

export default  function Nav() {
    return (
        <>
        <div className="flex justify-between shadow-md mb-3 py-7 px-6">
                <div>
                    input logo
                </div> 
                <ul>
                    <li >

                    <a href="#" className="mr-4 font-semibold flex justify-between">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="full" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    <span className="ml-2">Register</span>
                    </a> 
                    </li>
                </ul>
                    
         </div>
        
        </>
    )
}