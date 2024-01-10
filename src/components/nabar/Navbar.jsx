import { Link } from 'react-router-dom';
import brand from '../assets/logistika.jpg';

const NavbarDef = () =>{
    return(
        <div className="  bg-white-200 flex justify-between items-center sticky top-0">
            <Link to = "/home">
                <img src={brand} alt="brand"  className='w-[250px] h-[120px]  ml-2'/>
            </Link>
             <h1 className='font-inika font-bold mr-10 text-xxl text-black'>Logistika</h1>
        </div>
    )
}
export default NavbarDef