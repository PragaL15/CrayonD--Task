import React from 'react';
import { SearchInput } from '@patternfly/react-core';
import '../../styles/SearchInputBox.css';  // Import your custom CSS
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export const SearchInputBox = () => {
  const [value, setValue] = React.useState('');
  const [resultsCount, setResultsCount] = React.useState(0);
  const [currentResult, setCurrentResult] = React.useState(1);
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
    <AutoStoriesIcon sx={{border:1,borderColor:'black',padding:0.85,marginTop:1.5,width:37,height:37,marginLeft:4,borderRadius:1}}/>
    </div>
  );
};

export default SearchInputBox;
