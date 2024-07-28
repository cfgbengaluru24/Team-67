import FooterCard from "./FooterCard";

const DiscoverSection = () => {
  return (
    <div className="py-5 flex flex-col items-center gap-10">
      <h1 className="text-3xl font-semibold mt-10">
        Discover Our Global Presence
      </h1>
      <div className="w-full flex justify-around px-10">
        <FooterCard
          number="35"
          title="Cities"
          imgSrc="https://i.pinimg.com/736x/56/2b/7b/562b7b258e226c783cec3e3aa812d2f4.jpg"
        />
        <FooterCard
          number="100"
          title="Institutions"
          imgSrc="https://cdni.iconscout.com/illustration/premium/thumb/school-3862334-3213885.png?f=webp"
        />
        <FooterCard
          number="2000+"
          title="Volunteers"
          imgSrc="https://uxbooth.com/wp-content/uploads/2022/01/image3.png"
        />
      </div>
    </div>
  );
};

export default DiscoverSection;
