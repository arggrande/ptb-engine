import React from 'react'
import './Sidebar.css'
import { Link } from '@reach/router';

export default function Sidebar(props: SidebarProps) {

    const NavLink = (props: any) => <Link 
        {...props}
        getProps={({ isCurrent }) => {
            return {
                style: {
                    color: isCurrent ? '#d4a259' : '#333'
                }
            }
        }}
    />

    return (
        <div className='container'>
            <img className='logo' src={props.avatarUri} alt='Avatar' />
            <div className='titleBlock'>
                <span className='title'>{props.title}</span>
                <span className='subText'>{props.subText}</span>
            </div>
            <div className='navigation'>
                <NavLink className='navlink' to='/'>Home</NavLink>
                <NavLink className='navlink' to='/about'>About</NavLink>
                <NavLink className='navlink' to='/new'>New</NavLink>
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