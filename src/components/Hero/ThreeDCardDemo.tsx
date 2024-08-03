import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

interface ThreeDCardDemoProps {
  imageUrl: string;
  altText: string;
  height: number;
  width: number;
  hide?: boolean; // Optional prop to conditionally hide the component
}

export function ThreeDCardDemo({ imageUrl, altText, height, width, hide = false }: ThreeDCardDemoProps) {
  if (hide) {
    return null; // Return null if hide prop is true, effectively hiding the component
  }

  return (
    <CardContainer className="inter-var md:block mx-auto">
      <CardBody className="bg-transparent relative group/card hover:bg-[#] hover:bg-opacity-45 hover:shadow-2xl hover:shadow-[#17252a] w-auto sm:w-[30rem] h-auto rounded-xl p-6">
        <CardItem translateZ="100" className="w-full">
          <Image
            src={imageUrl}
            height={height}
            width={width}
            className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={altText}
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
