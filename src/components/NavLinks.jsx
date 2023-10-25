import { NavLink } from 'react-router-dom'

const links = [
  { id: 1, url: 'live', text: 'Live' },
  { id: 2, url: 'push', text: 'Push' },
  { id: 3, url: 'note', text: 'Note' },
  { id: 4, url: 'link', text: 'Link' },
  { id: 5, url: 'shop', text: 'Shop' },
  { id: 6, url: 'packs', text: 'Packs' },
  { id: 7, url: 'help', text: 'Help' },
  { id: 8, url: 'more', text: 'More' },
]

const NavLinks = () => {
  return (
    <ul className="flex">
      {links.map((link) => {
        const { id, url, text } = link

        return (
          <li key={id}>
            <NavLink
              className="capitalize lg:ml-5 font-semibold focus:text-orange-400 active:text-orange-400"
              to={url}
            >
              {text}
            </NavLink>
          </li>
        )
      })}
    </ul>
  )
}
export default NavLinks
