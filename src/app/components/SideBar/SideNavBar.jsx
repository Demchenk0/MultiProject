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
		<div className={styles.section}>
			<div className={styles.group}>
				<Link href="/1">
					<BsFiletypeJs size={25} />
				</Link>
				<Link href="/2">
					<BsFiletypeJson size={25} />
				</Link>
				<Link href="/3">
					<BsFiletypeGif size={25} />
				</Link>
				<Link href="/4">
					<BsFiletypeCss size={25} />
				</Link>
				<Link href="/5">
					<BsFiletypeHtml size={25} />
				</Link>
			</div>
            {/* <main>{children}</main> */}
		</div>
	);
};

export default SideNavBar;
