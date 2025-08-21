import * as React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <section className="flex flex-col items-stretch mx-auto px-6">
      {children}
    </section>
  );
}
