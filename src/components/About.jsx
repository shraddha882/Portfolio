import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-yellow-200 to to-pink-400 ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-white text-white">About</p>
        </div>
        <p className="text-xl mt-20 text-white">Welcome to my portfolio! My name is Shraddha Bajpai, and I am a passionate programmer with a strong interest in software development and web development. With a love for problem-solving and a drive for innovation, I thrive in the dynamic and ever-evolving world of technology.</p>
        <br />

        <p className='text-xl text-white'>In the realm of software development, I find great joy in creating efficient and robust solutions to complex problems. I enjoy the process of analyzing requirements, designing elegant architectures, and implementing clean and maintainable code. With each project, I strive to deliver high-quality software that meets the needs of users and exceeds expectations.</p>
      </div>
    </div>
  )
}

export default About
