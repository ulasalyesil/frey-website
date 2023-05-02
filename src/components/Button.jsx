import React from 'react'
import { motion } from 'framer-motion'

export default function Button({label, buttonStyle, onClick, type}) {

    const styles = {
        primaryShort: 'flex justify-center px-6 py-3 bg-black text-white rounded-full items-center font-medium shadow-lg transition',
        secondaryShort: 'flex justify-center px-6 py-3 bg-white text-neutral-400 rounded-full items-center font-medium shadow-md transition ease-in duration-250 hover:shadow-xl',
        primaryLong: 'flex justify-center px-6 py-3 w-[320px] bg-black text-white rounded-full items-center font-medium shadow-lg transition sm:hover:shadow-2xl ease-in duration-250',
        secondaryLong: 'flex justify-center px-6 py-3 w-[320px] bg-white text-neutral-400 rounded-full items-center font-medium shadow-md hover:shadow-xl hover:font-bold',
        primarySmall: 'flex justify-center px-3 py-1.5 text-xs bg-black text-white rounded-full items-center'
    }

    return (
        <div>
            <motion.button 
                onClick={onClick}
                whileHover={{scale: 1.05}}
                whiteTap={{scale: 0.9}}
                className={styles[buttonStyle]}
                type={type}
                >
                {label}
            </motion.button>
        </div>
    )
}

// current hover anim on primary short: sm:hover:shadow-xl sm:hover:scale-105