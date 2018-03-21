//@flow
import React from 'react';
import styles from './Header.scss';
import {NavLink, withRouter} from 'react-router-dom';

class Header extends React.Component<{}>{
	render(){
        
		return(
			<section>
				<article className={styles.title}>Let's talk</article>
				<article className={styles['sub-title']}>Think you have what it takes? Show us</article>
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="col-sm-8">
							<div className={`${styles.nav} d-flex justify-content-center`}>
								<ul className="d-flex">
									<NavLink
										to="/"
										activeClassName={styles.active}
										className={styles.li}
										isActive={(match, location)=>{
											return location.pathname === '/';
										}}
									>Basic Form</NavLink>
									<NavLink to="/skill" activeClassName={styles.active} className={styles.li}>Skill Form</NavLink>
									<NavLink to="/portfolio" activeClassName={styles.active} className={styles.li}>Portfolio Form</NavLink>
								</ul>
							</div>
						</div>
					</div>
				</div>
				
			</section>
		);
	}
}

export default withRouter(Header);