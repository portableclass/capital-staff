import '../assets/styles/header.css';

export default function Header({ title, window = "Список" }) {
    return (
        <>
            <div className="header-wrapper">
                <h2 style={{color: "#6B7280"}}>{title}</h2>
                <h2 style={{padding: "0px 12px", color: "#6B7280"}}>/</h2>
                <h2 style={{fontFamily: "TTHoves-Bold"}}>{window}</h2>
            </div>
        </>
    )
}