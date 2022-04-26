import { ChangeEventHandler } from "react";
import styles from "./Searchbar.module.css"

interface searchTerm {
    value: string,
    searchHandler: ChangeEventHandler,
    placeholder: string
};


const SearchBar = (props: searchTerm) => {
    return (
        <input
            type="search"
            className={styles.searchBar}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.searchHandler}>

        </input>
    )
}

export default SearchBar;