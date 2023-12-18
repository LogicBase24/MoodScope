    import Image from "next/image";
    const Intro = (): JSX.Element => {
    return (
        <div style={{ backgroundColor: '#FF8473', height: '100vh' }}>
        <div className="flex items-center justify-center h-screen">
        <Image
            src='/Group.png' 
            alt="Intro Image"
            height={350}
            width={350}

            className='mr-14 pr-5'  
        />
        <div>
        <h1 className="text-4xl mb-4 font-Lucida-Calligraphy "  style={{ fontFamily: 'Lucida Calligraphy, cursive' }}>
            MoodScope
            </h1>
        
        </div>
        </div>
        </div>
    );    
    };

    export default Intro;
