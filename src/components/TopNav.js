import '../assets/styles/topnav.css';

export default function TopNav() {
    return (
        <>
            <div className="topnav-wrapper">
                <div className="topnav-dropdown">
                    <div className="user-avatar" />
                    
                    <div className="user-name">
                        <span>root</span>
                        <svg viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                            <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"></path>
                        </svg>
                    </div>

                    {/* <div class="dropdown-content">
                        <a href="/capital-staff">Ссылка 1</a>
                        <a href="/capital-staff">Ссылка 2</a>
                        <a href="/capital-staff">Ссылка 3</a>
                    </div> */}
                </div>

                <a className="exit" href="/capital-staff">
                    <svg viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                        <path d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z"></path>
                    </svg>
                </a>
            </div>
        </>
    )
}