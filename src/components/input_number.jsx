import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { getInputValue } from '../../util'

const InputNumberStyled = styled.div`

	margin-top: 10px;
	margin-bottom: 10px;
	display: grid;
	
	height: 40px;
	grid-template-columns: 30px 30px;
	grid-template-areas: "input btn1" "input btn2";

	& button{
		height:20px;
		width: 30px;
		align-items: center;
	}

	& :nth-child(1){
		font-size: 16px;
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
	function handleChange(value) {
		let regex = /^[-+]?[\d]+$/
		if (regex.test(value)) {
			let number = parseInt(value)
			if (number < props.min) {
				props.onChange(props.min)
			} else if (number >= props.max) {
				props.onChange(props.max)
			} else {
				props.onChange(number)
			}
		}
	}
	function increment() {
		if (props.value < props.max) {
			props.onChange(props.value + 1)
		}
	}
	function decrement() {
		if (props.value > props.min) {
			props.onChange(props.value - 1)
		}
	}

	return (
		<InputNumberStyled>
			<input type="text" value={props.value} onChange={getInputValue(handleChange)} />
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