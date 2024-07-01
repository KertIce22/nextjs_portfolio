import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image className="pb-24 pr-10 " src={imgSrc} fill priority alt="" />
    </div>
  );
};

export default DevImg;
