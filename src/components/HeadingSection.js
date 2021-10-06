import HeadingTitle from './HeadingTitle';
import SearchBar from './SearchBar';
import NavBar from './NavBar';

//  RETURNS THE TITLE, SEARCHBAR AND NAVBAR COMPONENTS
export const HeadingSection = () => {
  return (
    <div>
      <HeadingTitle />
      <SearchBar />
      <NavBar />
    </div>
  );
};
