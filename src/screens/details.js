import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

class DetailsScreen extends Component{
	render()
	{
		return(
			<View>
				<Text>DetailsScreen</Text>
			</View>
		);
	}
}

export default DetailsScreen;


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000000'
	}
});