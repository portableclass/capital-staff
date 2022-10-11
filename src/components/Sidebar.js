// import { Navbar, Nav, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/styles/css/sidebar.css';
import { useState} from 'react';

export default function Sidebar() {

    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    const [navVisibility, setNavVisibility] = useState('block')
    const toggleNavVisibility = () => {
        navVisibility === 'block' ? setNavVisibility('none') : setNavVisibility('block')
    }

    return (
        <>
            {/* {
                <div>
                    <Button variant="primary" onClick={() => setShowSidebar(true)}>
                        Launch
                    </Button>

                    <Offcanvas style={{width: "240px"}} show={showSidebar} onHide={() => setShowSidebar(false)}>

                </div>
            } */}
            <div className="sidebar-wrapper">
                <div className="sidebar">
                    <div className="brand-wrapper">
                        <Link to="/capital-staff">
                            <h1 className="brand">Капитал Кадры</h1>
                        </Link>
                        {!mediaQuery.matches &&
                            <a className="nav-burger" onClick={toggleNavVisibility}>
                                <svg viewBox="0 0 16 16" width="16" height="16">
                                    <path d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.031C17.335,0,18,0.665,18,1.484L18,1.484z" />
                                    <path d="M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0c0-0.82,0.665-1.484,1.484-1.484 h15.031C17.335,6.031,18,6.696,18,7.516L18,7.516z"/>
                                    <path d="M18,13.516C18,14.335,17.335,15,16.516,15H1.484C0.665,15,0,14.335,0,13.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.031C17.335,12.031,18,12.696,18,13.516L18,13.516z"/>
                                </svg>
                            </a>
                        }
                    </div>
                    <div className="navigation-wrapper" style={{display: `${navVisibility}`}} >
                        <div className="separating-topics">Система доступа</div>

                        <div className="link-wrapper">
                            <Link to="/capital-staff/organization" className="link">
                                <svg viewBox="0 0 24 24" width="16" height="16" className="inline-block">
                                    <path d="M18,15H16V17H18M18,11H16V13H18M20,19H12V17H14V15H12V13H14V11H12V9H20M10,7H8V5H10M10,11H8V9H10M10,15H8V13H10M10,19H8V17H10M6,7H4V5H6M6,11H4V9H6M6,15H4V13H6M6,19H4V17H6M12,7V3H2V21H22V7H12Z"></path>
                                </svg>
                                <p>Организация</p>
                            </Link>
                        </div>
                        <div className="link-wrapper">
                            <Link to="/capital-staff/location" className="link">
                                <svg viewBox="0 0 24 24" width="16" height="16" className="inline-block">
                                    <path d="M15 9H17V11H15V9M17 5H15V7H17V5M11 15H13V13H11V15M13 5H11V7H13V5M11 11H13V9H11V11M9 5H7V7H9V5M9 9H7V11H9V9M14.55 21H13V17.5H11V21H5V3H19V11.03C19.71 11.09 20.39 11.31 21 11.63V1H3V23H15.91C15.5 22.44 15 21.76 14.55 21M7 19H9V17H7V19M9 13H7V15H9V13M22 16.5C22 19.1 18.5 23 18.5 23S15 19.1 15 16.5C15 14.6 16.6 13 18.5 13S22 14.6 22 16.5M19.7 16.6C19.7 16 19.1 15.4 18.5 15.4S17.3 15.9 17.3 16.6C17.3 17.2 17.8 17.8 18.5 17.8S19.8 17.2 19.7 16.6Z"></path>
                                </svg>
                                <p>Локация</p>
                            </Link>
                        </div> 
                        <div className="link-wrapper">
                            <Link to="/capital-staff/workplace" className="link">
                                <svg viewBox="0 0 24 24" width="16" height="16" className="inline-block">
                                    <path d="M17.81,4.47C17.73,4.47 17.65,4.45 17.58,4.41C15.66,3.42 14,3 12,3C10.03,3 8.15,3.47 6.44,4.41C6.2,4.54 5.9,4.45 5.76,4.21C5.63,3.97 5.72,3.66 5.96,3.53C7.82,2.5 9.86,2 12,2C14.14,2 16,2.47 18.04,3.5C18.29,3.65 18.38,3.95 18.25,4.19C18.16,4.37 18,4.47 17.81,4.47M3.5,9.72C3.4,9.72 3.3,9.69 3.21,9.63C3,9.47 2.93,9.16 3.09,8.93C4.08,7.53 5.34,6.43 6.84,5.66C10,4.04 14,4.03 17.15,5.65C18.65,6.42 19.91,7.5 20.9,8.9C21.06,9.12 21,9.44 20.78,9.6C20.55,9.76 20.24,9.71 20.08,9.5C19.18,8.22 18.04,7.23 16.69,6.54C13.82,5.07 10.15,5.07 7.29,6.55C5.93,7.25 4.79,8.25 3.89,9.5C3.81,9.65 3.66,9.72 3.5,9.72M9.75,21.79C9.62,21.79 9.5,21.74 9.4,21.64C8.53,20.77 8.06,20.21 7.39,19C6.7,17.77 6.34,16.27 6.34,14.66C6.34,11.69 8.88,9.27 12,9.27C15.12,9.27 17.66,11.69 17.66,14.66A0.5,0.5 0 0,1 17.16,15.16A0.5,0.5 0 0,1 16.66,14.66C16.66,12.24 14.57,10.27 12,10.27C9.43,10.27 7.34,12.24 7.34,14.66C7.34,16.1 7.66,17.43 8.27,18.5C8.91,19.66 9.35,20.15 10.12,20.93C10.31,21.13 10.31,21.44 10.12,21.64C10,21.74 9.88,21.79 9.75,21.79M16.92,19.94C15.73,19.94 14.68,19.64 13.82,19.05C12.33,18.04 11.44,16.4 11.44,14.66A0.5,0.5 0 0,1 11.94,14.16A0.5,0.5 0 0,1 12.44,14.66C12.44,16.07 13.16,17.4 14.38,18.22C15.09,18.7 15.92,18.93 16.92,18.93C17.16,18.93 17.56,18.9 17.96,18.83C18.23,18.78 18.5,18.96 18.54,19.24C18.59,19.5 18.41,19.77 18.13,19.82C17.56,19.93 17.06,19.94 16.92,19.94M14.91,22C14.87,22 14.82,22 14.78,22C13.19,21.54 12.15,20.95 11.06,19.88C9.66,18.5 8.89,16.64 8.89,14.66C8.89,13.04 10.27,11.72 11.97,11.72C13.67,11.72 15.05,13.04 15.05,14.66C15.05,15.73 16,16.6 17.13,16.6C18.28,16.6 19.21,15.73 19.21,14.66C19.21,10.89 15.96,7.83 11.96,7.83C9.12,7.83 6.5,9.41 5.35,11.86C4.96,12.67 4.76,13.62 4.76,14.66C4.76,15.44 4.83,16.67 5.43,18.27C5.53,18.53 5.4,18.82 5.14,18.91C4.88,19 4.59,18.87 4.5,18.62C4,17.31 3.77,16 3.77,14.66C3.77,13.46 4,12.37 4.45,11.42C5.78,8.63 8.73,6.82 11.96,6.82C16.5,6.82 20.21,10.33 20.21,14.65C20.21,16.27 18.83,17.59 17.13,17.59C15.43,17.59 14.05,16.27 14.05,14.65C14.05,13.58 13.12,12.71 11.97,12.71C10.82,12.71 9.89,13.58 9.89,14.65C9.89,16.36 10.55,17.96 11.76,19.16C12.71,20.1 13.62,20.62 15.03,21C15.3,21.08 15.45,21.36 15.38,21.62C15.33,21.85 15.12,22 14.91,22Z"></path>
                                </svg>
                                <p>Рабочее место</p>
                            </Link>
                        </div> 

                        <div className="separating-topics">Личный кабинет</div>

                        <div className="link-wrapper">
                            <Link to="/capital-staff/contractors" className="link">
                                <svg viewBox="0 0 24 24" width="16" height="16" className="inline-block">
                                    <path d="M5,3V21H11V17.5H13V21H19V3H5M7,5H9V7H7V5M11,5H13V7H11V5M15,5H17V7H15V5M7,9H9V11H7V9M11,9H13V11H11V9M15,9H17V11H15V9M7,13H9V15H7V13M11,13H13V15H11V13M15,13H17V15H15V13M7,17H9V19H7V17M15,17H17V19H15V17Z"></path>
                                </svg>
                                <p>Подрядчики</p>
                            </Link>
                        </div> 
                        <div className="link-wrapper">
                            <Link to="/capital-staff/workers" className="link">
                                <svg viewBox="0 0 24 24" width="16" height="16" className="inline-block">
                                    <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"></path>
                                </svg>
                                <p>Сотрудники</p>
                            </Link>
                        </div> 

                        <div className="separating-topics">Администрирование</div>

                        <div className="link-wrapper">
                            <Link to="/capital-staff/users" className="link" style={{paddingBottom: '12px'}}>
                                <svg viewBox="0 0 24 24" width="16" height="16" className="inline-block">
                                    <path d="M13.07 10.41A5 5 0 0 0 13.07 4.59A3.39 3.39 0 0 1 15 4A3.5 3.5 0 0 1 15 11A3.39 3.39 0 0 1 13.07 10.41M5.5 7.5A3.5 3.5 0 1 1 9 11A3.5 3.5 0 0 1 5.5 7.5M7.5 7.5A1.5 1.5 0 1 0 9 6A1.5 1.5 0 0 0 7.5 7.5M16 17V19H2V17S2 13 9 13 16 17 16 17M14 17C13.86 16.22 12.67 15 9 15S4.07 16.31 4 17M15.95 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13Z"></path>
                                </svg>
                                <p>Пользователи</p>
                            </Link>
                        </div> 
                    </div>
                </div>
            </div>
            {/* {if showSidebar && </Offcanvas>} */}
        </>
    )
}