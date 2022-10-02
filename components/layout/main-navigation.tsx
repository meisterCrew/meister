import { Burger, Menu, Text } from "@mantine/core";
import {
  IconSettings,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconArrowsLeftRight,
  IconTrash,
  IconArticle,
  IconAccessible,
  IconFriends,
} from "@tabler/icons";
import Link from "next/link";
import { useState } from "react";
import Hero from "../home-page/hero";

import Logo from "./logo";
import classes from "./main-navigation.module.css";

export default function MainNavigation() {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";
  return (
    <header className={classes.header}>
      <Hero />
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Burger
            color="white"
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            title={title}
          />
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>메뉴</Menu.Label>
          <Link href="/posts">
            <Menu.Item icon={<IconArticle size={14} />}>게시글</Menu.Item>
          </Link>
          <Link href="/members">
            <Menu.Item icon={<IconFriends size={14} />}>부원 소개</Menu.Item>
          </Link>
        </Menu.Dropdown>
      </Menu>
      {/* <nav>
        <ul>
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
      </nav> */}
    </header>
  );
}
