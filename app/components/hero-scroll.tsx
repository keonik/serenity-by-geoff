import React from "react";
import { ContainerScroll } from "./aceternity/container-scroll-animation";

type Props = Record<string, never>;

export default function HeroScroll(_props: Props) {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Smell your problems away with
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Serenity by Geoff
              </span>
            </h1>
          </>
        }
      >
        <img
          src="https://images.unsplash.com/photo-1603959452586-78397d087b62?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhbmRsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Serenity by Geoff candles"
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
