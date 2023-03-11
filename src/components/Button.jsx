import React from 'react'

export default function Button({label, style}) {

    const styles = {
        primary: 'flex px-6 py-3 bg-black text-white rounded-full items-center font-medium shadow-lg transition hover:shadow-xl hover:scale-105',
        secondary: 'flex px-6 py-3 bg-white text-black border border-neutral-900 rounded-full items-center font-medium shadow-lg hover:shadow-xl hover:font-bold'
    }

    return (
        <div>
            <button className={styles[style]}>
                {label}
            </button>
        </div>
    )
}
