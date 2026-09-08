import { useState } from 'react'

function ProjectCard({ project, language }) {
  const [activePreview, setActivePreview] = useState(0)

  const previews = project.previews || []

  const hasMultiplePreviews = previews.length > 1

  const showPrevious = () => {
    setActivePreview((current) =>
      current === 0
        ? previews.length - 1
        : current - 1
    )
  }

  const showNext = () => {
    setActivePreview((current) =>
      current === previews.length - 1
        ? 0
        : current + 1
    )
  }

  const handleKeyDown = (event) => {
    if (!hasMultiplePreviews) return

    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      showPrevious()
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      showNext()
    }
  }

  return (
    <article className="project-card project-card-featured">
      {/* PREVIEW CAROUSEL */}

      {previews.length > 0 && (
        <div
          className="project-card-preview"
          tabIndex={hasMultiplePreviews ? 0 : -1}
          onKeyDown={handleKeyDown}
        >
          <div className="project-card-preview-stage">
            <img
              key={previews[activePreview]}
              src={previews[activePreview]}
              alt={`${project.title[language]} — ${activePreview + 1}`}
              className="project-card-preview-image"
            />
          </div>

          <div className="project-card-preview-label">
            {language === 'ru'
              ? 'ПРЕВЬЮ'
              : 'PREVIEW'}
          </div>

          {hasMultiplePreviews && (
            <>
              {/* PREVIOUS */}

              <button
                type="button"
                className="project-carousel-button project-carousel-button-prev"
                onClick={showPrevious}
                aria-label={
                  language === 'ru'
                    ? 'Предыдущее изображение'
                    : 'Previous image'
                }
              >
                ←
              </button>

              {/* NEXT */}

              <button
                type="button"
                className="project-carousel-button project-carousel-button-next"
                onClick={showNext}
                aria-label={
                  language === 'ru'
                    ? 'Следующее изображение'
                    : 'Next image'
                }
              >
                →
              </button>

              {/* DOTS */}

              <div
                className="project-carousel-dots"
                aria-label={
                  language === 'ru'
                    ? 'Выбор изображения'
                    : 'Image selection'
                }
              >
                {previews.map((preview, index) => (
                  <button
                    type="button"
                    key={preview}
                    className={`project-carousel-dot ${
                      index === activePreview
                        ? 'active'
                        : ''
                    }`}
                    onClick={() =>
                      setActivePreview(index)
                    }
                    aria-label={
                      language === 'ru'
                        ? `Изображение ${index + 1}`
                        : `Image ${index + 1}`
                    }
                    aria-current={
                      index === activePreview
                        ? 'true'
                        : undefined
                    }
                  />
                ))}
              </div>

              {/* COUNTER */}

              <div className="project-carousel-counter">
                {String(activePreview + 1).padStart(2, '0')}
                {' / '}
                {String(previews.length).padStart(2, '0')}
              </div>
            </>
          )}
        </div>
      )}

      {/* HEADER */}

      <div className="project-card-top">
        <span className="project-category">
          {project.category[language]}
        </span>

        <span className="project-year">
          {project.year}
        </span>
      </div>

      {/* MAIN CONTENT */}

      <div className="project-card-content">
        <h3>{project.title[language]}</h3>

        <p className="project-description">
          {project.description[language]}
        </p>

        {/* WHAT IT DOES */}

        {project.overview && (
          <div className="project-overview">
            <p className="project-label">
              {language === 'ru'
                ? 'ЧТО СДЕЛАНО'
                : 'WHAT IT DOES'}
            </p>

            <div className="project-overview-list">
              {project.overview[language].map(
                (item) => (
                  <p key={item}>{item}</p>
                )
              )}
            </div>
          </div>
        )}

        {/* WORKFLOW */}

        {project.workflow && (
          <div className="project-workflow">
            <p className="project-label">
              WORKFLOW
            </p>

            <div className="project-workflow-line">
              {project.workflow[language]}
            </div>
          </div>
        )}

        {/* METRICS */}

        <div className="project-metrics">
          {project.metrics.map((metric) => (
            <div
              className="project-metric"
              key={metric.label.en}
            >
              <strong>{metric.value}</strong>

              <span>
                {metric.label[language]}
              </span>
            </div>
          ))}
        </div>

        {/* TECHNOLOGIES */}

        <div className="project-tech">
          {project.technologies.map(
            (technology) => (
              <span key={technology}>
                {technology}
              </span>
            )
          )}
        </div>
      </div>

      {/* FOOTER */}

      <div className="project-card-footer">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          GitHub ↗
        </a>
      </div>
    </article>
  )
}

export default ProjectCard