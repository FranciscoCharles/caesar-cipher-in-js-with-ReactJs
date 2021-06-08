import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { getInputValue } from '../util'

const InputNumberStyled = styled.div`

margin-top: 1rem;
	margin-bottom: 1rem;
	display: grid;
	
	height: 4rem;
	grid-template-columns: 3rem 3rem;
	grid-template-areas: "input btn1" "input btn2";

	& button{
		height:2rem;
		width: 3rem;
		align-items: center;
	}

	& :nth-child(1){
		font-size: 1.6rem;
		text-align: center;
		grid-area: input;
	}
	& :nth-child(2){
		grid-area: btn1;
	}
	& :nth-child(3){
		grid-area: btn2;
	}
`;

export default function InputNumber(props) {

	let [value, setValue] = useState(props.value)

	function handleChange(value) {
		let regex = /^(|[-+]?[\d]+)$/
		if (regex.test(value)) {
			if (value !== '') {
				value = getValue(value)
				props.onChange(value)
			}
			setValue(() => value)
		} else {
			setValue(() => props.value)
		}
	}
	function increment() {
		let number = getValue(value)
		if (number < props.max) {
			number += 1
			setValue(() => number)
			props.onChange(number)
		}
	}
	function decrement() {
		let number = getValue(value)
		if (number > props.min) {
			number -= 1
			setValue(() => number)
			props.onChange(number)
		}
	}
	function getValue(value) {
		if (value === '') {
			return props.value
		}
		let number = parseInt(value)
		if (number < props.min) {
			return props.min
		}
		if (number >= props.max) {
			return props.max
		}
		return number
	}
	function handleBlur() {
		let number = getValue(value)
		props.onChange(number)
		setValue(() => number)
	}
	return (
		<InputNumberStyled>
			<input type="text" onBlur={handleBlur} value={value} onChange={getInputValue(handleChange)} />
			<button onClick={increment} >&#9650;</button>
			<button onClick={decrement} >&#9660;</button>
		</InputNumberStyled>
	)
}

InputNumber.defaultProps = {
	min: 0,
	max: 0
}

InputNumber.propTypes = {
	value: PropTypes.number.isRequired,
	min: PropTypes.number,
	max: PropTypes.number,
	onChange: PropTypes.func.isRequired
}