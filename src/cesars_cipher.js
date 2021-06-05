const space = ' '
const numbers_set = '0123456789'
const char_set = 'abcdefghijklmnopqrstuvwxyz'

export const keys = (char_set + char_set.toLocaleUpperCase()
	+ space + numbers_set).split('')

export const total_keys = keys.length

export function decode_letter(letter, shift) {
	if (letter === '\n') {
		return letter
	}
	let rest = (letter - shift) % total_keys
	return (rest > 0) ? rest : total_keys - rest
}
export function encode_letter(letter, shift) {
	return (letter !== '\n') ? (keys.indexOf(letter) + shift) % total_keys : letter
}

export const cesars_cipher = (text, shift) => {
	return text.split('').reduce((acc, letter) => {
		return acc + ((letter !== '\n') ? keys[encode_letter(letter, shift)] : letter)
	}, '')
}