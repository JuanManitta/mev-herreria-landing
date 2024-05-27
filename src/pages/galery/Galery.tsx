import { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import { getGaleryImages } from "../../api";
import { GaleryImg } from "../../interfaces/mev-galery";

export const Galery = () => {
  const [imgList, setImgList] = useState<GaleryImg[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getGaleryImages();
      setLoading(false);
      setImgList(data);
    };

    fetchData();
  }, []);

  return (
    <main className="max-w-7xl m-auto py-10">
      {loading ? (
        <div className="h-[calc(100vh-140px)] flex items-center justify-center">
          <Spinner
            thickness="5px"
            size="xl"
            speed="1s"
            emptyColor="#F1F0ED"
            color="var(--bg-secondary)"
          />
        </div>
      ) : (
        <section className="p-3 sm:p-6 py-12 flex flex-wrap ">
          {imgList.map((img) => (
            <div key={img.id} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/3 p-2 ">
              <img
                src={img.img_url}
                alt="img"
                className="w-full h-full object-cover rounded-xl "
              />
            </div>
          ))}
        </section>
      )}
    </main>
  );
};
