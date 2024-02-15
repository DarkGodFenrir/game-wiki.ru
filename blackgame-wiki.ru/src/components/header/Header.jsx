import './header.css'

function Header () {
    return (
        <header className='header'>
            <div className='container'>
                <div className="header__row">
                    <div className='header__logo'>BlackGame-wiki</div>
                    <div className="header__nav">
                        <div className="tab__forum">Форум</div>
                        <div className="tab__search">Продвинутый поиск</div>
                        <div className="tab_user">Войти</div>
                    </div>
                    <div className="search">
                        <div className='search__icon'>
                            <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.3667 25L17.0167 17.65C16.4333 18.1167 15.7625 18.4861 15.0042 18.7583C14.2458 19.0306 13.4389 19.1667 12.5833 19.1667C10.4639 19.1667 8.67033 18.4324 7.20267 16.964C5.735 15.4956 5.00078 13.702 5 11.5833C5 9.46389 5.73422 7.67033 7.20267 6.20267C8.67111 4.735 10.4647 4.00078 12.5833 4C14.7028 4 16.4967 4.73422 17.9652 6.20267C19.4336 7.67111 20.1674 9.46467 20.1667 11.5833C20.1667 12.4389 20.0306 13.2458 19.7583 14.0042C19.4861 14.7625 19.1167 15.4333 18.65 16.0167L26 23.3667L24.3667 25ZM12.5833 16.8333C14.0417 16.8333 15.2814 16.3231 16.3027 15.3027C17.3239 14.2822 17.8341 13.0424 17.8333 11.5833C17.8333 10.125 17.3231 8.88561 16.3027 7.86517C15.2822 6.84472 14.0424 6.33411 12.5833 6.33333C11.125 6.33333 9.88561 6.84394 8.86517 7.86517C7.84472 8.88639 7.33411 10.1258 7.33333 11.5833C7.33333 13.0417 7.84394 14.2814 8.86517 15.3027C9.88639 16.3239 11.1258 16.8341 12.5833 16.8333Z" fill="black"/>
                            </svg>
                        </div>
                        <input className="header__search" type='text' placeholder='Поиск по сайту'/>
                    </div>
                    
                </div>
            </div>
            
        </header>
    )
}

export default Header;