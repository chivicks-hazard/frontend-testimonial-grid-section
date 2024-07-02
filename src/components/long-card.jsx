import React from 'react'

const Kira = () => {
    return (
        <div className='row-span-2 p-7 rounded-xl shadow-lg bg-white flex flex-col'>
            <div className="flex flex-row space-x-5">
                <img src="..\src\assets\images\image-kira.jpg" alt="Kira Whittle" className="rounded-full" />
                <div className="flex flex-col">
                    <h3 className="text-2xl font-bold">Kira Whittle</h3>
                    <p className='text-xl text-veryDarkGrayishBlue'>Verified Graduate</p>
                </div>
            </div>
            <h2 className="text-veryDarkBlackishBlue text-3xl font-medium mt-10">Such a life-changing experience. Highly recommended!</h2>

            <p className="text-veryDarkGrayishBlue text-xl mt-10">
                “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from
                professionals who can help me learn programming step by step. I was encouraged to enroll by a former
                student of theirs who can only say wonderful things about the program. The entire curriculum and staff
                did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team
                project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial
                could ever have. In fact, I’ve often referred to it during interviews as an example of my developent
                experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers.
                100% recommend! ”
            </p>
        </div>
    )
}

export default Kira