import React from 'react'
import { Logo } from '../../components/ui/logo/Logo'
import { SearchBarContainer } from '../../components/ui/task/SearchBarContainer'
import ToolsContainer from '../../components/ui/tools/ToolsContainer'
import UserDetailsContainer from '../../components/ui/user-details/UserDetailsContainer'
import "./ToolBar.scss";

const ToolBarLayout = () => {
    return (
        <section className='toolbar-layout'>
            <Logo w='96' />
            <SearchBarContainer />
            <aside className='settings'>
                <ToolsContainer />
                <UserDetailsContainer />
            </aside>

        </section>
    )
}

export default ToolBarLayout