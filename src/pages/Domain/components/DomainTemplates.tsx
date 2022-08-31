import React from 'react'
import DomainTemplateItem from './DomainTemplateItem'

type Props = {
  templates?: { id: string; title: string }[]
}

const DomainTemplates = ({ templates }: Props) => {
  if (!templates) {
    return null
  }

  if (templates?.length === 0) {
    return null
  }

  return (
    <div className="mt-6 flex w-full flex-col gap-[15px]">
      <DomainTemplateItem to={templates?.[0]?.id} variant="special" title={templates?.[0].title} />
      {templates?.slice(1)?.map((template) => (
        <DomainTemplateItem
          key={template.id}
          to={template?.id}
          variant="normal"
          title={template.title}
        />
      ))}
    </div>
  )
}

export default DomainTemplates
