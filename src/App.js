import React from 'react'
import MyComponent from './components/component.jsx'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

	html{
		font-size: 62.5%;
	}
	html, body{
		margin:0;
		padding: 0;
		overflow: none;
		width: 100vw;
		height: 100vh;
	}
  body {
		background: #020024;
		background: linear-gradient(90deg, #020024 0%, #778899 50%, #9dc7f0 100%);
		font-size: 1.6rem;
		justify-content: center;
  }
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<MyComponent />
		</>
	)
}
export default App
