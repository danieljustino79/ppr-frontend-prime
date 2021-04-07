import logo from './assets/images/logo.svg';

export const menuBarItems = [
    {
       label:'Home',
       icon:'pi pi-fw pi-home',command:()=>{ window.location="/"; }
    },
    {
       label:'Calendar',
       icon:'pi pi-fw pi-calendar',command:()=>{ window.location="/tools"; }
    },
    {
       label:'Publication',
       icon:'pi pi-fw pi-file',command:()=>{ window.location="/publication"; }
    },    
 ];

 export const menuBarEnd = [{
    label:'Settings',
    icon:'pi pi-fw pi-cog',
 }];

 export const menuBarLogoStart = <img alt='logo' src={logo}
    onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} 
    height="40" className="p-mr-2"></img>;

export const urlApi = 'http://pocket-post-backend-prime.herokuapp.com/api/';