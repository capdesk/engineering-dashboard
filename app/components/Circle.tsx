const Circle: React.FC<{ id?: string; className?: string }> = ({ id, className }) => (
  <div id={id} className={`block py-2 ${className} z-10`}>
    <div className={`w-4 h-4 border-2 border-highlight-on rounded-full ${className}`} />
  </div>
)

export default Circle
