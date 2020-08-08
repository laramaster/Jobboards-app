import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, FlatList } from 'react-native';

import {Feather,EvilIcons,AntDesign,FontAwesome5,FontAwesome,MaterialIcons} from '@expo/vector-icons';

class HomeScreen extends Component{
	render()
	{
		const recentjobs = [
			{
				id: 1,
				title: 'UX/UI Designer',
				location: 'CHENNAL, INDIA'
			},
			{
				id: 2,
				title: 'WEB Developer',
				location: 'CHENNAL, INDIA'
			},
			{
				id: 3,
				title: 'WEB Designer',
				location: 'CHENNAL, INDIA'
			}
		]
		return(
			<View>
				<View style={styles.headerArea}>
					<View style={styles.headerTopArea}>
						<Text style={styles.logoColor}>glassdoor</Text>
						<Text style={styles.headerIcon}>+</Text>
					</View>
					<View style={styles.headerContent}>
						<Text style={styles.headerText}>Land your dream job</Text>
					</View>
					<View style={styles.headerSearch}>
						<TextInput style={styles.searchbox} placeholder="job Titles, keywords or Company"/>
						<Feather name='search' size={22} color='#ddd' style={styles.iconSearch}/>
					</View>
				</View>
				<ScrollView>
					<View style={styles.searchArea}>
						<Text style={styles.sreachTitle}>Recent Searches</Text>
						<View>
							<FlatList
							horizontal={true}
							showsHorizontalScrollIndicator={false}
                            data={recentjobs}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({item}) => {
                                return (
	                                    <View style={styles.recentjobsRow}>
	                                        <View style={styles.flexTitle}>
	                                        	<Text style={styles.jobTitle}>{item.title}</Text>
	                                        	<MaterialIcons style={{ marginTop: 2 }} name="keyboard-arrow-right" size={25} color="#707070" />
	                                        </View>
	                                        <Text style={styles.locationJobs}>{item.location}</Text>
	                                    </View>
	                                )
	                            }}
							/>
						</View>
					</View>
					<View style={styles.jobArea}>
						<View style={styles.dFlex}>
							<Text style={styles.sreachTitle}>Just For You</Text>
							<View style={{flexDirection: 'row' }}>
								<Text style={styles.filterColor}>Filters</Text>
								<Feather style={styles.filterIcon} name="filter" size={20} color="#666" />
							</View>
						</View>
						<View style={{ marginTop: 10,marginBottom: 30}}>
							<View style={styles.bgWhite}>
								<View style={styles.dFlex1}>
									<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F9F9F9',padding: 10 }}>
										<AntDesign name="apple1" size={24} color="#707070" />
									</View>
									<View>
										<Text style={{color: '#666',fontSize: 18,marginBottom: 3}}>Sr. UI/UX Designer</Text>
										<Text style={{ color: '#a3a2a2',fontSize: 16 }}>APPLE</Text>
									</View>
									<View>
										<Feather style={{ textAlign: 'right', fontSize: 20,marginBottom: 5,marginTop: 5 }} name="heart" size={20} color="#666" />
										<View style={{flexDirection: 'row',color: '#a3a2a2',fontSize: 16}}>
											<EvilIcons name="location" size={20} color="#a3a2a2" />
											<Text style={{ color: '#a3a2a2',fontSize: 16 }}>USA</Text>
										</View>
									</View>
								</View>
								<View style={styles.dFlex}>
									<Text style={{ color: '#a3a2a2',fontSize: 17 }}>DISMISS</Text>
									<Text style={{ color: '#008B23',fontSize: 17 }}>LEARN MORE</Text>
								</View>
							</View>
							<View style={styles.bgWhite}>
								<View style={styles.dFlex1}>
									<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F9F9F9',padding: 10 }}>
										<FontAwesome5 name="microsoft" size={24} color="#707070" />
									</View>
									<View>
										<Text style={{color: '#666',fontSize: 18,marginBottom: 3}}>Web Developer</Text>
										<Text style={{ color: '#a3a2a2',fontSize: 16 }}>Amcoders</Text>
									</View>
									<View>
										<Feather style={{ textAlign: 'right', fontSize: 20,marginBottom: 5,marginTop: 5 }} name="heart" size={20} color="#666" />
										<View style={{flexDirection: 'row',color: '#a3a2a2',fontSize: 16}}>
											<EvilIcons name="location" size={20} color="#a3a2a2" />
											<Text style={{ color: '#a3a2a2',fontSize: 16 }}>BDT</Text>
										</View>
									</View>
								</View>
								<View style={styles.dFlex}>
									<Text style={{ color: '#a3a2a2',fontSize: 17 }}>DISMISS</Text>
									<Text style={{ color: '#008B23',fontSize: 17 }}>LEARN MORE</Text>
								</View>
							</View>
							<View style={styles.bgWhite}>
								<View style={styles.dFlex1}>
									<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F9F9F9',padding: 10 }}>
										<FontAwesome name="facebook-square" size={24} color="#707070" />
									</View>
									<View>
										<Text style={{color: '#666',fontSize: 18,marginBottom: 3}}>Frontend Developer</Text>
										<Text style={{ color: '#a3a2a2',fontSize: 16 }}>Helloarafat</Text>
									</View>
									<View>
										<Feather style={{ textAlign: 'right', fontSize: 20,marginBottom: 5,marginTop: 5 }} name="heart" size={20} color="#666" />
										<View style={{flexDirection: 'row',color: '#a3a2a2',fontSize: 16}}>
											<EvilIcons name="location" size={20} color="#a3a2a2" />
											<Text style={{ color: '#a3a2a2',fontSize: 16 }}>USA</Text>
										</View>
									</View>
								</View>
								<View style={styles.dFlex}>
									<Text style={{ color: '#a3a2a2',fontSize: 17 }}>DISMISS</Text>
									<Text style={{ color: '#008B23',fontSize: 17 }}>LEARN MORE</Text>
								</View>
							</View>
							<View style={styles.bgWhite}>
								<View style={styles.dFlex1}>
									<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F9F9F9',padding: 10 }}>
										<AntDesign name="apple1" size={24} color="#707070" />
									</View>
									<View>
										<Text style={{color: '#666',fontSize: 18,marginBottom: 3}}>Sr. UI/UX Designer</Text>
										<Text style={{ color: '#a3a2a2',fontSize: 16 }}>APPLE</Text>
									</View>
									<View>
										<Feather style={{ textAlign: 'right', fontSize: 20,marginBottom: 5,marginTop: 5 }} name="heart" size={20} color="#666" />
										<View style={{flexDirection: 'row',color: '#a3a2a2',fontSize: 16}}>
											<EvilIcons name="location" size={20} color="#a3a2a2" />
											<Text style={{ color: '#a3a2a2',fontSize: 16 }}>USA</Text>
										</View>
									</View>
								</View>
								<View style={styles.dFlex}>
									<Text style={{ color: '#a3a2a2',fontSize: 17 }}>DISMISS</Text>
									<Text style={{ color: '#008B23',fontSize: 17 }}>LEARN MORE</Text>
								</View>
							</View>
							<View style={styles.bgWhite}>
								<View style={styles.dFlex1}>
									<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F9F9F9',padding: 10 }}>
										<AntDesign name="apple1" size={24} color="#707070" />
									</View>
									<View>
										<Text style={{color: '#666',fontSize: 18,marginBottom: 3}}>Sr. UI/UX Designer</Text>
										<Text style={{ color: '#a3a2a2',fontSize: 16 }}>APPLE</Text>
									</View>
									<View>
										<Feather style={{ textAlign: 'right', fontSize: 20,marginBottom: 5,marginTop: 5 }} name="heart" size={20} color="#666" />
										<View style={{flexDirection: 'row',color: '#a3a2a2',fontSize: 16}}>
											<EvilIcons name="location" size={20} color="#a3a2a2" />
											<Text style={{ color: '#a3a2a2',fontSize: 16 }}>USA</Text>
										</View>
									</View>
								</View>
								<View style={styles.dFlex}>
									<Text style={{ color: '#a3a2a2',fontSize: 17 }}>DISMISS</Text>
									<Text style={{ color: '#008B23',fontSize: 17 }}>LEARN MORE</Text>
								</View>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}

export default HomeScreen;


const styles = StyleSheet.create({
	headerArea: {
		height: 250,
		backgroundColor: '#1F8F42'
	},
	headerTopArea:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 20,
		marginTop: 40 
	},
	logoColor: {
		color: '#fff',
		fontSize: 28,
		fontWeight: 'bold'
	},
	headerIcon: {
		color: '#fff',
		fontSize: 28,
		fontWeight: 'bold'
	},
	headerText:{
		marginTop: 25,
		textAlign: 'center',
		color: '#fff',
		fontSize: 22,
		fontWeight: 'normal'
	},
	headerSearch: {
		textAlign: 'center',
		marginTop: 20,
		flexDirection: 'row',
		justifyContent: 'center',
		position: 'relative'  
	},
	searchbox: {
		backgroundColor: '#fff',
		padding: 10,
		width: '90%',
		borderRadius: 30,
		paddingLeft: 20
	},
	iconSearch: {
		position: 'absolute',
		top: 13,
		right: 30
	},
	searchArea: {
		backgroundColor: '#fff',
		paddingVertical: 30,
		paddingLeft: 20
	},
	sreachTitle: {
		color: '#666',
		fontSize: 18,
		fontWeight: '600',
		marginBottom: 10
	},
	recentjobsRow: {
		backgroundColor: '#F7F7F7',
		marginRight: 10,
		padding: 20,
		borderRadius: 5
	},
	flexTitle: {
		flexDirection: 'row',
		justifyContent: 'space-between' 
	},
	jobTitle: {
		fontSize: 20,
		fontWeight: '600',
		marginRight: 10,
		color: '#707070',
		marginBottom: 5
	},
	locationJobs: {
		color: '#a3a2a2',
		fontSize: 16
	},
	jobArea: {
		paddingVertical: 30,
		paddingLeft: 20,
		paddingRight: 20,
		backgroundColor: '#F7F7F7'
	},
	dFlex: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	filterColor: {
		fontSize: 18,
		color: '#1D8C3F',
		fontWeight: '600'
	},
	filterIcon: {
		marginLeft: 3,
		marginTop: 3
	},
	bgWhite: {
		backgroundColor: '#fff',
		paddingVertical: 20,
		paddingHorizontal: 15,
		borderRadius: 5,
		marginBottom: 20
	},
	dFlex1: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20
	}
});