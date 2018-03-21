/* @flow */
import React from 'react';
import './App.scss';
import BasicForm from './components/BasicForm';
import { connect } from 'react-redux';
import SkillForm from './components/SkillForm';
import PortfolioForm from './components/PortfolioForm';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';

type Props={
	values: mixed
}

class App extends React.Component<Props>{
	submit = (values)=>{
		console.log(values);
		
	}

	render() {
		console.log('values from store', this.props.values);
		
		return (
			<BrowserRouter>
				<div>
					<Header />
					<Route
						exact
						path="/"
						render={()=><BasicForm onSubmit={this.submit} />}
					/>
					<Route
						path="/skill"
						render={()=><SkillForm onSubmit={this.submit}/>}
					/>
					<Route
						path="/portfolio"
						render={()=><PortfolioForm onSubmit={this.submit}/>}
					/>	
					
				</div>				
			</BrowserRouter>
		);
	}
}

const mapStateToProps = state=>{
	return{
		values: state.form
	};
};

export default connect(mapStateToProps)(App);
