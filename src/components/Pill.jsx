export function Pill({ children, small = false }) {
  return (
    <span className={`pill${small ? ' pill--sm' : ''}`}>{children}</span>
  )
}
