import React from 'react'
import MyComponent from './components/component.jsx'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

	html{
		height: 100%;
		width: 100%;
	}
  body {
    width: 500px;
		height: 500px;
		overflow: auto;
		background: #020024;
		background: linear-gradient(90deg, #020024 0%, #778899 50%, #9dc7f0 100%);
		font-size: 16px;
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
