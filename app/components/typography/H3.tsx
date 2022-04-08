const H3: React.FC<{ className?: string }> = ({ className, ...props }) => (
  <h3 className={`font-mono text-2xl text-light text-mono ${className}`}>
    How do we distribute code across languages?
  </h3>
)

export default H3
