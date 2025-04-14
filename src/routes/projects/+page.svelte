<script>
  import GithubLink from "../../components/GithubLink.svelte";
  import MacWindow from "../../components/MacWindow.svelte";
  import WebLink from "../../components/WebLink.svelte";
</script>

<h1 class="text-gray-800 font-sans font-bold text-3xl">Projects</h1>

<div class="flex flex-col gap-4 py-4">
  <MacWindow>
    <div class="flex items-center gap-4 flex-col flex-col-reverse md:flex-row">
      <div
        class="flex gap-4 md:gap-2 flex-row-reverse items-center md:flex-col md:items-stretch"
      >
        <img
          src="/ejbca_logo.png"
          alt="Project 1"
          class="p-3 bg-gray-500 rounded-lg min-w-28 w-28"
        />
        <div class="md:pl-1">
          <GithubLink
            text="Github"
            href="https://github.com/Keyfactor/ejbca-ce"
          />
          <WebLink text="Website" href="https://www.ejbca.org/" />
        </div>
      </div>
      <div class="md:border-l-2 md:border-gray-300 md:pl-4">
        <span class="text-gray-800 font-sans font-bold text-lg">EJBCA</span>
        <p class="text-gray-650 text-sm">
          EJBCA is a widely used open-source PKI software that powers many PKIs
          around the world. I contributed to the project through my work at
          Keyfactor. A highlight of my work was heading the project to migrate
          from Ant to Gradle, resulting in build times reducing by 75%.
        </p>
      </div>
    </div>
  </MacWindow>
  <MacWindow>
    <div class="flex items-start gap-4">
      <img
        src="/images/viktiganyheter_screenshot.jpg"
        alt="Viktiganyheter screenshot"
        class="rounded-lg max-w-52 hidden md:block"
      />
      <div class="">
        <span class="text-gray-800 font-sans font-bold text-lg"
          >Viktiga Nyheter</span
        >
        <p class="text-gray-650 text-sm">
          (In Swedish) A site that ranks news articles from the last 24 hours
          based on their significance. Every article is given a score from 1-10
          determined with AI through the OpenAI API. Designed to reduce the
          noise and show you only the most important news of the last day.
        </p>
        <div class="pt-2">
          <GithubLink
            text="Github"
            href="https://github.com/mans-andersson/viktiganyheter"
          />
          <WebLink text="Hosted link" href="https://viktiganyheter.måns.dev/" />
        </div>
      </div>
    </div>
  </MacWindow>
  <MacWindow>
    <div class="flex items-start gap-4 flex-col flex-col-reverse md:flex-row">
      <div class="">
        <div>
          <span class="text-gray-800 font-sans font-bold text-lg"
            >3D Photo Desk</span
          >
          <p class="text-gray-650 text-sm">
            I wanted to learn more about the Godot game engine, so I created
            this 3D desk where you can look at photos.
          </p>
        </div>
        <div class="pt-2">
          <GithubLink
            text="Github"
            href="https://github.com/mans-andersson/photo_desk_3D"
          />
          <WebLink text="Hosted link" href="https://photo-desk.måns.dev/" />
        </div>
      </div>
      <div class="flex justify-center w-full md:w-auto">
        <video class="rounded-lg max-w-64 md:max-w-80" autoplay loop muted>
          <source src="/photo_desk.webm" type="video/webm" />
        </video>
      </div>
    </div>
  </MacWindow>
</div>
