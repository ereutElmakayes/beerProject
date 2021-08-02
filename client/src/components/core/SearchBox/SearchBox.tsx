import './SearchBox.scss'
import SearchBoxProps from "./SearchBoxProps";
import { IoIosSearch as SearchIcon } from "react-icons/io";

const SearchBox = (props: SearchBoxProps) => {

    const { placeholder, classes, changeHandler, value } = props;

    console.log(value)

    return (
        <div className="search-box" >
            <div className="icon-wrap">
                <SearchIcon className="icon" />
            </div>
            <input className={`input ${classes}`} type="text" placeholder={placeholder} value={value ? value : ''} onChange={changeHandler}/>
        </div>
    )
}

export default SearchBox;