export const BoardTwo = () => {
  return (
    <div className="md:py-16 md:px-4 py-24 px-20 m-auto  bg-[#F9FAFB] dark:bg-[#111827] md:content-center">
      <p className="text-[#4B5563]  flex bg-[#E5E7EB] w-fit m-auto justify-center py-1 px-5 rounded-xl h-7 items-center dark:bg-[#4B5563] dark:text-[#D1D5DB]">
        About me
      </p>
      <div className="grid grid-cols-2 md:grid-cols-1  md:justify-center md:items-center gap-12 md:py-6 md:px-4 mt-12 md:mt-1">
        <div className="  md:flex md:justify-center md:items-center  lg:min-w-[444px] md:min-w-0">
          <img
            className=" w-[400px] md:w[280px] md:h[360px] border-8 border-gray-default border-[#E5E7EB] border-t-none"
            src="photo2.png"
          />
        </div>
        <div className="gap-4 text-[#4B5563]  md:mt-4  w-[100%]  flex-1 dark:text-[#D1D5DB] self-stretch font-normal text-base lg:min-w-[444px] md:min-w-0">
          <h1 className="md:mt12 font-semibold text-[#111827] text-2xl md:tex-xl dark:text-[#D1D5DB]">
            Curious about me? Here you have it:
          </h1>

          <p className="mt-4">
            Im a designer turned full stack developer, passionate about React.js
            and Node.js. I excel in blending technical and visual aspects to
            craft exceptional digital products, prioritizing user experience,
            precise design, and optimized code.
          </p>
          <p className="mt-4">
            Since starting my web development journey in 2015, Ive embraced
            challenges and kept up with the latest tech trends. Now in my early
            thirties, seven years in, Im building cutting-edge web apps using
            Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.
          </p>
          <p className="mt-4">
            With a progressive mindset, I enjoy the entire product development
            process, from ideation to execution. Off duty, youll find me on
            Twitter, tracking startup journeys, or unwinding. Follow me for tech
            insights and public project updates on Twitter or GitHub.
          </p>
          <p className="mt-4">Finally, some quick bits about me.</p>
          <url className="flex">
            <url className="mt-4 w-72 md:w-40 gap-2 justify-center">
              <li>B.E. in Computer Engineering</li>
              <li className=" mt-2">Full time freelancer</li>
            </url>
            <li className="md:w-40 w-72 mt-4">Avid learner</li>
          </url>
          <p className="mt-4">
            One last thing, Im available for freelance work, so feel free to
            reach out and say hello! I promise I dont bite 😉
          </p>
        </div>
      </div>
    </div>
  );
};
