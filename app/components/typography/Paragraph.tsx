const Paragraph: React.FC<{ className?: string }> = ({ className, ...props }) => (
  <p className={`text-xl leading-6 font-light ${className}`} {...props} />
)

export default Paragraph
