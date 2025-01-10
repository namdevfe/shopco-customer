import { cn } from '@/utils'
import { cva, VariantProps } from 'class-variance-authority'
import Link from 'next/link'
import React, { ButtonHTMLAttributes, forwardRef } from 'react'

const buttonVariants = cva(
  'flex items-center justify-center w-fit font-medium rounded-[62px] text-base',
  {
    variants: {
      variant: {
        primary:
          'bg-black text-white transition-colors duration-300 hover:bg-white hover:text-black',
        white:
          'bg-white text-black transition-colors duration-300 hover:bg-black hover:text-white',
        gray: 'bg-[#F0F0F0] text-black opacity-60 transition-colors duration-300 hover:bg-black hover:text-white'
      },
      size: {
        large: 'h-[46px] md:h-[52px] py-4 px-[54px]',
        small: 'h-10 md:h-[46px] py-[10px] md:py-[12px] px-5 md:px-6',
        medium: 'h-10 md:h-12 py-3 px-4 md:px-[30px]'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium'
    }
  }
)

interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string
}

// const Button = ({
//   children,
//   className = '',
//   variant,
//   size,
//   href,
//   ...props
// }: IButtonProps) => {
//   if (href) {
//     return (
//       <Link
//         href={href}
//         className={cn(buttonVariants({ variant, size, className }))}
//       >
//         {children}
//       </Link>
//     )
//   }

//   return (
//     <button
//       className={cn(buttonVariants({ variant, size, className }))}
//       {...props}
//     >
//       {children}
//     </button>
//   )
// }

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ children, className = '', variant, size, href, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </Link>
      )
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button