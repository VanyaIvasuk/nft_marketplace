import first_image from "../assets/PrimaryPhotoPlaceholder.png";
import second_image from "../assets/PrimaryPhotoPlaceholder1.png";
import third_image from "../assets/PrimaryPhotoPlaceholder2.png";
import fourth_image from "../assets/SecondaryPhotoPlaceholder1.png";
import fifth_image from "../assets/SecondaryPhotoPlaceholder.png";
import sixth_image from "../assets/NumbeadditionalNFTs.png";
import seventh_image from "../assets/SecondaryPhotoPlaceholder2.png";
import eighth_image from "../assets/SecondaryPhotoPlaceholder2.png";
import nineth_image from "../assets/NumbeadditionalNFTs.png";
import tenth_image from "../assets/SecondaryPhotoPlaceholder3.png";
import eleventh_image from "../assets/SecondaryPhotoPlaceholder3.png";
import twelveth_image from "../assets/NumbeadditionalNFTs.png";

const SectionOfTrend = () => {
  let content_arr = [
    {
      image: first_image,
      image1: fourth_image,
      image2: fifth_image,
      image3: sixth_image,
      heading: "DSGN Animals",
      description: "MrFox",
    },
    {
      image: second_image,
      image1: seventh_image,
      image2: eighth_image,
      image3: nineth_image,
      heading: "Magic Mushrooms",
      description: "Shroomie",
    },
    {
      image: third_image,
      image1: tenth_image,
      image2: eleventh_image,
      image3: twelveth_image,
      heading: "Disco Machines",
      description: "BeKind2Robots",
    },
  ];
  return (
    <div className="text-black bg-white text-black dark:bg-[#2B2B2B] dark:text-white mt-[150px]">
      <div className="ml-[190px] mb-[60px]">
        <h1 className="text-[38px] mb-[10px]">Trending Collection</h1>
        <p className="text-[22px]">
          Checkout our weekly updated trending collection.
        </p>
      </div>
      <div className="flex justify-between mx-[190px]">
        {content_arr.map((content) => {
          return (
            <div className="w-[330px]">
              <img
                src={content.image}
                alt="photo"
                className="w-[330px] h-[330px] rounded-[20px] bg-black border-2 border-black dark:border-white"
              />
              <div>
                <div className="flex justify-between mt-[10px]">
                  <img
                    src={content.image1}
                    alt="photo"
                    className="w-[100px] h-[100px] rounded-[20px] bg-black border-2 border-black dark:border-white "
                  />
                  <img
                    src={content.image2}
                    alt="photo"
                    className="w-[100px] h-[100px] rounded-[20px] bg-black border-2 border-black dark:border-white"
                  />
                  <img
                    src={content.image3}
                    alt="photo"
                    className="w-[100px] h-[100px] rounded-[20px] bg-black border-2 border-black dark:border-white"
                  />
                </div>
                <div>
                  <h1 className="text-[22px] mt-[10px] mb-[5px]">
                    {content.description}
                  </h1>
                  <p className="text-[16px]">{content.heading}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionOfTrend;
