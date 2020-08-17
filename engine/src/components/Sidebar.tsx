import React from 'react'
import './Sidebar.css'

export default function Sidebar(sidebarProps: SidebarProps) {

    return (
        <div className='container'>
            <img className='logo' src={sidebarProps.avatarUri} alt='Avatar' />
            <div className='titleBlock'>
                <span className='title'>{sidebarProps.title}</span>
                <span className='subText'>{sidebarProps.subText}</span>
            </div>
            <div className='navigation'>
                <span className='navlink'>Home</span>
                <span className='navlink'>About</span>
            </div>
            <div className='twitter'>
                <span className="fab fa-twitter fa-sm icon" ></span>
            </div>
        </div>
    );
}

interface SidebarProps {
    avatarUri: string;
    twitterBioUri: string;
    title: string;
    subText: string;
}