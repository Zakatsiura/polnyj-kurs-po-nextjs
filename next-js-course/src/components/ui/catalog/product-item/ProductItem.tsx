import { IProduct } from '@/types/product.interface'
import { convertPrice } from '@/utils/conver-price'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className='group relative'>
			<div className='aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80'>
				<Image
					src={product.images[0]}
					alt={product.name}
					className='w-full h-full object-cover object-center lg:h-full lg:w-full'
					width={300}
					height={300}
				/>
			</div>

			<div className='mt-4 flex justify-between'>
				<div>
					<h3 className='text-smt text-gray-700'>
						<Link href={`/product/${product.slug}`}>
							{product.name}
						</Link>
					</h3>
					<p className='mt-1 text-sm text-gray-500'>
						{product.category}
					</p>
				</div>
				<p className='text-sm font-medium text-gray-900'>
					{convertPrice(product.price)}
				</p>
			</div>
		</div>
	)
}

export default ProductItem
