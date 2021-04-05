import { Menubar } from 'primereact/menubar';

import {menuBarItems, menuBarLogoStart} from '../../../config';

function Header(){

    return (
        <div className="p-grid">
            <div className="p-d-none p-d-md-block p-col-1"></div>            
            <div className="p-sm-10 p-col-8">   
                <div className="card">
                    <Menubar model={menuBarItems} start={menuBarLogoStart} />
                </div>
            </div>
            <div className="p-d-none p-d-md-block p-col-1"></div>
        </div>
    )
}

export default Header;