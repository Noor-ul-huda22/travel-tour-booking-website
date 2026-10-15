const categories = ['All', 'Beach', 'Mountain', 'City', 'Adventure'];

function CategoryFilter({ selected, onSelect }) {
  return (
    <div className="filters" role="group" aria-label="Filter by category">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`chip ${selected === cat ? 'is-active' : ''}`}
          aria-pressed={selected === cat}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;