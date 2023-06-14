import React from 'react'
import SearchSide from './SearchSide'

const SideBar = () => {
    return (
        <nav class="w-56 h-screen sticky top-0 flex-none bg-slate-100 ...">
            <SearchSide />
        </nav>
    )
}

export default SideBar