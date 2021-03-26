import Image from "next/image";
import Link from "next/link";
import utilStyles from '../src/styles/utils.module.scss'

export default function Profile({name, isHome}: {name: string, isHome: boolean}){
    return isHome ? (
        <>
          <Image
            priority
            src="/images/profile_logo.jpg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt={name}
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </>
      ) : (
        <>
          <Link href="/">
            <a>
              <Image
                priority
                src="/images/profile_logo.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </a>
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href="/">
              <a className={utilStyles.colorInherit}>{name}</a>
            </Link>
          </h2>
        </>
      )
    
}