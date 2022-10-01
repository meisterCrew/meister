import { Group } from "@mantine/core";
import Head from "next/head";
import { Fragment } from "react";
import MemberLayout from "../components/members/memberlayout";

export default function Members(props : any) {
  return (
    <Fragment>
      <Head>
        <title>Members</title>
        <meta name="description" content="welcome to Meister Page :)" />
      </Head>
      <MemberLayout />
    </Fragment>
  );
}
