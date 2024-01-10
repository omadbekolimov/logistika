import axios from "axios";
import { useEffect, useState } from "react";
import { byIdObj, config, setConfig, url } from "../api";
import { toast } from "react-toastify";
import NavbarDef from "../nabar/Navbar";
import { Icon } from "@iconify/react";


function Users(){
     // Modalni ochish va yopish uchun holat
    const [isLoading, setIsLoading] = useState(false);
    const[users,setUser] = useState([]);
    const [user,setUserObj] = useState('')
    const [userTable, setUserTable] = useState([]);
    const [addModal, setAddModal] = useState(false);
    const [editModal , setEditModal] = useState (false);
    


   
    const openEditModal = () => setEditModal(!editModal)



    useEffect(() => {
        getUser();
    }, []);



    // useEffect(() => {
    //     axios.get(`${url}user`)
    //     .then(res =>setUser(res.data))
    // },[]);
    // console.log(setUser);
  
    // GetUser
    const getUser = () => {
        axios.get(url + "user", config)
            .then((res) => {
                setUser(res.data.body)
                
            })
            .catch((err) => console.log(err))
    }
    
    
   
    function editUSer(){
    
        axios.put(`${url}user/${user.id}`,{
            name :byIdObj("name").value,
            phoneNumber : byIdObj("phoneNumber").value,
            password : byIdObj("password").value
        }).then(res => {toast.success("User ma'lumotlari o'zgartirildi");
         openEditModal()
         setIsLoading(false)
        })
        .catch(err => toast.error("User ma'lumotlari o'zgartirilmadi"));
    }
    function addUser(){
        axios.put(`${url}user/${user.id}`,{
            name :byIdObj("name").value,
            phoneNumber : byIdObj("phoneNumber").value,
            password : byIdObj("password").value
        }).then(res => {toast.success("User ma'lumotlari o'zgartirildi");
         openEditModal()
         setIsLoading(false)
        })
        .catch(err => toast.error("User ma'lumotlari o'zgartirilmadi"));
    } 
    
     // Modalni ochish va yopish uchun funksiyalar

  const openAddModal = () => {
    setAddModal(true);
  };

  const closeModal = () => {
    setAddModal(false);
  };

  const openEdit = () => {
    setEditModal(true);
  };

  const closeEdit = () => {
    setEditModal(false);
  };


      return (
        
        
        <>
        <NavbarDef/>
        <div className="flex flex-col pb-10 bg-gradient-to-t from-teal-300 to-white-300 w-full h-screen">
            <h1 className="text-center mt-20 mb-8 font-inika font-bold tracking-wide text-4xl">User Table</h1>
            <div className="absolute p-2 mb-8 mt-40 ml-12 flex flex-wrap">
            <button
                class="z-[2] inline-block rounded-r  bg-blue-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:z-[3] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                type="button"
                id="button-addon2"
                onClick={openAddModal}>
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
                                     className="text-sm font-medium px-6 py-4 text-left">PhoneNumber
                                    </th>
                                    <th 
                                     scope="col"
                                     className="text-sm font-medium px-6 py-4 text-left">Password
                                    </th>
    
                                    <th
                                     colSpan={2} 
                                     scope="col"
                                     className="text-sm font-medium px-6 py-4 text-left">Info
                                    </th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                            {users.map((item,i) =>
                                <tr key={i} >
                                    <td className=" text-gray-900 font-medium px-6 py-4 whitespace-nowrap bg-white">{i+1}</td>
                                    <td className="text-gray-900 font-medium px-6 py-4 whitespace-nowrap bg-white">{item.name}</td>
                                    <td className="text-gray-900 font-medium px-6 py-4 whitespace-nowrap bg-white">{item.phoneNumber}</td>
                                    <td className="text-gray-900 font-medium px-6 py-4 whitespace-nowrap bg-white">{item.password}</td>
                                    <td className="bg-white"><button  className=' py-2  bg-blue-600 px-8 pb-2 pt-2.5 rounded  '>Info</button></td>
                                    <td className="bg-white"><button  className=' py-2  bg-blue-600 px-8 pb-2 pt-2.5 rounded  'onClick={() => {setUserObj(item); openEditModal()}}>Edit</button></td>
                                    
                                </tr>
                            )}
                            </tbody>     
                        </table>  
                         {/* Modal */}
      {editModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="modal bg-white rounded-xl overflow-hidden shadow-2xl">
            <div className="flex justify-center items-center">
              <h2 className="text-center mt-10 mb-8 ml-28 font-inika font-bold tracking-wide text-4xl ">
                Edit User
              </h2>
              <button
                onClick={closeEdit}
                className="text-gray-400 m-2 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            {/* Modal body */}
            <div className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    defaultValue={user.name}
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Name"
                   
                  />
                </div>
                <div className="col-span-2 sm:col-span-2">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    PhoneNumber
                  </label>
                  <input
                    type="number"
                    defaultValue={users.phoneNumber}
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full focus:ring-primary-600 focus:border-primary-600 block  p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="PhoneNumber"
                  />
                </div>
               
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-3 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="text"
                    defaultValue={user.password}
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Password"
                    required=""
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button 
                        onClick={closeEdit}
                         id="loginBtn"
                         className={`py-2  bg-blue-600 ml-2 px-6 pb-2 pt-2.5 rounded
                        ${isLoading ?  "opacity-50 cursor-not-allowed" : ""}`}
                         disabled={isLoading}>
                         {isLoading ?
                             <span className=' flex justify-center items-center'>
                                 Close
                                 <Icon icon="eos-icons:bubble-loading" className='ml-3' width="25" />
                             </span>
                             : "Close"
                         }

                        </button>
                        <button 
                        onClick={ editUSer()}
                         id="editUserbtn"
                         className={`py-2  bg-blue-600 ml-2 px-6 pb-2 pt-2.5 rounded
                        ${isLoading ?  "opacity-50 cursor-not-allowed" : ""}`}
                         disabled={isLoading}>
                         {isLoading ?
                             <span className=' flex justify-center items-center'>
                                 Save
                                 <Icon icon="eos-icons:bubble-loading" className='ml-3' width="25" />
                             </span>
                             : "Save"
                         }


                        </button>
              </div>
            </div>
          </div>
        </div>
      )}

       {addModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal bg-white rounded-xl overflow-hidden shadow-2xl">
            <div className="flex justify-center items-center  ml-36">
              <h2 className="text-center mt-10 mb-8  font-inika font-bold tracking-wide text-4xl ">
                Add User
              </h2>
              <button
                onClick={closeEdit}
                className="text-gray-400 m-2 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            {/* Modal body */}
            <div className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Name"
                    required=""
                  />
                </div>
                <div className="col-span-2 sm:col-span-2">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    PhoneNumber
                  </label>
                  <input
                    type="number"
                    
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full focus:ring-primary-600 focus:border-primary-600 block  p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="PhoneNumber"
                  />
                </div>
               
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-3 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="text"
                    defaultValue={user.password}
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Password"
                    required=""
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  className="py-2  bg-red-600 ml-2 px-6 pb-2 pt-2.5 rounded "
                  onClick={closeModal}
                >
                  Close
                </button>
                <button
                
                  onClick={() => {
                    
                    addUser();
                    closeModal();
                  }}
                  className="py-2  bg-blue-600 ml-2 px-6 pb-2 pt-2.5 rounded "
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
                    </div>
                </div>
            </div>
        </div>
        </>
      );
 }     

export default Users