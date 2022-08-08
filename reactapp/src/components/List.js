import React from 'react';

export default function Image(props) {

    const [collapsed, setCollapsed] = React.useState(false);
    const nameButtonClick = () => {
        setCollapsed(!collapsed);
    }

    return (
        <div className={`list ${props.className || ''}`}>
            <button className='name' onClick={nameButtonClick}>{props.name}</button>
            {!collapsed && <div className='content'>{props.children}</div>}
        </div>
    );
}