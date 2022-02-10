import { AiOutlinePlus } from 'react-icons/ai'

const Button: React.FC<{ inverted?: boolean }> = ({ children, inverted }) => {
  return (
    <div className={`button flex flex-row items-center ${inverted && 'button--inverted'}`}>
      <AiOutlinePlus size="20px" />
      {children && <span style={{ paddingLeft: '11px' }}>{children}</span>}
    </div>
  )
}

export { Button }
