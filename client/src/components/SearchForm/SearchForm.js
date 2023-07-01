import React, {useState} from 'react';
import {FaSearch} from "react-icons/fa";
import "./SearchForm.css";

const SearchForm = ({onSubmit}) => {
    const [searchText, setSearchText] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(searchText)
    }

    // const {setSearchTerm, setResultTitle} = useState(null);
    // const searchText = useRef('');
    // const navigate = useNavigate();
    //
    // useEffect(() => searchText.current.focus(), []);
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   let tempSearchTerm = searchText.current.value.trim();
    //   if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
    //     setSearchTerm("the lost world");
    //     setResultTitle("Please Enter Something ...");
    //   } else {
    //     setSearchTerm(searchText.current.value);
    //   }
    //
    //   navigate("/book");
    // };

    return (
        <div className='search-form'>
            <div className='container'>
                <div className='search-form-content'>
                    <form className='search-form' onSubmit={handleSubmit}>
                        <div className='search-form-elem flex flex-sb bg-white'>
                            <input type="text" className='form-control'
                                   placeholder='Enter Book Name ...' value={searchText}
                                   onChange={(event) => setSearchText(event.target.value)}/>
                            <button type="submit" className='flex flex-c' onClick={handleSubmit}>
                                <FaSearch className='text-purple' size={32}/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchForm