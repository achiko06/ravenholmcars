"use client";
import { useRouter } from "next/navigation"
import { ShowMoreProps } from "@/types"
import { updateSearchParams } from "@/utils"
import { Button } from "@/components"

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    // Calculate the new limit based on the page number and navigation type
    const newLimit = (pageNumber + 1) * 10;

    // Update the "limit" search parameter in the URL with the new value
    const newPathname = updateSearchParams("limit", `${newLimit}`);
    
    router.push(newPathname, {scroll: false});
  }
  
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <Button
          btnType="button"
          title="Show More"
          containerStyles="bg-primary text-gray-700 font-bold rounded-full hover:bg-primary-100 duration-700"
          handleClick={handleNavigation}
        />
      )}
    </div>
  )
}

export default ShowMore