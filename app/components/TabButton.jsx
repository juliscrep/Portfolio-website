import React from 'react'

export const TabButton = ({active, selectTab, children}) => {
    const buttonClasses = active ? 'text-white border-b-4 border-primary-500' : 'text-[#ADB7BE]'

    return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
            {children}
        </p>
        
    </button>  
  )
}

export default TabButton;
