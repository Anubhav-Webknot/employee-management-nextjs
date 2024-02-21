import Navbar from "../navbar/page"
export default function profile(){
    return(
        <>
        <Navbar/>
        <title>Profile</title>
        <main>
        <div
    class="bg-teal-50 max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 shadow-xl rounded-lg text-gray-900">
    <div class=" rounded-t-lg h-32 overflow-hidden">
        <img class="object-cover object-top w-full" src='https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='cover page'/>
    </div>
    <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img class="object-cover object-center h-32" src='https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Profile picture'/>
    </div>
    <div class="text-center mt-2">
        <h2 contenteditable="true" class="font-semibold">Your Name here</h2>
        <p class="text-gray-500">Role</p>
    </div>
    <ul class="py-4 mt-2 text-gray-700 flex items-center justify-around">  
        
        <li class="flex flex-col items-start justify-around">
            <p>E-mail address</p>
            <p contenteditable="true">example@gmail.com</p>
        </li>
        <li class="flex flex-col items-start justify-around">
            <p>Phone</p>
            <p contenteditable="true">+91 9999999999</p>
        </li>
    </ul>
     <ul class="py-4 mt-2 text-gray-700 flex items-center justify-around">
        
        <li class="flex flex-col items-start justify-around">
            <p>Location</p>
            <p contenteditable="true">Bengaluru, India</p>
        </li>
        <li class="flex flex-col items-start justify-around">
            <p>Experience (in yrs)</p>
            <p contenteditable="true">5</p>
        </li>
    </ul>
    <div class="p-4 border-t mx-8 mt-2">
        <button class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">Submit</button>
    </div>
</div>
        </main>
        
 </>
    )
    
}