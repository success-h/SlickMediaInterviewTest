import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const Movie = ({ data }) => {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",

    loop: true,

    skipSnaps: false,
    inViewThreshold: 0.7,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <div className="py-12 mx-auto max-w-screen-xl pl-[28px]  md:px-[67px]">
      <div className="flex justify-start items-center pb-5">
        <h2 className="text-start text-black text-gray-100 text-xl font-bold"></h2>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {data.map(({ imdbID, Title, Poster }) => (
            <div
              key={imdbID}
              className="relative overflow-hidden rounded-xl flex flex-none md:w-[300px] md:h-[300px] h-[200px] w-[200px] flex-wrap md:flex-nowrap  mx-2"
            >
              <Image
                src={Poster}
                className="object-cover"
                height={300}
                width={300}
              />
              <div className="flex absolute flex-col ml-7 align-middle justify-center">
                <h2 className="bg-gray p-1 rounded-sm bg-opacity-90 md:text-2xl text-xl font-bold text-black mt-16">
                  {Title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Movie;
