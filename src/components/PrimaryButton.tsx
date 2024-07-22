import React, { ButtonHTMLAttributes } from 'react'
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
const PrimaryBTN: React.FC<ButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button
      className={
        'text-white flex place-items-center justify-center gap-x-2 rounded-lg border-2 bg-primary-color text-base font-medium ' +
        className
      }
      {...rest}
    >
      {children}
    </button>
  )
}
export default PrimaryBTN
