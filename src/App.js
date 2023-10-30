import { Link } from "react-router-dom";
import Pages from "./Pages/Pages";
import Category from "./Components/Category";
import Search from "./Components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

const App = () => {
  return (
    <div>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>Xelar</Logo>
      </Nav>
      {!process.env.REACT_APP_API_KEY ? (
        <p>
          Please get the API key from{" "}
          <strong>
            <a href="https://spoonacular.com/food-api/">Spoonacular Food Api</a>
          </strong>
          <br />
          <br />
          and add it in your env file with <strong>""</strong> name and restart
          the app
        </p>
      ) : (
        <>
          <Search />
          <Category />
          <Pages />
        </>
      )}
    </div>
  );
};

const Nav = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

export default App;
