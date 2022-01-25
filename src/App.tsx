import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Results from './components/Results';

export type filtersType = {
  location: {
    city: string;
    country: string;
  };
  guests: number;
};

function App() {
  const [filters, setFilters] = useState<filtersType>({
    location: { city: 'Helinski', country: 'Finland' },
    guests: 0,
  });

  const updateFilters = (updatedFilters: filtersType) => {
    setFilters({ ...updatedFilters });
    return;
  };

  return (
    <div className="lg:px-8">
      <Header filters={filters} updateFilters={updateFilters} />
      <Results filters={filters} />
      <Footer />
    </div>
  );
}

export default App;
