import './Header.scss'
import { withRouter } from 'react-router-dom'
import HeaderProps from './HeaderProps';

const Header = (props: HeaderProps) => {

    const { history } = props;
    const pathname = history.location.pathname;

    const navigate = (path: string) => {
        history.push(path)
    }

    const isBeerPath = pathname === '/';
    const isFavoritePath = pathname === '/favorite';

    return (
        <header>
            <div className="bg-white">
                <div className="flex-end">
                    <div className="nav-items-wrapper">
                        <div className="nav-item" onClick={() => navigate('/')}>
                            <div className={isBeerPath ? 'tab-active' : ''}>My Beers</div>
                            {isBeerPath && <div className="hr"></div>}
                        </div>
                        <div className="nav-item" onClick={() => navigate('/favorite')}>
                            <div className={isFavoritePath ? 'tab-active' : ''}>My Favorite Beers</div>
                            {isFavoritePath && <div className="hr"></div>}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default withRouter(Header);