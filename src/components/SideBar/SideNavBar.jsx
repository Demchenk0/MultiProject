// import React from 'react';

// const SideNavBar = ({children}) => {
// 	return (
// 		<div style={{ background: 'red' }}>
// 			SideNavBar
// 			<main style={{width:"100"}}>{children}</main>
// 		</div>
// 	);
// };

// export default SideNavBar;

import React from 'react';
import styles from './SideNavBar.module.scss';
import {
	BsFiletypeJs,
	BsFiletypeJson,
	BsFiletypeGif,
	BsFiletypeCss,
	BsFiletypeHtml,
} from 'react-icons/bs';
import Link from 'next/link'
const SideNavBar = () => {
	return (
		<div style={{display: 'flex', position: "fixed"}}>
		<div className={styles.section}>
			<div className={styles.group}>
				<Link href="/">
					<BsFiletypeJs size={25} />
				</Link>
				<Link href="/sania">
					<BsFiletypeJson size={25} />
				</Link>
				<Link href="/nikolai">
					<BsFiletypeGif size={25} />
				</Link>
				<Link href="/valera">
					<BsFiletypeCss size={25} />
				</Link>
				<Link href="/5">
					<BsFiletypeHtml size={25} />
				</Link>
			</div>
            {/* <main>{children}</main> */}
		</div>
		</div>
	);
};

export default SideNavBar;
