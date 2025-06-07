"use client";

import { Helmet } from "react-helmet-async";

export default function TitleHelmet({ title }: { title: string }) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}