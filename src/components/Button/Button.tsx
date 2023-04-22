import React from 'react'
interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string,
    type?: "button" | "submit",
    children?: React.ReactNode
}
const Button = ({ title, className, type, children, ...rest }: IButton) => {
    return (
        <button  {...rest} type={type ? type : "button"} className={`shadow-md bg-cyan-500 hover:bg-cyan-600 py-2 px-4 rounded-md text-sm font-semibold outline-none text-white ${className}`}>
            {title}
            {children}
        </button>
    )
}

export { Button }
