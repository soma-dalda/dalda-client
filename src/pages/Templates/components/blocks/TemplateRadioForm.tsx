import React from 'react'
import useTemplates from '../../hooks/useTemplates'
import TemplateRadio from '../molecules/TemplateRadio'

const TemplateRadioForm = () => {
  const { templateId, handleChangeTemplateId, handleUpdateTempalateClick, templates } =
    useTemplates()

  return (
    <section className="mt-8 flex flex-col gap-4">
      {templates?.map(
        ({ title, id }) =>
          id && (
            <TemplateRadio key={id} id={id} onChange={handleChangeTemplateId}>
              {title}
            </TemplateRadio>
          )
      )}
      <button
        className={`w-full rounded-xl  p-3 text-white hover:bg-brand-500 ${
          templateId ? 'bg-brand-500' : 'bg-brand-300'
        }`}
        type="button"
        onClick={handleUpdateTempalateClick}
      >
        수정
      </button>
    </section>
  )
}

export default TemplateRadioForm
