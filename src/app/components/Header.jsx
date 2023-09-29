import React from 'react';
import styles from './SideBar/SideNavBar.module.scss';
import {
	BsFiletypeJs,
	BsFiletypeJson,
	BsFiletypeGif,
	BsFiletypeCss,
	BsFiletypeHtml,
} from 'react-icons/bs';
import Link from 'next/link'
const Header = () => {
	return (
		<div style={{display: 'flex'}}>
		<div className={styles.section}>
			<div className={styles.group}>
				<Link href="/1">
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

export default Header;