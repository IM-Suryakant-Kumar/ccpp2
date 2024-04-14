import styled from "styled-components";

export const Container = styled.div`
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const Title = styled.p`
  color: #f00;
  font-size: 1.2rem;
  font-weight: bold;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
    font-weight: bolder;
  }
`;
