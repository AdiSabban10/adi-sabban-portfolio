import { contact } from '../data/contact'

export function Footer() {
  return (
    <footer className="footer">
      <p>Adi Sabban</p>
      <p className="footer__note">
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </p>
    </footer>
  )
}
