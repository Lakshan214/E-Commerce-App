
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import { IconButton } from '@mui/material';
const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-[100] w-full py-4 px-2 bg-bg-color flex items-center justify-between drop-shadow-heder-shadow" >
   
       {/* h left */}
       <div className="flex items-center "> 
       <IconButton sx={{ color:"#91bfe7", }}>
       <MenuIcon className=' text-gray-300 hover:text-[#080d1b] transition-all duration-300"' />
       </IconButton>
         
       
          <h1 className="ml-2 text-sm font-bold">LR<span className="text-[#e8e8f0]">DEV</span></h1>
 
          <div className=" ml-3 overflow-hidden flex items-center rounded-full bg-[#ebebf0]">
            <input type='text' placeholder="search" className="hidden sm:inline-block ml-1 outline-none p-2 font-semibold text-sm bg-inherit" />
            <IconButton>
                            
          <SearchIcon sx={{
            color:"#243c5a",
           }} />
            </IconButton>
          
          </div>

       </div>
       {/* h right*/}
       <IconButton sx={{ color:"#91bfe7", }}>
       <ShoppingCartCheckoutRoundedIcon className=' text-gray-300 hover:text-[#080d1b] transition-all duration-300"' />
       </IconButton>
      
 
    </header>
  )
}

export default Header
