import logo from '../assets/logo.png';
import { UserOutlined } from '@ant-design/icons';

function Header (){
    return(
        <div className="w-full flex justify-between h-[100px] bg-gray-200 px-3 items-center">
            <div className='flex items-center gap-2'>
                <div><img src={logo} alt='/' className='w-[70px]'/></div>
            <div className='text-amber font-serif text-3xl'>PM Education</div>
            </div>
            <div className="flex items-center mr-7 space-x-2 gap-5 ">
                <div>Pesandi Munasinghe</div>
                <div className='w-[70px] h-[70px] bg-white flex justify-center rounded-full'><UserOutlined className='text-3xl'/></div>
                <div><button className='font-bold border border-black p-3 hover:text-lg hover:text-gray-500 duration-200'>Logout</button></div>
            </div>
        </div>
    );
}

export default Header;