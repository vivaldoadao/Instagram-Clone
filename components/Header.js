import Image from 'next/image'
import {SearchIcon , PlusCircleIcon,
   UserGroupIcon, 
   HeartIcon, 
   PaperAirplaneIcon,
    MenuIcon } from "@heroicons/react/outline"

    import {HomeIcon
    } from "@heroicons/react/solid"
import { useSession, signIn , signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { modalState } from "../atoms/modalAtom";



function Header() {
  const {data: session } = useSession();
  const [open , setOpen] = useRecoilState(modalState);
  const route = useRouter();

  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>

      <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>

        {/* Left */}

          <div onClick={()=> route.push('/')} className='relative hidden lg:inline-grid w-24  cursor-pointer'>
              <Image src="https://links.papareact.com/ocw" objectFit='contain'  layout="fill"  />
          </div>

          <div onClick={()=> route.push('/')} className='relative  w-10  lg:hidden flex-shrink-0 cursor-pointer'>
              <Image src="https://links.papareact.com/jjm" objectFit='contain'  layout="fill"  />
          </div>

           {/* Midle */}

           <div className='max-w-xs'>

           <div className='relative p-3 mt-1 rounded-md'>
             <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
               <SearchIcon className='h-5 w-5 text-gray-500'/>
             </div>
             <input className='bg-gray-50 block 
              w-full pl-10 
              sm:text-sm border-gray-300
               focus:ring-black
                focus:border-black rounded-md' type="text" placeholder='Procurar' />
           </div>

           </div>

        
          {/* Rigth */}
            <div className='flex items-center justify-end space-x-4'>

            <HomeIcon onClick={()=> route.push('/')} className='navBtn'/>
            <MenuIcon className='h-6 md:hidden cursor-pointer'/>

            {session ? (
              <>
                <div className='relative navBtn'>
                <PaperAirplaneIcon className='navBtn rotate-45'/>
                <div className='absolute -top-2 
                -right-1 
                text-xs bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white
                w-5'>3</div>
                </div>
                
                
                <PlusCircleIcon onClick={() => setOpen(true)} className='navBtn'/>
                <UserGroupIcon className='navBtn'/>
                <HeartIcon className='navBtn'/>
    
                <img onClick={signOut}  className='h-10  rounded-full cursor-pointer' src={session.user.image} alt="" />
                <p className='cursor-pointer' onClick={signOut} > {session.user.name}</p>
                </>
            ): (

              <button onClick={signIn}>Entrar</button>
            )}
            
            

            </div>
          


          <div>
       </div>

      </div>
    
    </div>
  );
}

export default Header;
