import NavbarDef from "../nabar/Navbar";


 function Product(){
    return (
        <>
        <NavbarDef />
        <div className="flex flex-col pb-10 bg-gradient-to-t from-teal-300 to-white-300 w-full h-screen">
            <h1 className="text-center mt-20 mb-8 font-inika font-bold tracking-wide text-4xl">Product Table</h1>
            <div class="absolute p-2 mb-8 mt-40 ml-12 flex flex-wrap">
            <button
                class="z-[2] inline-block rounded-r  bg-blue-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:z-[3] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                type="button"
                id="button-addon2">
                +Add User
            </button>
            </div>
            <div class="relative mb-4 justify-end items-end flex flex-wrap p-4">
            <div className="flex justify-end items-end">
                <input
                type="text"
                class="relative m-0 -mr-0.5     rounded-l  border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="🔍 Search.."
                aria-label="Recipient's username"
                aria-describedby="button-addon2" />
            </div>
            
            <button
                class="z-[2] inline-block rounded-r  bg-blue-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:z-[3] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                type="button"
                id="button-addon2">
                Button
            </button>
            </div>
            <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5 mt-2">
                <div className="py-2 inline-block min-w-full sm;px-6 lg:px-8">
                    <div className="overflow-hidden shadow-lg rounded-2xl">
                        <table className="min-w-full">
                            <thead className="g-gray-100 border-b">
                                <tr className="bg-gray-800 text-white">
                                    <th 
                                     scope="col"
                                     className="text-sm font-medium px-6 py-4 text-left"
                                    >№</th>
                                    <th
                                    scope="col"
                                    className="text-sm font-medium px-6 py-4 text-left">Name</th>
                                    <th 
                                     scope="col"
                                     className="text-sm font-medium px-6 py-4 text-left">Name
                                    </th>
                                    <th 
                                     scope="col"
                                     className="text-sm font-medium px-6 py-4 text-left">Name
                                    </th>
                                    <th 
                                     scope="col"
                                     className="text-sm font-medium px-6 py-4 text-left">Name
                                    </th>
                                    <th 
                                     scope="col"
                                     className="text-sm font-medium px-6 py-4 text-left">Name
                                    </th>
                                    <th
                                     colSpan={1} 
                                     scope="col"
                                     className="text-sm font-medium px-6 py-4 text-left">Name
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                               
                            
                                <tr >
                                    <td className=" text-gray-900 font-medium px-6 py-4 whitespace-nowrap">1</td>
                                    <td className="text-gray-900 font-medium px-6 py-4 whitespace-nowrap">Omadbek</td>
                                    <td className="text-gray-900 font-medium px-6 py-4 whitespace-nowrap">Omadbek</td>
                                    <td className="text-gray-900 font-medium px-6 py-4 whitespace-nowrap">Omadbek</td>
                                    <td className="text-gray-900 font-medium px-6 py-4 whitespace-nowrap">Omadbek</td>
                                    <td className="text-gray-900 font-medium px-6 py-4 whitespace-nowrap">Omadbek</td>
                                    <td><button  className=' py-2  bg-blue-600 px-8 pb-2 pt-2.5 rounded '>Edit</button></td>
    

                                </tr>
                                
                             
                            </tbody>
                                 
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
      );
 }
 export default Product