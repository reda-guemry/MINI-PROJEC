

function  Navbar() {

    const storename = "Fake Store Maroc" 


    return (
        <>
            <nav className="bg-blue-600 text-white p-4 shadow-md flex justify-between items-center">
            
            <h1 className="text-2xl font-bold tracking-wider">
                {storename}
            </h1>

            <div className="font-semibold cursor-pointer hover:text-blue-200 transition">
                🛒 store (0)
            </div>

        </nav>
        </>
    )

}


export default Navbar ; 
