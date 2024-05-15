import Image from 'next/image'
import { FC } from 'react'

const HeroRight: FC = () => {
	return (
		<div className='mb-12 flex w-full md:mb-16 lg:w-2/3'>
			<div className='relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0'>
				<Image
					src='/hero/hero-1.jpg'
					alt='Hero'
					className='h-full w-full object-cover object-center'
					priority
					width={500}
					height={500}
				/>
			</div>

			<div className='overflow-hidden rounded-lg bg-gray-100 shadow-lg'>
				<Image
					src='/hero/hero-2.jpg'
					alt='Hero'
					className='h-full w-full object-cover object-center'
					priority
					width={500}
					height={500}
				/>
			</div>
		</div>
	)
}

export default HeroRight
