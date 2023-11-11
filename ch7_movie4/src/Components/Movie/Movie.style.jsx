import styled from 'styled-components';

const MovieOverview =styled.div`
  position: absolute;
  top: 0;
  height: 340px;
  width: 200px;
  background-color: #0000008f;
  color: white;
  border-radius: 5px;
  display: none;
`;

const MovieContainer = styled.div`
  position: relative;
  background-color: rgba(255, 255, 255, 0.099);
  height: 340px;
  width: 200px;
  border-radius: 5px;
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 20px;
  &:hover {
    ${MovieOverview}{
        display: block;
    }
  };
`;

const MovieImg = styled.img`
  width: 200px;
  height: 300px;
`;

const TitleContainer = styled.div`
  color: white;
  display: flex;
  height: 35px;
  align-items: center;
  font-size: 12px;
  justify-content: space-around;
`;

const OverviewText = styled.div`
  height: 176px;
  overflow: hidden;
  padding: 0px 13px;
`;

function Movie2({ title, poster, vote, overview }) {
    return (
      <>
        <MovieContainer>
          <MovieImg src={poster} alt={title} />
          <TitleContainer>
            <div>{title}</div>
            <div>{vote}</div>
          </TitleContainer>
          <MovieOverview><h4>{title}</h4><OverviewText>{overview}</OverviewText></MovieOverview>
        </MovieContainer>
      </>
    )
  }
  
  export default Movie2