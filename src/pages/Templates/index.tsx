import React from 'react'
import TemplateHeader from '../Template/components/TemplateHeader'
import useTemplates from './hooks/useTemplates'

const Templates = () => {
  const {
    templateId,
    handleAddTemplateClick,
    handleChangeTemplateId,
    handleUpdateTempalateClick,
    handleClickDeleteButton,
    templates,
  } = useTemplates()

  return (
    <div className="relative flex min-h-screen w-full flex-col justify-between pt-4">
      <main className="px-2">
        <TemplateHeader save={false}>내 주문서 관리</TemplateHeader>
        <section className="mt-8">
          <form className="flex flex-col gap-4">
            {templates.map(
              ({ title, id }) =>
                id && (
                  <label
                    key={id}
                    htmlFor={id}
                    className="flex w-full justify-between rounded-xl border bg-white p-3"
                  >
                    <div className="flex gap-3">
                      <input name="form" type="radio" id={id} onChange={handleChangeTemplateId} />
                      <span>{title}</span>
                    </div>
                    <button
                      type="button"
                      className="text-red-500"
                      onClick={() => handleClickDeleteButton(id)}
                    >
                      &times;
                    </button>
                  </label>
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
          </form>
        </section>
      </main>
      <section className="flex w-full gap-5 border-t bg-white px-2 pb-2 pt-2">
        <button
          onClick={handleAddTemplateClick}
          className="w-full rounded-xl bg-point-700 p-4 text-white hover:bg-point-500"
          type="button"
        >
          주문서 추가하기
        </button>
      </section>
    </div>
  )
}

export default Templates
