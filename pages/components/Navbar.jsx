import React from 'react'
import styles from './Navbar.module.css'
import Link from "next/link"
import Image from 'next/image'

function Navbar() {
    return (<nav className={styles.container}>
                    <Image src="/Logo-blue.svg" className={styles.logo} alt="vape Logo" width={500} height={50} />
                    <i className="fa fa-bars"></i>
                    <i className="fa fa-bars"></i>
 <div className={styles.navbar}>???
<Link href="/about">Abotu Us</Link>
<Link href="/about">Creators</Link>
<Link href="/about">How It Works</Link>
<Link href="/about">Learn More</Link>
<Link href="/about">Login</Link>
<button className={styles.button}>Start Learning today</button>
      </div>
      </nav>
    )
}

export default Navbar
