const Button: React.FC<{ inverted?: boolean }> = ({ children, inverted }) => {
  return <div className={`button flex flex-row items-center justify-center w-32`}>{children}</div>
}

export { Button }
