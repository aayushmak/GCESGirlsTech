const allImages = import.meta.glob(
  "../images/**/*.{png,jpg,jpeg,webp}",
  { eager: true }
);

export const getActivityCover = (folderName) => {
  const imagePath = Object.keys(allImages).find((path) =>
    path.includes(`${folderName}/img1`)
  );

  return imagePath
    ? allImages[imagePath].default
    : "";
};