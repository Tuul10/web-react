export const BoardTwo = () => {
  return (
    <div className=" m-auto sm:w-96 bg-[#F9FAFB] ">
      <p className="  flex bg-[#E5E7EB]  w-28 m-auto justify-center py-1 px-5 rounded-xl h-7 items-center">
        About me
      </p>
      <div className="flex sm:flex-col sm:w-96  justify-between sm:py-16 sm:px-4 py-24 px-20">
        <img className=" sm:6 w-80 h-96" src="photo2.png" />
        <div className="gap-4 text-[#4B5563] sm:w-11/12  ms:mt-4 w-1/2">
          <h1 className="sm:mt12 font-semibold text-[#111827] text-2xl sm:tex-xl">
            Curious about me? Here you have it:
          </h1>

          <p className="mt-4">
            I'm a designer turned full stack developer, passionate about
            React.js and Node.js. I excel in blending technical and visual
            aspects to craft exceptional digital products, prioritizing user
            experience, precise design, and optimized code.
          </p>
          <p className="mt-4">
            Since starting my web development journey in 2015, I've embraced
            challenges and kept up with the latest tech trends. Now in my early
            thirties, seven years in, I'm building cutting-edge web apps using
            Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.
          </p>
          <p className="mt-4">
            With a progressive mindset, I enjoy the entire product development
            process, from ideation to execution. Off duty, you'll find me on
            Twitter, tracking startup journeys, or unwinding. Follow me for tech
            insights and public project updates on Twitter or GitHub.
          </p>
          <p className="mt-4">Finally, some quick bits about me.</p>
          <url className="flex">
            <url className="mt-4 w-72 sm:w-40 gap-2 justify-center">
              <li>B.E. in Computer Engineering</li>
              <li className=" mt-2">Full time freelancer</li>
            </url>
            <li className="sm:w-40 w-72 mt-4">Avid learner</li>
          </url>
          <p className="mt-4">
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
};
