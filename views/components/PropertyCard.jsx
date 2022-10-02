import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import * as Linking from 'expo-linking'

export default function App({
	style,
	image,
	address,
	// tagline,
	page,
	// mainlink,
	share_price,
	total_shares,
	invested_amount,
	disp_value
}) {
	return (
		<View
			style={[
				style ? style : null,
				{ backgroundColor: '#fff', padding: 20, borderRadius: 10 }
			]}
		>
			<View
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-start',
					alignItems: 'left'
				}}
			>
				<Image
					style={{
						height: 52.5 * 3,
						width: 52.5 * 5.3,
						borderRadius: 7.5,
						marginRight: 10,
                        // marginLeft: 12
					}}
					source={{
						uri: image
							? image
							: 'https://cdn-images-1.medium.com/max/1600/1*SkFEBcaoea9WXIdQg2GsTw.png'
					}}
				/>
				<View style={{
                    marginTop: 8,
                    alignContent: "center",
                    alignItems: "center"
                }}>
					<Text
						style={{
							fontSize: 17,
							fontFamily: 'HelveticaBold',
							color: '#222'
						}}
					>
						{address ? address : 'Property Name'}
					</Text>
                    
                    
					{/* <Text
						style={{
							fontSize: 12,
							fontFamily: 'HelveticaBold',
							color: '#222',
							opacity: 0.5,
							// width: wp('75%') - 70,
							// lineHeight: 16
							// borderColor: 'green',
							// borderWidth: 1
						}}
					>
						{tagline ? "tagline" : 'Property Location'}
					</Text> */}

				</View>
			</View>

			<View
				style={{
					marginTop: 8,
					flex: 1,
					flexDirection: 'row',
					justifyContent: 'flex-start',
					alignItems: 'center'
				}}
			>
				<View style={{ width: wp('48%') - 70 }}>
					<Text
						style={{
							fontSize: 22,
							fontFamily: 'HelveticaBold',
							color: '#00EC96',
							marginBottom: 2.55,
							opacity: 0.5
						}}
					>
						{share_price 
							? `$${share_price}`
							: 'n/a'}
					</Text>
					<Text
						style={{
							fontSize: 12,
							fontFamily: 'HelveticaBold',
							color: '#222',
							opacity: 0.5
						}}
					>
						{/* funding goal */}
                        Share Price
					</Text>
				</View>
				<View
					style={{
						height: 30,
						width: 1,
						backgroundColor: '#222',
						marginHorizontal: 20
					}}
				/>

				{/* Property value View */}
				
				{disp_value ? 
				(<View style={{ width: wp('50%') - 70 }}>
					<Text
						style={{
							fontSize: 22,
							fontFamily: 'HelveticaBold',
							color: '#00EC96',
							marginBottom: 2.55,
							opacity: 0.5
						}}
					>
						{total_shares ? `\$${total_shares * share_price}` : '$0'}
					</Text>
					<Text
						style={{
							fontSize: 12,
							fontFamily: 'HelveticaBold',
							color: '#222',
							opacity: 0.5
						}}
					>
						Property Value
					</Text>
				</View>) : null}

				{/* Invested amount */}
				{invested_amount ?
				(<View style={{ width: wp('50%') - 70 }}>
					<Text
						style={{
							fontSize: 22,
							fontFamily: 'HelveticaBold',
							color: '#00EC96',
							marginBottom: 2.55,
							opacity: 0.5
						}}
					>
						{invested_amount ? `\$${invested_amount.toString()
													.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` : '$0'}
					</Text>
					<Text
						style={{
							fontSize: 12,
							fontFamily: 'HelveticaBold',
							color: '#222',
							opacity: 0.5
						}}
					>
						Investment
					</Text>
				</View>) : null}

			</View>

			{page == 'discover' ? (
				<View>
					{/* <Text>yo</Text> */}
					{true ? (
						<TouchableOpacity
							// onPress={() => Linking.openURL(mainlink)}
							onPress={() => {console.log("Leanr more clicked!")}}
							style={{
								paddingVertical: 15,
								paddingHorizontal: 20,
								backgroundColor: '#eaeaea',
								borderRadius: 7.5,
								marginTop: 12.5,
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center'
							}}
						>
							<Text
								style={{
									fontSize: 14,
									fontFamily: 'HelveticaReg',
									color: '#222'
								}}
							>
								Learn More
							</Text>
							<Text
								style={{
									fontSize: 14,
									fontFamily: 'HelveticaReg',
									color: '#222',
									marginRight: 10
								}}
							>
								&rarr;
							</Text>
						</TouchableOpacity>
					) : null}
				</View>
			) : null}
		</View>
	)
}
