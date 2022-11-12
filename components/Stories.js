import { useSession, signIn , signOut } from 'next-auth/react';
import Story from './Story';


function Stories() {
  const {data: session } = useSession();
    const suggestions = [
        {src: "https://links.papareact.com/f0p" , name:"Jeff Bezoz"},
        {src: "https://links.papareact.com/kxk" , name:"Elon Musk"},
        {src: "https://links.papareact.com/kxk" , name:"Elon Musk"},
        {src: "https://links.papareact.com/snf" , name:"Mark"},
        {src: "https://links.papareact.com/d0c" , name:"Harry"},
        {src: "https://links.papareact.com/6gg" , name:"The Queen"},
        {src: "https://links.papareact.com/6gg" , name:"The Queen"},
        {src: "https://links.papareact.com/6gg" , name:"The Queen"},
        
        {src: "https://links.papareact.com/r57" , name:"James Bond"},
        {src: "https://links.papareact.com/r57" , name:"James Bond"},
        {src: "https://links.papareact.com/r57" , name:"James Bond"},
        {src: "https://links.papareact.com/r57" , name:"James Bond"},
    
    ];
    
  return (
    <div className='flex space-x-2 p-6
     bg-white mt-8
      border-gray-200  
      border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
        {session && (
          <Story src={session.user.image} name={session.user.username} />
        )}
      {suggestions.map((suggestion)=>(
            <Story key={suggestion.src} src={suggestion.src} name={suggestion.name}/>
        ))}
    </div>
  );
}

export default Stories;
