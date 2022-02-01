import Hamburger from 'hamburger-react'
import { useState } from 'react'
import logo from '../assets/logo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsBag } from 'react-icons/bs'

const Header = () => {
	const Container = ({ children }) => (
		<div className="px-4 md:px-10 max-w-7xl mx-auto flex items-center justify-between h-full gap-5">
			{children}
		</div>
	)

	const Burger = () => {
		const [ isOpen, setIsOpen ] = useState(false)
		const Menu = () => (
			<div className="fixed top-16 left-0 w-full h-screen bg-blue-100">menu</div>
		)

		return (
			<div>
				<Hamburger size={22} toggled={isOpen} toggle={setIsOpen} />
				{isOpen && <Menu />}
			</div>
		)
	}

	const Logo = () => (
		<div className="-ml-4 flex-1">
			<img src={logo} alt="" className="w-16 invert" />
		</div>
	)

	const Search = () => (
		<div className="relative">
			<input
				type="search"
				className="w-full h-8 md:w-[300px] text-sm py-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-gray-400"
				placeholder="Search"
			/>
			<AiOutlineSearch className="w-5 h-5 absolute right-0 top-1" />
		</div>
	)

	const Bag = () => <BsBag className="w-5 h-5" />

	return (
		<header className="bg-black text-white h-16">
			<Container>
				<Burger />
				<Logo />
				<Search />
				<Bag />
			</Container>
		</header>
	)
}

export default Header
