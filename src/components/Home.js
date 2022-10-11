import Header from './Header'
import { CardDefault } from './CardDefault'
import LineChart from './LineChart'
import '../assets/styles/css/home.css'

export const Home = () => {

    return (
        <>
            <Header
                title="Главная"
                window="Обзор"
            />
            
            <div className="home-wrapper">
                <div className="short-info-wrapper">
                    <CardDefault
                        title={'Ключи'}
                        curNum={0}
                        stockNum={18}
                        pathSvg={'M7 14C5.9 14 5 13.1 5 12S5.9 10 7 10 9 10.9 9 12 8.1 14 7 14M12.6 10C11.8 7.7 9.6 6 7 6C3.7 6 1 8.7 1 12S3.7 18 7 18C9.6 18 11.8 16.3 12.6 14H16V18H20V14H23V10H12.6Z'}
                        fillColor={'#059669'} /> 
                    <CardDefault
                        title={'Мат. ценности'}
                        curNum={0}
                        stockNum={9}
                        pathSvg={'M4,6H6V18H4V6M7,6H8V18H7V6M9,6H12V18H9V6M13,6H14V18H13V6M16,6H18V18H16V6M19,6H20V18H19V6M2,4V8H0V4A2,2 0 0,1 2,2H6V4H2M22,2A2,2 0 0,1 24,4V8H22V4H18V2H22M2,16V20H6V22H2A2,2 0 0,1 0,20V16H2M22,20V16H24V20A2,2 0 0,1 22,22H18V20H22Z'}
                        fillColor={'#2563EB'}
                    />
                    <CardDefault
                        title={'Сотрудники'}
                        curNum={0}
                        stockNum={0}
                        pathSvg={'M16 17V19H2V17S2 13 9 13 16 17 16 17M12.5 7.5A3.5 3.5 0 1 0 9 11A3.5 3.5 0 0 0 12.5 7.5M15.94 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13M15 4A3.39 3.39 0 0 0 13.07 4.59A5 5 0 0 1 13.07 10.41A3.39 3.39 0 0 0 15 11A3.5 3.5 0 0 0 15 4Z'}
                        fillColor={'#DC2626'}
                    />
                </div>
                <LineChart/>
            </div>
        </>
    )
}