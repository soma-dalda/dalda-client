import React from 'react'
import DomainTemplateItem from './DomainTemplateItem'

type Props = {
  templateList?: { id: string; title: string }[]
}

const DomainTemplates = ({ templateList }: Props) => {
  if (!templateList) {
    return null
  }

  if (templateList?.length === 0) {
    return null
  }

  return (
    <div className="mt-6 flex w-full flex-col gap-[15px]">
      <DomainTemplateItem
        to={`order/${templateList?.[0]?.id}`}
        variant="special"
        title={templateList?.[0]?.title}
      />
      {templateList?.slice(1)?.map((template) => (
        <DomainTemplateItem
          key={template?.id}
          to={`order/${template?.id}`}
          variant="normal"
          title={template?.title}
        />
      ))}
    </div>
  )
}

export default DomainTemplates
