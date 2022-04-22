import { PropsWithChildren, useEffect, useRef, useState } from 'react'

const Tooltip: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState<{ left?: string }>({})

  useEffect(() => {
    const { innerWidth: width } = window
    const { right = 0 } = ref?.current?.getBoundingClientRect() ?? {}
    const rightDiff = right - width
    const newStyle = { ...style }
    if (rightDiff > 0) {
      // prevent the tooltip from going off the screen to the right
      newStyle.left = `-${rightDiff}px`
    }
    setStyle(newStyle)
  }, [])

  return (
    <div
      ref={ref}
      className={`absolute w-max z-10 bg-dark-100 border border-gray-300 px-4 py-2 rounded-md`}
      style={style}
    >
      {children}
    </div>
  )
}

export { Tooltip }
