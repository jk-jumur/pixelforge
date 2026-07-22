import PhotoCard from "@/components/shared/PhotoCard";


const AllPhotosDetailsPage = async({params}) => {
      const {id}  = await params;
       const res = await fetch("https://pixelforge-ivory.vercel.app/data.json");
       const photos = await res.json();
       const photo = photos.find(photo => photo.id == id)

        return (
        <div>
                <div>
                           
                     <h1>{photo.title}</h1>                          
                     <p>{photo.prompt}</p>
                 </div>      
        </div>
    );
};

export default AllPhotosDetailsPage;