export default function Header() {
    return (
        <>
            <header>
                <div className="2xl:justify-center justify-between flex flex-row 2xl:px-6 xl:pb-2 bg-black ">
                    <div className=" pt-4 pr-6">
                        <svg className=" xl:hidden h-6 w-20 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="4" y1="6" x2="20" y2="6" />  <line x1="4" y1="12" x2="20" y2="12" />  <line x1="4" y1="18" x2="20" y2="18" /></svg>
                    </div>

                    <div className="xl:pt-4 p-2">
                        <div className=""><img
                            src="image/star_tech_logo.png "
                            className="xl:h-12 h-10 "
                            alt="..." />
                        </div>
                    </div>

                    <div className="basis-auto flex xl:pt-4 pr-4">
                        <div className="p-1 relative text-gray-600 ">
                            <input className="hidden xl:block xl:bg-white xl:h-10 xl:px-5 xl:pr-96 xl:rounded-md xl:text-sm xl:focus:outline-none"
                                type="search" name="search" placeholder="Search " />
                            <button type="submit" className=" absolute right-0 top-0 p-3">
                                <svg className="hidden xl:block  h-6 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>

                        <div className=" basis-auto xl:flex justify- gap-3 ">
                            <div className="pt-3"> <svg className=" hidden xl:block h-6 w-6  text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polyline points="20 12 20 22 4 22 4 12" />  <rect x="2" y="7" width="20" height="5" />  <line x1="12" y1="22" x2="12" y2="7" />  <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />  <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" /></svg></div>
                            <div className="hidden xl:block">
                                <p className="text-stone-50 ">Offers</p>
                                <p className="truncate text-xs text-stone-50 ">Latest Offers</p>
                            </div>
                        </div>
                        <div className=" xl:flex justify-between gap-5 pl-3">
                            <div className="pt-3">
                                <svg className="hidden xl:block h-6 w-6 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg></div>
                            <div className="hidden xl:block">
                                <p className="text-stone-50 truncate ">Laptop $ PC</p>
                                <p className="truncate text-xs text-stone-50 ">Special Deals</p>
                            </div>
                        </div>

                        <div className=" xl:flex justify-between gap-5 pl-3">
                            <div className="pt-3">
                                <svg className="hidden xl:block h-6 w-6 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />  <circle cx="12" cy="7" r="4" /></svg>
                            </div>
                            <div className="hidden xl:block">
                                <p className="text-stone-50 truncate ">Account</p>
                                <p className="truncate text-xs text-stone-50  ">
                                    <span className="hover:text-red-500" >Register</span> or <span className="hover:text-red-500">Login</span></p>

                            </div>
                        </div>
                        <div className=" xl:flex justify-between gap-5 pl-3">
                            <button type="button" className=" hidden xl:block truncate focus:outline-none text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-900">PC Builder</button>
                        </div>

                        <div className="pt-5 pr-1 ">
                            <svg className=" xl:hidden h-6 w-6 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>
                        </div>
                        <div className="pt-5 bg">
                            <svg className="xl:hidden h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
}
