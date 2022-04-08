const H3: React.FC<{ className?: string }> = ({ className, ...props }) => (
  <h3 className={`font-mono text-2xl text-light text-mono ${className}`} {...props} />
)

export default H3
