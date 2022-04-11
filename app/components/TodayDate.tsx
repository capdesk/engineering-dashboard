const date = new Intl.DateTimeFormat('en-GB', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
})
  .formatToParts(new Date())
  .filter((part) => part.type !== 'literal')
  .map((part) => part.value)
  .join('.')

function TodayDate() {
  return <span className="text-2xl font-light text-white font-mono pr-6 self-end lg:self-start">{date}</span>
}

export default TodayDate
