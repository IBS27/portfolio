import { NavLink } from 'react-router-dom'

type NavItem = {
  label: string
  to: '/home' | '/projects' | '/about' | '/contact'
}

const navItems: NavItem[] = [
  { label: '~/home', to: '/home' },
  { label: '~/projects', to: '/projects' },
  { label: '~/about', to: '/about' },
  { label: '~/contact', to: '/contact' },
]

function Navbar() {
  return (
    <nav className="terminal-nav" aria-label="Primary">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `terminal-nav__link${isActive ? ' terminal-nav__link--active' : ''}`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navbar
