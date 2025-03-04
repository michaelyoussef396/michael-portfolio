import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  console.log("Grid Items:", gridItems);

  if (!gridItems || gridItems.length === 0) {
    return <p>No items to display</p>;
  }

  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={typeof item?.id === 'number' ? item.id : i}
            key={i}
            title={item?.title || "Default Title"}
            description={item?.description || "Default Description"}
            className={item?.className || ""}
            img={item?.img || ""}
            imgClassName={item?.imgClassName || ""}
            titleClassName={item?.titleClassName || ""}
            spareImg={item?.spareImg || ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
