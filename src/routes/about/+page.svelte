<script>
  import CareerEntry from "../../components/CareerEntry.svelte";
  import MoveableImage from "../../components/MoveableImage.svelte";
</script>

<h1 class="mb-6 text-gray-800 font-sans font-bold text-3xl">About</h1>
<section class="flex">
  <MoveableImage
    imagePath="/images/yosemite.webp"
    imageAlt="Yosemite"
    rotationDegree={6}
  />
  <MoveableImage
    imagePath="/images/nyc2.webp"
    imageAlt="New York"
    rotationDegree={-6}
  />
  <MoveableImage
    imagePath="/images/lofoten.webp"
    imageAlt="Lofoten"
    rotationDegree={8}
  />
</section>
<p class="text-gray-800 mt-8 text-sm">
  My name is Måns Andersson. I am a software engineer based in Stockholm,
  Sweden. I have a passion for technology, I like building cool things, and I am
  always trying to learn and improve.<br />
  When I am not behind the desk I can be found lifting weights, climbing, skiing
  or reading.
</p>
<h1 class="text-gray-800 font-sans font-bold text-3xl mt-8">Work</h1>
<p class="text-gray-800 py-3 text-sm">
  My first software-related job was teaching others how to code. This was a great
  experience and I enjoy trying to make seemingly complex things easier for others
  to understand.<br />
  Currently I work as a Full-stack Engineer at Quickbit, building modern payment solutions
  based on blockchain technology.
</p>
<div class="flex flex-col group">
  <CareerEntry
    companyName="Quickbit"
    companyLink="https://quickbit.com/"
    companyLogo="/qb_logo.svg"
    jobTitle="Full-stack Engineer"
    timeFrame="2024 -"
  />
  <CareerEntry
    companyName="Keyfactor"
    companyLink="https://keyfactor.com/"
    companyLogo="/keyfactor_logo.svg"
    jobTitle="Software Engineer"
    timeFrame="2022 - 2024"
    backgroundColor="#5F61FF"
  />
  <CareerEntry
    companyName="Ericsson"
    companyLink="https://ericsson.com/"
    companyLogo="/ericsson_logo.svg"
    jobTitle="Summer Intern and Innovation Intern"
    timeFrame="2021 - 2022"
    backgroundColor="#000000"
  />
  <CareerEntry
    companyName="KTH Royal Institute of Technology"
    companyLink="https://kth.se/"
    companyLogo="/kth_logo.svg"
    jobTitle="Teaching assistant"
    timeFrame="2019"
    backgroundColor="#1751a6"
  />
</div>
<!-- <h1 class="text-gray-800 font-sans font-bold text-3xl mt-8">Skills</h1>
<p class="text-gray-800 pt-3 text-sm">
  The majority of professional has been back-end development. I am familiar with
  writing business logic, designing RESTful endpoints, and working with ORM:s to
  handle data. Most of by back-end work has been with Java and Python.<br /><br
  />

  In my full-stack work, I have also evolved my front-end skills. Working with
  TypeScript, React and doing A/B testing. The website you are currently on, is
  built with Svelte and Tailwind.<br /><br />

  From my master's degree in computer science I have a good foundation of CS,
  math and software engineering knowledge.
  <br /><br />
</p> -->
