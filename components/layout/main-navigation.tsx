import Link from "next/link";

import Logo from "./logo";
import classes from "./main-navigation.module.css";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav >
        <ul >
          <li>
            <Link href="/posts">게시글</Link>
          </li>
          <li>
            <Link href="/contact">연락처</Link>
          </li>
          <li>
            <Link href="/members">부원 소개</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
