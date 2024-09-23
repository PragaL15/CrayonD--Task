import React from 'react';
import { SearchInput } from '@patternfly/react-core';
import '../../styles/SearchInputBox.css';  
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined'; 
import  { useState } from 'react';
export const SearchInputBox = ({ onButtonClick }) => {  
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
        <SearchInput sx={{paddingLeft:8}}
          className="search-input" 
          placeholder="Search"
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

      <AutoStoriesOutlinedIcon
        onClick={onButtonClick}  
        sx={{
          border: 1,
          borderColor: 'rgb(185, 183, 183)',
          padding: 1,
          marginTop: 1.13,
          width: 39,
          height: 39,
          marginLeft: 2.4,
          borderRadius: 1,
          cursor: 'pointer',
          color:'#2980b9'

        }}
      />
    </div>
  );
};

export default SearchInputBox;
