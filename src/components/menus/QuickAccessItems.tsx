import React from 'react'
type Props = {
    text: string
}
function QuickAccessItems(props: Props) {
    return (
        <div className='flex-shrink-0 rounded-lg bg-white px-2 py-3 text-xs font-semibold text-[#3E3E3E]'>
            {props.text}
        </div>
    )
}

export default QuickAccessItems
