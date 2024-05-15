'use client'

import cn from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import { IMenuItem } from './menu.interface'

interface INavItem {
	item: IMenuItem
}

const NavItem: FC<INavItem> = ({ item }) => {
	const pathname = usePathname()

	return (
		<div>
			<Link
				href={item.link}
				className={cn(
					'text-base font-medium transition duration-100 hover:text-violet-600',
					pathname === item.link ? 'text-violet-600' : 'text-gray-600'
				)}
			>
				{item.name}
			</Link>
		</div>
	)
}

export default NavItem
