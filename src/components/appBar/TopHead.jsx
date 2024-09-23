import React from 'react';
import { SearchInput } from '@patternfly/react-core';
import '../../styles/SearchInputBox.css';  // Your custom CSS
import AutoStoriesIcon from '@mui/icons-material/AutoStories';  // The icon you're using
import  { useState } from 'react';
export const SearchInputBox = ({ onButtonClick }) => {  // onButtonClick prop passed from CartPage
  const [value, setValue] = useState('');
  const [resultsCount, setResultsCount] = useState(0);
  const [currentResult, setCurrentResult] = useState(1);

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

  return (
    <div className="flex">
      <div className="search-input-container">
        <SearchInput
          placeholder=""
          value={value}
          onChange={(_event, value) => onChange(value)}
          onClear={onClear}
          isNextNavigationButtonDisabled={currentResult === resultsCount}
          isPreviousNavigationButtonDisabled={currentResult === 1}
          resultsCount={`${currentResult} / ${resultsCount}`}
          onNextClick={onNext}
          onPreviousClick={onPrevious}
        />
      </div>

      {/* Icon button that triggers the prop function onButtonClick */}
      <AutoStoriesIcon
        onClick={onButtonClick}  // Clicking this toggles the state in CartPage
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
    </div>
  );
};

export default SearchInputBox;
