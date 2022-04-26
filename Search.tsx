import { ChangeEventHandler, useEffect, useState } from "react";
import styles from "./Search.module.css";
import SearchBar from "./Searchbar";


interface searchData {
    firstName: string,
    lastName: string
}

const Search = () => {
    const [contentData, setContentData] = useState<searchData[]>([]);
    const [searchContentData, setSearchContentData] = useState<string>('');
    const [searchDataErr, setSearchDataErr] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001`);
                const data = await response.json();
                //if fetch works but there is a data mismatch, throw specialized error
                if (!data) { throw new Error("Unable to find data") }
                else { setContentData(data) }
            } catch (error) {
                //catches auto thrown and data mismatch errors
                console.log(error);
                setSearchDataErr(true)
            }
        }
        fetchData();
    }, [])

    const searchHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        e.preventDefault();
        setSearchContentData(e.currentTarget.value);
    }

    return (
        <div className={styles.searchHolder}>
            <SearchBar
                value={searchContentData}
                placeholder={`Search by name`}
                searchHandler={searchHandler}
            />

            <div className={styles.searchData}>
                {searchDataErr && <h1 className={styles.errorMsg}>Error loading data, please check URL or console for more details!</h1>}
                <ul>
                    {
                        contentData.filter(person =>
                            person.firstName.toLowerCase().startsWith(searchContentData.toLowerCase()) ||
                            person.lastName.toLowerCase().startsWith(searchContentData.toLowerCase()) ||
                            (`${person.firstName} ${person.lastName}`).toLowerCase().startsWith(searchContentData.toLowerCase())

                        ).map((person, index) => <li key={index}>{person.firstName} {person.lastName}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Search;