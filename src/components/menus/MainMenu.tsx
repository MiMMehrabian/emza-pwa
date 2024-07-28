import React from 'react'
import VerticalMenu from '../VerticalMenu'

function MainMenu() {
    return (
        <>
            <VerticalMenu
                menuTitle={'ارزان'}
                menuDescription={
                    'پایین ترین قیمت ها در دسته بندی های مختلف'
                }
                items={[]}
            />
            <VerticalMenu
                menuTitle={'ایرانی سنتی'}
                menuDescription={'کباب, خورشت, خوراک, دریایی, صبحانه'}
                items={[]}
            />
        </>
    )
}

export default MainMenu
