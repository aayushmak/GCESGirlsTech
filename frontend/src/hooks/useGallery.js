import { useMemo } from "react";

const allImages = import.meta.glob(
  "/src/assets/images/**/*.{png,jpg,JPG,jpeg,webp}",
  {
    eager: true,
  }
);

const useGallery = (folderPath) => {

  const images = useMemo(() => {

    return Object.entries(allImages)
      .filter(([path]) =>
        path.includes(folderPath)
      )
      .map(([, module]) =>
        module.default
      );

  }, [folderPath]);

  return images;
};

export default useGallery;