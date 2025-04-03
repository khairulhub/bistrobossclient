
import bgimg from "../../assets/home/chef-service.jpg";
const InfoBist = () => {
  return (
    <div
      className="hero min-h-[572px]"
      style={{
        backgroundImage:
          `url(${bgimg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center h-[333px]">
        <div className="max-w-5xl bg-white  p-10 rounded-lg text-black">
          <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
          <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default InfoBist;
