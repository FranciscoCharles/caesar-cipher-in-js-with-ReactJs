import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import TextAreaComponent from './textarea'
import InputNumber from './input_number'
import { caesars_cipher, total_keys } from '../caesars_cipher'

const Container = styled.div`

	position: absolute;
	left: 50%;
	top: 50%;
  transform: translate(-50%, -50%);

	width: auto;
	height: auto;

	display: flex;
	flex-direction: column;
	align-items: center;

	border-radius: 1.25rem;
	background-color: white;
	
	padding: 0 1rem 1rem 1rem;

	@media screen and (max-height: 414px){

		padding: 0 1rem 1rem 1rem;
		margin-bottom: 0;
    margin-top: 0;

		div textarea{
			height: 15vh;
		}
		
	}
	@media screen and (max-height: 304px){
		
		div textarea{
			
			height: 10vh;
			margin-bottom: 0;
    	margin-top: 0;
		}
	}
`;

function copyToClipboard(text) {
	let elem = document.createElement('textarea')
	document.body.appendChild(elem)
	elem.innerText = text
	elem.select()
	document.execCommand('copy')
	elem.remove()
}

function MyComponent() {

	const [text, setText] = useState('')
	const [result, setResult] = useState('')
	const [shift, setShift] = useState(0)

	function encriptar(text) {
		setText(() => text.replaceAll(/[^a-z \n]/gi, '',))
	}
	function updateShift(value) {
		setShift(() => value)
	}

	useEffect(() => {
		setResult(() => (text) ? caesars_cipher(text, shift) : '')
	}, [text, shift])

	return (
		<Container>
			<TextAreaComponent name='Text' value={text} onChange={encriptar} />
			<TextAreaComponent name='Result' value={result} isReadOnly={true} />
			<InputNumber max={total_keys - 1} value={shift} onChange={updateShift} />
			<button onClick={() => copyToClipboard(result)}> copy text </button>
		</Container>
	)
}

export default MyComponent
