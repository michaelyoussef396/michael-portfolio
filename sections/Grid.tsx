import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "../components/ui/BentoGrid";

const Grid = () => {
  console.log("Grid Items:", gridItems);

  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title || "Default Title"}
            description={item.description || "Default Description"}
            className={item.className || ""}
            img={item.img || ""}
            imgClassName={item.imgClassName || ""}
            titleClassName={item.titleClassName || ""}
            spareImg={item.spareImg || ""}
          />

        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
