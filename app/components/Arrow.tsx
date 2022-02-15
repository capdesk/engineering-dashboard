import { useState, useEffect } from 'react'
import Xarrow, { xarrowPropsType } from 'react-xarrows'

const Arrow: React.FC<xarrowPropsType> = (props) => {
  const [showChild, setShowChild] = useState(false)

  // Wait until after client-side hydration to show
  useEffect(() => {
    setShowChild(true)
    return () => setShowChild(false)
  }, [])

  if (!showChild) {
    return null
  }

  return <Xarrow {...props} lineColor="#dddddd" showHead={false} showXarrow={showChild} />
}

export default Arrow
