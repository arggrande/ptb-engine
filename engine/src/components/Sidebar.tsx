import React from 'react'
import './Sidebar.css'

export default function Sidebar(sidebarProps: SidebarProps) {

    return (
        <div className='container'>
            <img className='logo' src={sidebarProps.avatarUri} alt='Avatar' />
            <div className='titleBlock'>
                <span>{sidebarProps.title}</span>
                <span>{sidebarProps.subText}</span>
            </div>
            <div className='navigation'>
                <span>Home</span>
                <span>About</span>
            </div>
            <img src={sidebarProps.twitterBioUri} alt='Twitter Bio'/>
        </div>
    );
}

interface SidebarProps {
    avatarUri: string;
    twitterBioUri: string;
    title: string;
    subText: string;
}