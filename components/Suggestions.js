import Suggestion from "../components/suggestion"

function Suggestions() {
    const suggestions = [
     
        {src: "https://links.papareact.com/kxk" , name:"Elon Musk", caption:"Tesla"},
       
        {src: "https://links.papareact.com/snf" , name:"Mark", caption:"Facebook"},
        {src: "https://links.papareact.com/d0c" , name:"Harry", caption:"Hollywood"},
        {src: "https://links.papareact.com/6gg" , name:"The Queen", caption:"Inglaterra"},
   
        {src: "https://links.papareact.com/6gg" , name:"The Queen", caption:"Inglaterra"},
        
        
    
    ];
  return (
    <div className="mt-4 ml-10">
        <div className="flex justify-between text-sm mb-5">
            <h3 className="text-sm font-bold text-gray-400">Sugestões para ti</h3>
            <button className="text-gray-600 font-semibold">Ver todos</button>


        </div>

        
        {suggestions.map((suggestion)=>(
            <Suggestion key={suggestion.src} src={suggestion.src} name={suggestion.name} caption={suggestion.caption}/>
        ))}
        
    </div>
  );
}

export default Suggestions;
