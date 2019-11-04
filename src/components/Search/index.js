import * as React from "react";
import styled from "styled-components";
import DefaultTheme from "themes/defaultTheme";
import CatInfo from "components/CatInfo";
import CatService from "services/catService";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  flex-direction: column;
  font-family: ${DefaultTheme.font.primary};
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  border-bottom: 2px dotted ${DefaultTheme.colors.lightGray};
  border-spacing: 10px;
  padding-bottom: 4vh;
  font-family: ${DefaultTheme.font.primary};
`;

const SearchText = styled.div`
  color: ${DefaultTheme.colors.blackText};
  font-size: 1.5rem;
  margin: 0 15px 0 0;
`;

const Input = styled.input`
  width: 30vw;
  height: 2.5vh;
  border: 1px solid ${DefaultTheme.colors.lightGray};
  border-radius: 3px;
`;

const StatusWrapper = styled.div`
  display: flex;
  width: 100%;
  font-size: 0.8rem;
  color: ${DefaultTheme.colors.lightBlack};
  justify-content: center;
  align-items: center;
  margin-top: 2vh;
`;

const ResultsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 2vw 0 2vw 0;
  flex-direction: column;
`;

const LoadMoreButton = styled.button`
  padding: 10px 15px;
  font-size: 1rem;
  color: ${DefaultTheme.colors.blackText};
  font-family: ${DefaultTheme.font.primary};
  font-size: 0.8em;
  font-weight: 500;
  border: 1px solid ${DefaultTheme.colors.lightGray};
  width: 15vw;
  border-radius: 2px;
  &:hover {
    background-color: ${DefaultTheme.colors.lightPrimary};
    color: ${DefaultTheme.colors.text};
  }
`;

const Search = () => {
  const [searchResults, setSearchResult] = React.useState([]);
  const [resultsImage, setResultsImage] = React.useState([]);
  let textInput = React.createRef();

  const searchBreed = async breed => {
    const cats = await CatService.searchCatBreed(textInput.current.value);

    if (cats.length) {
      const catImages = await CatService.getCatsImage([cats[0]]);

      setResultsImage(catImages);
      setSearchResult(cats);
    } else {
      setSearchResult([]);
      setResultsImage([]);
    }
  };

  const statusMessage = () => {
    return (
      <StatusWrapper>
        {searchResults.length
          ? `${searchResults.length} results found`
          : `0 results found`}
      </StatusWrapper>
    );
  };

  const renderCatInfos = () => {
    return searchResults
      ? resultsImage.map((cat, index) => {
          return (
            <CatInfo
              key={index}
              image={cat.image}
              breed={cat.name}
              description={cat.description}
              ratings={{
                affectionLevel: cat.affection_level,
                adaptability: cat.adaptability,
                childFriendly: cat.child_friendly,
                dogFriendly: cat.dog_friendly
              }}
            />
          );
        })
      : null;
  };

  const renderLoadMoreBtn = () => {
    return searchResults.length > resultsImage.length ? (
      <LoadMoreButton onClick={() => loadMore()}>LOAD MORE</LoadMoreButton>
    ) : null;
  };

  const loadMore = async () => {
    const catImages = await CatService.getCatsImage(searchResults);
    setResultsImage(catImages);
  };

  return (
    <Wrapper>
      <SearchWrapper>
        <SearchText>Search the breed: </SearchText>
        <Input
          ref={textInput}
          onKeyPress={event => (event.key === "Enter" ? searchBreed() : null)}
          placeholder="Type and press enter to search"
        />
      </SearchWrapper>
      {statusMessage()}
      <ResultsWrapper>{renderCatInfos()}</ResultsWrapper>
      {renderLoadMoreBtn()}
    </Wrapper>
  );
};

export default Search;
