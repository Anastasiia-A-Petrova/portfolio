const constellations = [
  {
    stars: [
      [8, 22],
      [18, 14],
      [29, 20],
      [38, 11],
      [48, 17],
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
    ],
  },

  {
    stars: [
      [67, 18],
      [76, 10],
      [84, 17],
      [91, 9],
      [96, 23],
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
    ],
  },

  {
    stars: [
      [17, 62],
      [27, 54],
      [36, 61],
      [45, 52],
      [54, 58],
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
    ],
  },

  {
    stars: [
      [72, 67],
      [81, 57],
      [89, 64],
      [95, 53],
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
    ],
  },
]

function Constellations() {

  return (
    <div className="constellations" aria-hidden="true">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {constellations.map((constellation, constellationIndex) => (
          <g
            key={constellationIndex}
            className="constellation"
          >
            {constellation.lines.map(([from, to], lineIndex) => {
              const start = constellation.stars[from]
              const end = constellation.stars[to]

              return (
                <line
                  key={lineIndex}
                  x1={start[0]}
                  y1={start[1]}
                  x2={end[0]}
                  y2={end[1]}
                  className="constellation-line"
                />
              )
            })}

            {constellation.stars.map(
            ([x, y], starIndex) => {
                const delay =
                (constellationIndex * 1.7 + starIndex * 0.83) % 6

                return (
                <g
                    key={starIndex}
                    className="constellation-star"
                    style={{
                    animationDelay: `${delay}s`,
                    }}
                    transform={`translate(${x} ${y})`}
                >
                    <path d="M0 -0.7 L0.2 0 L0 0.7 L-0.2 0 Z" />
                    <path d="M-0.7 0 L0 0.2 L0.7 0 L0 -0.2 Z" />
                </g>
                )
            }
            )}

          </g>
        ))}
      </svg>
    </div>
  )
}

export default Constellations