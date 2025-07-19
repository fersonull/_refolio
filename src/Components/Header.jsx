import GradientText from "./ui/GradientText";
import TextMotion from "./ui/TextMotion";
import GradientSubText from "./ui/GradientSubText";
import ImageCircle from "./ui/ImageCircle";
import { FaGithub } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import Blob from "./ui/Blob";

const Header = () => {
  return (
    <div className="h-full flex items-center justify-center relative">
      {/* <div className="relative"> */}
      <Blob top={-200} start={200} size={400} />
      <Blob top={200} start={1400} size={300} />
      {/* </div> */}
      <div className="flex flex-col z-20 transition-all">
        <TextMotion>
          <ImageCircle
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            size={120}
          />
          <TextMotion
            delay={0.2}
            className="font-outfit font-medium leading-relaxed text-center mt-5"
          >
            <GradientSubText className="text-2xl">
              Hello, I'm Jasfer Monton.
            </GradientSubText>
          </TextMotion>
        </TextMotion>
        <div className="font-outfit text-[60px] font-bold text-center ">
          <TextMotion delay={0.3} className="md:text-nowrap">
            <GradientText>Ideas. Code. Impact.</GradientText>
          </TextMotion>
        </div>
        <TextMotion delay={0.4} className="md:text-nowrap">
          <GradientSubText className="text-lg text-center">
            From concept to deployment — building impactful web experiences.
          </GradientSubText>
        </TextMotion>

        <TextMotion
          delay={0.5}
          className="flex items-center justify-center mt-5 gap-8"
        >
          <button className="rounded-full px-4 py-2 bg-white/20 border-2 border-white/20 font-outfit hover:bg-white/10 text-sm flex items-center justify-center gap-1">
            Contact me <MdOutlineArrowOutward size={19} />
          </button>
          <a
            href="https://github.com/fersonull/"
            target="_blank"
            className="rounded-full px-4 py-2  font-outfit hover:underline text-sm flex items-center justify-center gap-2"
          >
            <FaGithub />
            Go to GitHub
          </a>
        </TextMotion>
      </div>
    </div>
  );
};

export default Header;
