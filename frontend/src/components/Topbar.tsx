function Topbar(){

    return(
        
        <div className="sticky top-0 z-50 w-full bg-blue-900 backdrop-blur-sm shadow-lg border-b border-blue-800">

            
            <div className="grid grid-cols-10 items-center h-20 px-6 max-w-7xl mx-auto">

                
                <a href="/" className="col-start-1 col-span-2 flex items-center group">
                    <img 
                        src="/ip_logo.jpg" 
                        className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        alt="Logo"
                    />
                </a> 

               
                <a href="/teams" className="col-start-5 text-gray-300 font-bold uppercase tracking-widest text-sm hover:text-white transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                    Teams
                </a>

                
                <a href="/players" className="col-start-6 text-gray-300 font-bold uppercase tracking-widest text-sm hover:text-white transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                    Players
                </a>

            </div>
            
        </div>
    )
}

export default Topbar;