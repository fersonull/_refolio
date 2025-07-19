import GradientText from "./ui/GradientText";
import TextMotion from "./ui/TextMotion";
import GradientSubText from "./ui/GradientSubText";
import ImageCircle from "./ui/ImageCircle";
import { FaGithub } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import Blob from "./ui/Blob";
import { techStacks } from "../../constants/index";
import Icons from "./ui/Icons";
import InfiniteSlider from "./ui/InfiniteSlider";

const Header = () => {
  return (
    <div className="h-full flex items-center justify-center relative">
      {/* <div className="relative"> */}
      <Blob top={-400} start={200} size={570} opacity={0.3} />
      <Blob top={100} start={1400} size={300} />
      <Blob top={460} start={400} size={700} opacity={0.3} />
      {/* </div> */}
      <div className="flex flex-col z-20 transition-all">
        <TextMotion>
          <ImageCircle src="/ako3.png" size={120} />
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
          <TextMotion delay={0.3} className="text-glow">
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
          <button className="primary-btn  flex items-center justify-center gap-1 text-sm">
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

        <TextMotion delay={0.6}>
          <div className="flex items-center justify-center gap-2 mt-10 max-w-xl flex-wrap">
            {techStacks.map(({ icon, label }, idx) => (
              <Icons key={idx} icon={icon} label={label} />
            ))}
          </div>
        </TextMotion>
      </div>
    </div>
  );
};

export default Header;
