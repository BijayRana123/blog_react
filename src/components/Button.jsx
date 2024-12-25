import React from 'react'

function Button({
    children,
    className,
    type="button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    ...props
}) {
  return (
    <button className={`py-2 px-4 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button