import React from "react";
import { useSelector } from "react-redux";
const DogPic = () => {
  const dogPicData = useSelector((state) => state.dogData.value);
  console.log(dogPicData);
  if (!dogPicData) return <></>;
  let imgUrl = dogPicData[0];
  return (
    <>
      <img
        className="grid min-h-min max-w-[90%] w-fit"
        src={imgUrl.message}
      ></img>
    </>
  );
};
export default DogPic;
