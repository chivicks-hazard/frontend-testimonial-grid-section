import jonathanImage from '../assets/images/image-jonathan.jpg';

const Jonathan = () => {
    return (
        <div className="p-7 rounded-xl row-span-1 col-span-1 shadow-lg flex flex-col bg-veryDarkGrayishBlue">
            <div className="flex flex-row space-x-5">
                <img src={jonathanImage} alt="Jonathan Walters" className="rounded-full w-100" />
                <div className="flex flex-col">
                    <h3 className="text-2xl font-bold text-lightGrayishBlue">Jonathan Walters</h3>
                    <p className='text-xl text-lightGray'>Verified Graduate</p>
                </div>
            </div>
            <h2 className="text-lightGrayishBlue text-3xl font-medium mt-10">
                The team was very supportive and kept me motivated.
            </h2>

            <p className="text-lightGray text-xl mt-10 leading-tight">
                "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
                for a big company. This was one of the best investments I’ve made in myself."
            </p>
        </div>
    )
}

export default Jonathan