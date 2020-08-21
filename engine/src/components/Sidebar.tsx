import React from 'react'
import './Sidebar.css'

export default function Sidebar(props: SidebarProps) {

    return (
        <div className='container'>
            <img className='logo' src={props.avatarUri} alt='Avatar' />
            <div className='titleBlock'>
                <span className='title'>{props.title}</span>
                <span className='subText'>{props.subText}</span>
            </div>
            <div className='navigation'>
                <span className='navlink selected'>Home</span>
                <span className='navlink'>About</span>
            </div>
            <div className='twitter'>
                <a href={props.twitterBioUri} target='_blank' rel='noopener noreferrer' style={{textDecoration: 'none'}}><span className="fab fa-twitter fa-sm icon" ></span></a>
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