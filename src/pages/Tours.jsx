import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import DestinationCard from '../components/DestinationCard';
import PackageCard from '../components/PackageCard';
import PackageModal from '../components/PackageModal';
import { destinations } from '../data/destinations';
import { packages } from '../data/packages';

function Tours() {
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState('All');
  const [maxBudget, setMaxBudget] = useState('');
  const [selectedPackage, setSelectedPackage] = useState(null); // which package is open

  const query = searchText.trim().toLowerCase();
  const matchesCategory = (item) => category === 'All' || item.category === category;

  const filteredDestinations = destinations.filter(
    (d) => matchesCategory(d) && d.name.toLowerCase().includes(query)
  );

  const filteredPackages = packages.filter(
    (p) =>
      matchesCategory(p) &&
      (p.title.toLowerCase().includes(query) || p.destination.toLowerCase().includes(query)) &&
      (maxBudget === '' || p.price <= Number(maxBudget))
  );

  return (
    <>
      <section className="container page-header">
        <h1 className="section__title">Find your next trip</h1>
        <p className="section__intro">Search by place or budget, then filter by the kind of trip you like.</p>

        <SearchBar
          searchText={searchText}
          onSearchChange={setSearchText}
          maxBudget={maxBudget}
          onBudgetChange={setMaxBudget}
        />
        <CategoryFilter selected={category} onSelect={setCategory} />
      </section>

      <section className="section container">
        <h2 className="section__title">Destinations</h2>
        {filteredDestinations.length === 0 ? (
          <p className="empty">No destinations match your search. Try another name or category.</p>
        ) : (
          <div className="grid">
            {filteredDestinations.map((d) => (
              <DestinationCard key={d.id} destination={d} />
            ))}
          </div>
        )}
      </section>

      <section className="section container">
        <h2 className="section__title">Featured tour packages</h2>
        {filteredPackages.length === 0 ? (
          <p className="empty">No packages match your filters. Try a higher budget or a different category.</p>
        ) : (
          <div className="grid">
            {filteredPackages.map((p) => (
              <PackageCard key={p.id} pkg={p} onViewDetails={setSelectedPackage} />
            ))}
          </div>
        )}
      </section>

      <PackageModal pkg={selectedPackage} onClose={() => setSelectedPackage(null)} />
    </>
  );
}

export default Tours;