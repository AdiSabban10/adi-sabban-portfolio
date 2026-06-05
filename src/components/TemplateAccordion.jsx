import { useId, useState } from 'react'

export function TemplateAccordion({ sections }) {
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <div className="accordion">
      {sections.map((section, index) => {
        const isOpen = openIndex === index
        const panelId = `${baseId}-panel-${index}`
        const headerId = `${baseId}-header-${index}`

        return (
          <div key={section.title} className="accordion__item">
            <h4 className="accordion__heading">
              <button
                type="button"
                id={headerId}
                className="accordion__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
              >
                <span className="accordion__title">{section.title}</span>
                <span className="accordion__icon" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
            </h4>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className={`accordion__panel ${isOpen ? 'accordion__panel--open' : ''}`}
              hidden={!isOpen}
            >
              <div className="accordion__content">{section.content}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
