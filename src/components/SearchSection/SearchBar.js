import '../../css/SearchBar.css';

import { FiSearch } from 'react-icons/fi';

// SEARCH BOX FOR SEARCHING THE ITEMS
const SearchBar = () => {
  return (
    <section id='SearchSection'>
      <div className='SearchBar'>
        <i>
          <FiSearch className='search-icon' size={20.8} />
        </i>
        <input
          type='text'
          placeholder='Search for items'
          className='search-box'
        />
      </div>
    </section>
  );
};

export default SearchBar;
