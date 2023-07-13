import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { IconButton } from '@mui/material';



 function Footer() {
   return (
    
    <footer className="fixed bottom-0 left-0 z-[100] w-full py-2 px-2 bg-bg-color flex items-center justify-between drop-shadow-heder-shadow">
     
     <FooterIcon Icon={HomeIcon} iconText="Home"/>
   
     <FooterIcon Icon={AppsIcon} iconText="Catagory"/>
      
     <FooterIcon Icon={PersonOutlineIcon} iconText="Profile"/>

   </footer>
   )
 }
 
 export default Footer
 
 const FooterIcon = ({Icon,iconText})=>(
  <IconButton sx={{
    padding:"4px",
    borderRadius:"5px",
    color:"#ecedee",
  }} >
    <div className=" text-gray-300 hover:text-[#080d1b] transition-all duration-300">
      <Icon/>
      <p className="text-xs">{iconText}</p>
    </div>
</IconButton>
 );