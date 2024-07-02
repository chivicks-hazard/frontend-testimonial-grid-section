const Jeanette = () => {
    return (
        <div className="p-7 rounded-xl shadow-lg flex flex-col bg-white">
            <div className="flex flex-row space-x-5">
                <img src="..\src\assets\images\image-jeanette.jpg" alt="Jeanette Harmon" className="rounded-full" />
                <div className="flex flex-col">
                    <h3 className="text-2xl font-bold">Jeanette Harmon</h3>
                    <p className='text-xl text-veryDarkGrayishBlue'>Verified Graduate</p>
                </div>
            </div>
            <h2 className="text-3xl font-medium mt-10">
                An overall wonderful and rewarding experience.
            </h2>

            <p className="text-xl mt-10">
                "Thank you for the wonderful experience! I now have a job I really enjoy, 
                and make a good living while doing something I love."
            </p>
        </div>
    )
}

export default Jeanette