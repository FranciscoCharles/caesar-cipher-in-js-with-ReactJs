import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { getInputValue, emptyFunction } from '../util'

const Label = styled.label`
  display: inline-block;
	width: auto;
	height: 1.25rem;
	padding-right: 0.5rem;
	font-size: 1.6rem;
	text-align: left;
	font-weight: bold;
	font-family: Arial, Helvetica, sans-serif;
`;

const TextArea = styled.textarea`
	
	width: 70vw;
	height: 20vh;
	font-size: 1.8rem;
	font-family: Arial, Helvetica, sans-serif;
	border-radius: 2rem;

	:focus{
		outline: none;
		border-width: 0.2rem;
		border-radius: 2rem;
	}
`;
const Div = styled.div`

	display: flex;
	flex-direction: column;
	
	${Label}{
		margin-top: 2rem;
		margin-bottom: 2rem;
	}
`;

export default function TextAreaComponent(props) {

	return (
		<Div>
			<Label> {props.name} : </Label>
			{ (props.isReadOnly)
				? <TextArea value={props.value} onChange={getInputValue(props.onChange)} rows="5" cols="33" readOnly />
				: <TextArea value={props.value} onChange={getInputValue(props.onChange)} rows="5" cols="33" />
			}
		</Div>
	)
}

TextAreaComponent.defaultProps = {
	onChange: emptyFunction
}

TextAreaComponent.propTypes = {
	name: PropTypes.string,
	value: PropTypes.any,
	onChange: PropTypes.func
}

