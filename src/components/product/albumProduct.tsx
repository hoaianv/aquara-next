"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Image from "next/image";
import { IImage } from "@/interfaces/models/IProduct.interface";
import { urlImage } from "@/constants/routes";

interface AlbumProductProps {
  images: IImage[];
}

const AlbumProduct = ({ images }: AlbumProductProps) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = (state: boolean) => () => setOpen(state);
  const [index, setIndex] = useState(0);
  const updateIndex =
    (when: boolean) =>
    ({ index: current }: { index: number }) => {
      if (when === open) {
        setIndex(current);
      }
    };

  return (
    <div className=" p-3">
      <Lightbox
        index={index}
        slides={images}
        plugins={[Inline]}
        on={{
          view: updateIndex(false),
          click: toggleOpen(true),
        }}
        carousel={{
          padding: 0,
          spacing: 0,
          imageFit: "cover",
        }}
        inline={{
          style: {
            width: "100%",
            maxWidth: "900px",
            aspectRatio: "3 / 2",
            margin: "0 auto",
          },
        }}
      />
      <div className="flex gap-2 flex-wrap  justify-center mt-4">
        {images?.length > 0 &&
          images.map((item, idx) => (
            <div
              onClick={() => setIndex(idx)}
              key={idx}
              className={`p-[3px] border-[1px] rounded-md cursor-pointer transition-all duration-200 hover:border-[#aec6fd] hover:shadow-md ${
                index === idx ? "border-[#aec6fd]" : "border-[#0000001A]"
              }`}
            >
              <Image
                loading="lazy"
                src={item.src}
                width={40}
                height={40}
                alt={item.src}
              />
            </div>
          ))}
      </div>
      <Lightbox
        open={open}
        close={toggleOpen(false)}
        index={index}
        slides={images}
        plugins={[Thumbnails]}
        on={{ view: updateIndex(true) }}
        animation={{ fade: 0 }}
        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
      />
    </div>
  );
};

export default AlbumProduct;
