import React from 'react'
import { motion } from 'framer-motion'

export default function Button({label, style, onClick}) {

    const styles = {
        primaryShort: 'flex justify-center px-6 py-3 bg-black text-white rounded-full items-center font-medium shadow-lg transition',
        secondaryShort: 'flex justify-center px-6 py-3 bg-white text-neutral-400 rounded-full items-center font-medium shadow-md transition hover:shadow-xl hover:scale-105',
        primaryLong: 'flex justify-center px-6 py-3 w-[320px] bg-black text-white rounded-full items-center font-medium shadow-lg transition sm:hover:shadow-2xl sm:hover:scale-105',
        secondaryLong: 'flex justify-center px-6 py-3 w-[320px] bg-white text-neutral-400 rounded-full items-center font-medium shadow-md hover:shadow-xl hover:font-bold'
    }

    return (
        <div>
            <motion.button 
                onClick={onClick}
                whileHover={{scale: 1.05}}
                whiteTap={{scale: 0.9}}
                className={styles[style]}>
                {label}
            </motion.button>
        </div>
    )
}

// current hover anim on primary short: sm:hover:shadow-xl sm:hover:scale-105