import React from 'react'

export default function Button({label, style}) {

    const styles = {
        primaryShort: 'flex justify-center px-6 py-3 bg-black text-white rounded-full items-center font-medium shadow-lg transition sm:hover:shadow-xl sm:hover:scale-105',
        secondaryShort: 'flex justify-center px-6 py-3 bg-white text-neutral-400 rounded-full items-center font-medium shadow-md transition hover:shadow-xl hover:scale-105',
        primaryLong: 'flex justify-center px-6 py-3 w-[320px] bg-black text-white rounded-full items-center font-medium shadow-lg transition sm:hover:shadow-2xl sm:hover:scale-105',
        secondaryLong: 'flex justify-center px-6 py-3 w-[320px] bg-white text-neutral-400 rounded-full items-center font-medium shadow-md hover:shadow-xl hover:font-bold'
    }

    return (
        <div>
            <button className={styles[style]}>
                {label}
            </button>
        </div>
    )
}
