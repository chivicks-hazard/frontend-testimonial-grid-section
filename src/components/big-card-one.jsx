import danielImage from '../assets/images/image-daniel.jpg';

const Daniel = () => {
    return (
        <div className="row-span-2 col-span-1 lg:col-span-2 lg:row-span-1 p-7 rounded-xl shadow-lg bg-moderateViolet flex flex-col">
            <div className="flex flex-row space-x-5">
                <img src={danielImage} alt="Daniel Clifford" className="rounded-full" />
                <div className="flex flex-col">
                    <h3 className="text-2xl font-bold text-lightGrayishBlue">Daniel Clifford</h3>
                    <p className='text-xl text-lightGray'>Verified Graduate</p>
                </div>
            </div>
            <h2 className="text-lightGray text-3xl font-medium mt-10">
                I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. 
                I honestly feel I got every penny’s worth.
            </h2>

            <p className="text-lightGray text-xl mt-10">
                “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up 
                for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
                The next 12 weeks was the best - and most grueling - time of my life. Since completing 
                the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
            </p>
        </div>
    )
}

export default Daniel