import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { getInputValue, emptyFunction } from '../util'

const Label = styled.label`
  display: inline-block;
	width: 5rem;
	height: 1.25rem;
	padding-right: 0.625rem;
	font-size: 1.25rem;
	text-align: left;
	font-weight: bold;
	font-family: Arial, Helvetica, sans-serif;
`;

const TextArea = styled.textarea`
	
	width: 100%;
	height: 120px;
	font-size: 1.625rem;
	font-family: Arial, Helvetica, sans-serif;
	border-radius: 20px;
	padding-left:0px;
	padding-left:0px;
	margin-right:0px;
	margin-right:0px;
	
	:focus{
		outline: none;
		border-width: 2px;
		border-radius: 20px;
	}
`;
const Div = styled.div`

	display: flex;
	flex-direction: column;
	
	${Label}{
		margin-top: 20px;
		margin-bottom: 20px;
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

