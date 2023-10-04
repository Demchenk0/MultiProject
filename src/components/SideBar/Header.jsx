// import React from 'react';
// import styles from './SideNavBar.module.scss';
// import {
// 	BsFiletypeJs,
// 	BsFiletypeJson,
// 	BsFiletypeGif,
// 	BsFiletypeCss,
// 	BsFiletypeHtml,
// } from 'react-icons/bs';
// import Link from 'next/link';
// const Header = ({children}) => {
// 	return (
// 		<nav>
// 			<div style={{ display: 'flex' }}>
// 				<div className={styles.section}>
// 					<div className={styles.group}>
// 						<Link href="/">
// 							<BsFiletypeJs size={25} />
// 						</Link>
// 						<Link href="/sania">
// 							<BsFiletypeJson size={25} />
// 						</Link>
// 						<Link href="/nikolai">
// 							<BsFiletypeGif size={25} />
// 						</Link>
// 						<Link href="/valera">
// 							<BsFiletypeCss size={25} />
// 						</Link>
// 						<Link href="/">
// 							<BsFiletypeHtml size={25} />
// 						</Link>
// 					</div>
// 					<main>{children}</main>
// 				</div>
// 			</div>
// 		</nav>
// 	);
// };

// export default Header;

import React from 'react'

const Header = () => {
  return (
	<div style={{display: "flex", justifyContent:"space-between", padding: '0 16px', paddingTop: "16px"}}>
		<h2>blablabla</h2>
		<h2>xaaxaxaxax</h2>
	</div>
  )
}

export default Header