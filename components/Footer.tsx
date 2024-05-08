import React from 'react'

const Footer = () => {
  return (
    <footer
      className="w-full h-[192px] py-[37px]
      rounded-[24px] flex flex-col items-center justify-center
      bg-white bg-opacity-20 px-5"
    >

      <p className="text-sm font-[500px] mt-5">©️{new Date().getFullYear()}</p>
      <p className="text-sm font-[500px]">With Love ❤️ by Rishabh and Nitin</p>
    </footer>
  )
}

export default Footer
