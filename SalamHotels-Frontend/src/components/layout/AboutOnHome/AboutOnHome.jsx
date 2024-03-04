import ag3 from "../../../assets/images/ag3.jpg";
import ag1 from "../../../assets/images/ag1.jpg";
const AboutOnHome = () => {
  return (
    <div className="bg-[rgb(255,245,225)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex lg:flex-row flex-col py-16 gap-16">
          <div className="lg:flex-2 flex items-center justify-center">
            <img src={ag3} alt="" className="lg:w-full w-96 " />
          </div>
          <div className="flex-1 text-xl text-justify mx-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Architecto, magnam vero corporis dolores odio placeat consectetur
            voluptate quibusdam recusandae delectus voluptates iste asperiores
            minima. Obcaecati, vel illo! Beatae, laudantium? Unde error incidunt
            ullam maiores, sint dolor quam numquam minima temporibus nemo
            reprehenderit asperiores eaque facere sequi amet nulla nobis
            quisquam est rem. Dolor vero explicabo sapiente inventore possimus
            corrupti porro voluptas atque dicta magnam quis, eveniet quas, odit
            modi, laboriosam iste tempore fugit? Molestiae fugiat labore
            quibusdam nemo? Assumenda aspernatur a officia totam inventore
            voluptas vero aperiam sed earum modi doloribus eos repudiandae, ut
            sapiente dolores? Fuga ad illo molestiae!
          </div>
        </div>
        <div className="flex lg:flex-row-reverse flex-col py-16 gap-16">
          <div className="lg:flex-2 flex items-center justify-center">
            <img src={ag1} alt="" className="lg:w-full w-96 " />
          </div>
          <div className="flex-1 text-xl text-justify mx-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
            cumque deleniti unde neque quaerat rerum est, repudiandae id
            obcaecati sit blanditiis fuga corporis nemo molestias eveniet
            consectetur optio maiores sunt? Blanditiis esse minima perferendis
            eius voluptate debitis, unde sit beatae quia deleniti perspiciatis
            maxime expedita provident nemo deserunt eos nesciunt eligendi
            molestias! Est maiores aperiam eveniet voluptatibus saepe quae ipsa
            et debitis nobis quod? Esse consectetur minima eius quasi
            accusantium officia, impedit officiis rerum inventore optio delectus
            cumque omnis porro eaque eveniet dolores nam quod culpa laborum
            aspernatur facilis possimus facere animi. Voluptatibus fuga
            repudiandae quod fugiat illum adipisci pariatur harum. Alias
            laboriosam, eligendi optio autem repudiandae ut expedita velit
            eveniet tenetur. Sequi non obcaecati, pariatur, exercitationem
            incidunt fugit sint, possimus ad nulla voluptatibus magni officiis
            illum ab delectus a!
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOnHome;
