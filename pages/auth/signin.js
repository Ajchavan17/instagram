import { getProviders, signIn as signInToProvider } from "next-auth/react";
import Header from "../../components/Header";

function signIn({ providers }) {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-40 px-14 text-center border-black">
                <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
                <p className="">This app is only for the trial and education purpose only.</p>
                <div className="mt-20">
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <button className="p-2 bg-blue-500 rounded font-bold text-white" onClick={() => signInToProvider(provider.id, { callbackUrl: "/" })}>
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}

                </div>
            </div>

        </>
    )
}


export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}

export default signIn
