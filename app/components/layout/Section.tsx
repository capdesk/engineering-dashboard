const Section: React.FC<{ light?: boolean; title: string; circleId?: string }> = ({ light, title, children }) => {
  const bg = light ? 'bg-dark-200' : 'bg-dark-300'
  return (
    <div className={`py-12 px-14 ${bg}`}>
      <div className="flex flex-row">
        <h2 className="text-4xl font-mono text-gradient text-light">{title}</h2>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Section
