const SearchableList = ({ items }) => {
  return (
    <div className="searchable-list">
      <input type="search" placeholder="Type your text" />
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.toString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchableList;
