function SearchBar({ searchText, onSearchChange, maxBudget, onBudgetChange }) {
  return (
    <form className="search" role="search" onSubmit={(e) => e.preventDefault()}>
      <div className="field">
        <label htmlFor="search">Search destinations or tours</label>
        <input
          id="search"
          type="text"
          placeholder="Try Hunza or Lahore"
          value={searchText}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="budget">Maximum budget</label>
        <select id="budget" value={maxBudget} onChange={(e) => onBudgetChange(e.target.value)}>
          <option value="">Any budget</option>
          <option value="40000">Up to Rs 40,000</option>
          <option value="60000">Up to Rs 60,000</option>
          <option value="100000">Up to Rs 100,000</option>
        </select>
      </div>
    </form>
  );
}

export default SearchBar;