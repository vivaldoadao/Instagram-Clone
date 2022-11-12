import { getProviders , signIn as SignIntoProvider} from "next-auth/react"
import Header from "../../components/Header"
function signIn({providers}) {
  return (
    <>
    <Header/>
    <div className=" flex flex-col items-center justify-center min-h-screen py-2 -mt56 px-14 text-center">
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
        <p className="font-xs italic">
            Esta não é ama versão real do instagram mas sim uma versão feita para prosito de estudo do Framework 
            <span> Next js</span>
        </p>

    <div className="mt-40">

    {Object.values(providers).map((provider) => (
        <div key={provider.name}>
        <button className="p-3 bg-white rounded-lg border-2  border-red-500 text-black" onClick={() => SignIntoProvider(provider.id, {
            callbackUrl: "/"
        })}>
            Fazer login com o {provider.name }
        </button>
        </div>
    ))}

</div>


    </div>
    
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders()
  
  return {
      props: {
        providers
      }
  }
}

export default signIn;
