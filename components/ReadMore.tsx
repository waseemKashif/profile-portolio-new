"use client";
import React, { useState } from "react";
interface ReadMoreTypes {
  text: string;
  maxLength: number;
}
const ReadMore: React.FC<ReadMoreTypes> = ({ text, maxLength }) => {
  const [isReadMoreShown, setIsReadMoreShown] = useState(false);

  const toggleReadMore = () => {
    setIsReadMoreShown(!isReadMoreShown);
  };
  const isTextLong = text.length > maxLength;
  return (
    <div>
      {isReadMoreShown ? text : `${text.substring(0, maxLength)}`}
      {isTextLong && (
        <button
          onClick={toggleReadMore}
          className="text-base font-light text-indigo-600"
        >
          {isReadMoreShown ? "...Read Less" : "...Read More"}
        </button>
      )}
    </div>
  );
};

export default ReadMore;
