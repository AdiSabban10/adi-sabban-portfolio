export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>
        &copy; {year} Adi Sabban — Built with React, Vite, and custom SCSS.
      </p>
      <p className="footer__note">
        Project links can be added when GitHub and live demo URLs are ready.
      </p>
    </footer>
  )
}
