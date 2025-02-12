import { FormatCurrency } from '@/utils/formatNumber'

interface CardTwoProps {
  price: number
  onClick?: () => void
  title: string
}

const CardTwo = ({ price, onClick, title }: CardTwoProps) => {
  return (
    <div onClick={onClick} className='rounded-sm cursor-pointer border border-stroke py-6 px-7.5 shadow-default'>
      <div className='mt-4'>
        <div>
          <h4 className='text-title-md font-bold text-black dark:text-white'>{FormatCurrency(price || 0)}</h4>
          <span className='text-sm font-medium'>Tổng doanh thu dự kiến</span>
          <span className='text-sm font-medium'>{title}</span>
        </div>

        <span className='hidden grid-cols-[9fr,1fr] mt-2 items-center gap-1 text-sm font-medium text-meta-3 text-right'>
          <svg
            className='fill-meta-3'
            width='10'
            height='11'
            viewBox='0 0 10 11'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z'
              fill=''
            />
          </svg>
        </span>
      </div>
    </div>
  )
}

export default CardTwo
