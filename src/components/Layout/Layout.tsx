import styled from "styled-components";
import { GlobalStyle } from "./global";
import { Outlet } from "react-router-dom";

export const Container = styled.div``;

const Layout = () => {
	return (
		<Container>
			<Outlet />
			<GlobalStyle />
		</Container>
	);
};

export default Layout;
