import React, { useState } from 'react';
import { SearchInput } from '@patternfly/react-core';
import '../../styles/SearchInputBox.css'; // Your custom CSS
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Catalog from '../input/catlog'; // Assuming Catalog is the component to overlay

export const SearchInputBox = () => {
  const [value, setValue] = useState('');
  const [resultsCount, setResultsCount] = useState(0);
  const [currentResult, setCurrentResult] = useState(1);
  const [showCatalog, setShowCatalog] = useState(false); // State to control Catalog visibility

  const onChange = value => {
    setValue(value);
    setResultsCount(3);
  };

  const onClear = () => {
    setValue('');
    setResultsCount(0);
    setCurrentResult(1);
  };

  const onNext = () => {
    const newCurrentResult = currentResult + 1;
    setCurrentResult(newCurrentResult > resultsCount ? resultsCount : newCurrentResult);
  };

  const onPrevious = () => {
    const newCurrentResult = currentResult - 1;
    setCurrentResult(newCurrentResult > 0 ? newCurrentResult : 1);
  };

  const toggleCatalog = () => {
    setShowCatalog(!showCatalog); // Toggle Catalog visibility
  };

  return (
    <div className='flex'>
      <div className="search-input-container">
        <SearchInput
          placeholder=""
          value={value}
          onChange={(_event, value) => onChange(value)}
          onClear={onClear}
          isNextNavigationButtonDisabled={currentResult === 3}
          isPreviousNavigationButtonDisabled={currentResult === 1}
          resultsCount={`${currentResult} / ${resultsCount}`}
          onNextClick={onNext}
          onPreviousClick={onPrevious}
        />
      </div>

      {/* Icon to toggle Catalog visibility */}
      <AutoStoriesIcon
        onClick={toggleCatalog}
        sx={{
          border: 1,
          borderColor: 'black',
          padding: 0.85,
          marginTop: 1.5,
          width: 37,
          height: 37,
          marginLeft: 4,
          borderRadius: 1,
          cursor: 'pointer'
        }}
      />

      {/* Catalog component as an overlay */}
      {showCatalog && (
        <div className="catalog-overlay">
          <Catalog />
        </div>
      )}
    </div>
  );
};

export default SearchInputBox;
