import { useFetchRealtedProductQuery } from "@/app/features/product/productApi";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Link, useParams } from "react-router-dom";

export const works = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
];

const ScrollBarMenu = () => {
  const { id } = useParams();
  const {
    data: product = [],
    isLoading,
    error,
  } = useFetchRealtedProductQuery(id);
  console.log(product);
  return (
    <div>
      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-10 p-4">
          {product?.relatedProduct?.map((items) => (
            <Link to={`/deatils/${items._id}`} >
              <figure key={items.id} className="shrink-0">
                <div className="overflow-hidden rounded-md">
                  <img
                    src={items.image}
                    alt={`Photo by ${items.artist}`}
                    className="aspect-[3/4] h-64 w-fit object-cover"
                    // width={300}
                    // height={400}
                  />
                </div>
                <figcaption className="pt-2 text-xs text-muted-foreground">
                  Photo by{" "}
                  <span className="font-semibold text-foreground">
                    {items.name}
                  </span>
                </figcaption>
              </figure>
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default ScrollBarMenu;
