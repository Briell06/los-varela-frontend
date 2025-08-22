import { Card, CardBody, CardFooter } from "@heroui/card";
import { Skeleton } from "@heroui/skeleton";

import AceternityCategoryCarousel from "@/components/AceternityCategoryCarousel";

const skeletonArr = [1, 2, 3, 4, 5, 6];

export default function Loading() {
  return (
    <>
      <div className="mx-auto flex items-center justify-center text-center">
        <Skeleton className="mx-auto flex h-12 w-44 items-center justify-center gap-2 rounded-md" />
      </div>

      <div className="relative min-h-fit w-full overflow-hidden py-5 pb-16 md:mx-auto">
        <AceternityCategoryCarousel />
      </div>

      <div className="mt-2 flex items-center justify-center">
        <Skeleton className="h-12 w-[80%] md:w-[30%]" />
      </div>

      <section className="mt-5 grid gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {skeletonArr.map((i) => (
          <Card key={i} className="h-[565px]">
            <Skeleton className="h-[50%] w-full rounded" />
            <CardBody>
              <div className="space-y-2">
                <Skeleton className="h-8 w-full rounded" />
                <Skeleton className="h-4 w-[90%] rounded" />
                <Skeleton className="h-6 w-[40%] rounded" />
              </div>
              <div className="mt-10 flex items-center justify-center gap-2">
                <Skeleton className="size-12 rounded-full" />
                <Skeleton className="h-6 w-10 rounded-md" />
                <Skeleton className="size-12 rounded-full" />
              </div>
            </CardBody>
            <CardFooter className="justify-center">
              <Skeleton className="h-8 w-[75%] rounded" />
            </CardFooter>
          </Card>
        ))}
      </section>
    </>
  );
}
