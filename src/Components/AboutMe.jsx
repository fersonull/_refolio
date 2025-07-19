import GradientText from "./ui/GradientText";

const AboutMe = () => {
  return (
    <div className="font-outfit h-full flex items-center justify-center">
      <div className="flex justify-between w-full px-[10rem]">
        <div className="max-w-xl">
          <h3 className="text-3xl">
            <p className="mb-2 text-xl font-normal dark:text-white/70 uppercase">
              About Me
            </p>
            <h1 className="text-6xl font-medium text-glow">
              I'm Jasfer, a full-stack <GradientText>developer</GradientText>
            </h1>
          </h3>
          <div className="text-xl flex flex-col gap-4 mt-8 text-white/70">
            <p>
              I'm Jasfer Monton, a proactive full-stack developer passionate
              about creating dynamic web experiences. From frontend to backend,
              I thrive on solving complex problems with clean, efficient code.
              My expertise spans React, Next.js, and Node.js, and I'm always eager to
              learn more.
            </p>
            <p>
              When I'm not immersed in work, I'm exploring new ideas and staying
              curious. Life's about balance, and I love embracing every part of
              it.
            </p>

            <p>I believe in waking up each day eager to make a difference!</p>
          </div>
        </div>

        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default AboutMe;
