import PhotoCard from "@/components/shared/PhotoCard";
import { Card } from "@heroui/react";
import Image from "next/image";


const AllPhotosDetailsPage = async({params}) => {
      const {id}  = await params;
       const res = await fetch("https://pixelforge-ivory.vercel.app/data.json");
       const photos = await res.json();
       const photo = photos.find(photo => photo.id == id)

        return (
        <div>
               <Card className="border mx-auto">
<Card className="mx-auto overflow-hidden">
  <Image
    src={photo.imageUrl}
    alt={photo.title}
    width={1200}
    height={800}
    className="w-full h-auto rounded-xl"
  />
</Card>
                   <div>
                           
                     <h1>{photo.title}</h1>                          
                     <p>{photo.prompt}</p>
                 </div> 
               </Card>
                    
        </div>
    );
};

export default AllPhotosDetailsPage;