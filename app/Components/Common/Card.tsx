import Image from "next/image";
import Link from "next/link";
import React from "react";
interface CardProps {
  name: string;
  imageUrl: HTMLImageElement;
  id: number;
}
const Card: React.FC<CardProps> = ({ name, imageUrl, id }) => {
  return (
    <div className="card w-80 md:w-96 bg-base-100 shadow-xl">
      <figure>
        <Image
          width={400}
          height={500}
          src={imageUrl}
          alt="Shoes"
          className="object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{`Test your knowledge of ${name}`}</p>
        <div className="card-actions justify-start">
          <Link href={`/quiz/${id}`} className="btn bg-rose-500 text-base-200">
            Take Quiz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
