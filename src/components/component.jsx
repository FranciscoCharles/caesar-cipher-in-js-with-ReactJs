import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import TextAreaComponent from './textarea'
import InputNumber from './input_number'
import { cesars_cipher, total_keys } from '../cesars_cipher'

const Container = styled.div`

	position: absolute;
	width: 40%;
	height: 80%;
	left: 50%;
	top: 50%;
  transform: translate(-50%, -50%);

	border: 0.125rem solid black;
	border-radius: 1.25rem;
	background-color: white;
	
	display: flex;
	flex-direction: column;
	align-items: center;
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
		setResult(() => (text) ? cesars_cipher(text, shift) : '')
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
