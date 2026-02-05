import React, { useRef, useCallback, useMemo } from 'react'
import { drawPath, constants, stateCodes } from '../constants/Constants'
import { MapPropType } from '../types/Types'

const IndiaMap = ({
  className = 'svgmap',
  size,
  mapColor,
  strokeColor,
  strokeWidth,
  hoverColor,
  onClick,
}: MapPropType) => {
  const pathRefs = useRef<Record<string, SVGPathElement | null>>({})

  const resolvedMapColor = mapColor || constants.MAPCOLOR
  const resolvedHoverColor = hoverColor || constants.HOVERCOLOR

  const mapStyle = useMemo(() => ({
    width: size || constants.WIDTH,
    fill: resolvedMapColor,
    stroke: strokeColor || constants.STROKE_COLOR,
    strokeWidth: strokeWidth || constants.STROKE_WIDTH,
  }), [size, resolvedMapColor, strokeColor, strokeWidth])

  const handleMouseEnter = useCallback((stateCode: string) => {
    const path = pathRefs.current[stateCode]
    if (path) {
      path.style.fill = resolvedHoverColor
    }
  }, [resolvedHoverColor])

  const handleMouseLeave = useCallback((stateCode: string) => {
    const path = pathRefs.current[stateCode]
    if (path) {
      path.style.fill = resolvedMapColor
    }
  }, [resolvedMapColor])

  const setPathRef = useCallback((stateCode: string) => (el: SVGPathElement | null) => {
    pathRefs.current[stateCode] = el
  }, [])

  return (
    <div className={className} style={mapStyle}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="-114 -50.4 611.9 695.7"
        aria-label="Interactive map of India"
        role="img"
      >
        <title>Map of India</title>
        {stateCodes.map((stateCode) => (
          <path
            key={stateCode}
            ref={setPathRef(stateCode)}
            onClick={() => onClick(stateCode)}
            onMouseEnter={() => handleMouseEnter(stateCode)}
            onMouseLeave={() => handleMouseLeave(stateCode)}
            onFocus={() => handleMouseEnter(stateCode)}
            onBlur={() => handleMouseLeave(stateCode)}
            id={stateCode}
            d={drawPath[stateCode]}
            tabIndex={0}
            role="button"
            aria-label={`Select ${stateCode}`}
            style={{ cursor: 'pointer', transition: 'fill 0.2s ease' }}
          />
        ))}
      </svg>
    </div>
  )
}

export default IndiaMap
