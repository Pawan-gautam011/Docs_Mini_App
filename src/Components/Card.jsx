import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({data, refrence}) => {
  return (
    <motion.div drag dragConstraints={refrence} whileDrag={{scale : 1.2}} className=' relative w-60 h-72 rounded-[40px] bg-zinc-200 px-8 py-10 overflow-hidden flex-shrink-0'>
    <FaRegFileAlt cursor="pointer" />
    <p className='rext-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
    <div className='footer absolute bottom-0 w-full left-0'> 
    <div className='flex items-center justify-between mb-5 py-3 px-8 '>
        <h5>{data.filesize}</h5>
        <span className='w-7 h-7 bg-zinc-900 rounded-full flex items-center justify-center'>
            {data.close? <IoClose color='#fff' cursor="pointer" /> : <MdOutlineFileDownload size=".7em" color='#fff' cursor="pointer"/>  }
        
        </span>
    </div>

   {
    data.tag.isOpen && (

<div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
        <h3 className='text-sm font-semibold cursor-pointer'>{data.tag.tagTitle}</h3>
        </div>
    )}

   
    </div>
    </motion.div>
  )
}

export default Card