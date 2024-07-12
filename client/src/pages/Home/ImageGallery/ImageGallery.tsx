import Container from "@/components/ui/Container/Container";
import gImg1 from "@/assets/Gallery/img-1.jpg";
import gImg2 from "@/assets/Gallery/img-2.jpg";
import gImg3 from "@/assets/Gallery/img-3.jpg";
import gImg4 from "@/assets/Gallery/img-4.jpg";
import gImg5 from "@/assets/Gallery/img-5.jpg";
import gImg6 from "@/assets/Gallery/img-6.jpg";
import gImg7 from "@/assets/Gallery/img-7.jpg";
import gImg8 from "@/assets/Gallery/img-8.jpg";
import gImg10 from "@/assets/Gallery/img-10.jpg";
import gImg11 from "@/assets/Gallery/img-11.jpg";
import gImg12 from "@/assets/Gallery/img-12.jpg";

const ImageGallery = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={gImg1}
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center "
              src={gImg2}
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={gImg3}
              alt="gallery-photo"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={gImg4}
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={gImg5}
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center "
              src={gImg6}
              alt="gallery-photo"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={gImg7}
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center "
              src={gImg8}
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={gImg10}
              alt="gallery-photo"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={gImg11}
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src={gImg12}
              alt="gallery-photo"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ImageGallery;
