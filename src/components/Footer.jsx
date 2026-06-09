export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>
        &copy; {year} Adi Sabban — Built with React, Vite, and custom SCSS.
      </p>
      <p className="footer__note">
        <a href="mailto:adialon050@gmail.com">adialon050@gmail.com</a>
      </p>
    </footer>
  )
}
