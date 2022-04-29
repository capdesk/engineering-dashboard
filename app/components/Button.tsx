const Button: React.FC<{ active?: boolean }> = ({ children, active }) => {
  return (
    <div className={`button flex flex-row items-center justify-center w-32 ${active ? 'active' : ''}`}>{children}</div>
  )
}

export { Button }
