import PageInfo from "../../commonComp/PageInfo";
import CategoryList from "./categoryList/CategoryList";
import ImageItem from "./images/ImageItem";

function Portfolio() {
  const arryList = ["ALL", "Design", "Development", "Marketing"];

  const arrayImage = [
    "https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1603969409447-ba86143a03f6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhcHRvcCUyMHdpdGglMjBjbGFpbnR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsaWVudHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xpZW50fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1560250056-07ba64664864?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xpZW50fGVufDB8fDB8fHww",
  ];
  console.log("arrayImage", arrayImage);
  return (
    <>
      <PageInfo bgTitle="GALLERY" mainTitle="MY PORTFOLIO" />

      <CategoryList item={arryList} />

      <ImageItem images={arrayImage} />
    </>
  );
}

export default Portfolio;
