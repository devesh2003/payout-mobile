import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import axios from 'axios'
import { getToken, saveToken, deleteTokens } from '../../tokenFunc'
import { widthPercentageToDP } from 'react-native-responsive-screen'

export const QRScanner = (props) => {
	const [hasPermission, setHasPermission] = useState(null)
	const [scanned, setScanned] = useState(false)
	const [text, setText] = useState('Not yet scanned')

	// console.log(props)

	const askForCameraPermission = () => {
		;(async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync()
			setHasPermission(status === 'granted')
		})()
	}

	// Request Camera Permission after rendered
	useEffect(() => {
		askForCameraPermission()
	}, [])

	// What happens when we scan the bar code
	const handleBarCodeScanned = ({ type, data }) => {
		// setScanned(true)
		// setText(data)

		// if (username?.length <= 0 || password.length <= 0) {
		// 	setValidate(true)
		// } else {
		// setCredErr(false)
		// setValidate(false)
		// axios
		// 	.post('https://untitledarhnhack.herokuapp.com/api/auth/signin', {
		// 		username,
		// 		password
		// 	})
		// 	.then((res) => {
		// 		console.log(res.data)
		saveToken('accessToken', data)
		props.nav.navigate('Profile')
		// })
		// .catch((err) => {
		// 	console.log(err.message)
		// 	setCredErr(true)
		// 	deleteTokens()
		// })
		// }

		// console.log('Type: ' + type + '\nData: ' + data)
	}

	// Check permissions and return the screens
	if (hasPermission === null) {
		return (
			<View style={styles.container}>
				<Text>Requesting for camera permission</Text>
			</View>
		)
	}
	if (hasPermission === false) {
		return (
			<View style={styles.container}>
				<Text style={{ margin: 10 }}>No access to camera</Text>
				<Button
					title={'Allow Camera'}
					onPress={() => askForCameraPermission()}
				/>
			</View>
		)
	}

	// Return the View
	return (
		<View style={styles.container}>
			<View style={[styles.barcodebox]}>
				<BarCodeScanner
					onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
					style={{ height: 700, width: 700 }}
				/>
			</View>
			<Text style={styles.maintext}>{text}</Text>

			{scanned && (
				<Button title={'Scan again?'} onPress={() => setScanned(false)} />
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: '#A0D2EB',
		alignItems: 'center',
		justifyContent: 'center'
	},
	maintext: {
		fontSize: 16,
		margin: 20
	},
	barcodebox: {
		alignItems: 'center',
		justifyContent: 'center',
		height: widthPercentageToDP('70%'),
		width: widthPercentageToDP('70%'),
		overflow: 'hidden',
		borderRadius: 30
	}
})
