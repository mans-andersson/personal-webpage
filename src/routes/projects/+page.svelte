<script>
  import GithubLink from "../../components/GithubLink.svelte";
  import MacWindow from "../../components/MacWindow.svelte";
  import WebLink from "../../components/WebLink.svelte";
</script>

<h1 class="text-gray-800 font-sans font-bold text-3xl">Projects</h1>

<div class="flex flex-col gap-4 py-4">
  <MacWindow>
    <div class="flex items-start gap-4">
      <div class="flex flex-col gap-2">
        <img
          src="/ejbca_logo.png"
          alt="Project 1"
          class="p-3 bg-gray-500 rounded-lg min-w-28 w-28"
        />
        <div class="pl-2">
          <GithubLink
            text="Github"
            href="https://github.com/Keyfactor/ejbca-ce"
          />
          <WebLink text="Website" href="https://www.ejbca.org/" />
        </div>
      </div>
      <p class="text-gray-650 text-sm border-l-2 border-gray-300 pl-4">
        EJBCA is a widely used open-source PKI software that powers many PKIs around the world.
        I contributed to the project through my work at Keyfactor.
        A highlight of my work was heading the project to
        migrate from Ant to Gradle, resulting in build times reducing by 75%.
      </p>
    </div>
  </MacWindow>
  <MacWindow>
    <div class="flex items-start gap-4">
      <img
        src="/images/viktiganyheter_screenshot.jpg"
        alt="Viktiganyheter screenshot"
        class="rounded-lg max-w-52"
      />
      <div class="flex flex-col gap-2">
          <span class="text-gray-800 font-sans font-bold text-lg"
            >Viktiga Nyheter</span
          >
          <p class="text-gray-650 text-sm">
            (In Swedish) A site that ranks news articles from the last 24 hours based on their significance.
            Every article is given a score from 1-10 determined with AI through the OpenAI API.
            Designed to reduce the noise and show you only the most important news of the last day.
          </p>
          <div>
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
    <div class="flex items-start gap-4">
      <div class="flex flex-col gap-2">
        <div>
          <span class="text-gray-800 font-sans font-bold text-lg"
            >3D Photo Desk</span
          >
          <p class="text-gray-650 text-sm">
            I wanted to learn more about the Godot game engine, so I created
            this 3D desk where you can look at photos.
          </p>
        </div>
        <div class="">
          <GithubLink
            text="Github"
            href="https://github.com/mans-andersson/photo_desk_3D"
          />
          <WebLink text="Hosted link" href="https://photo-desk.måns.dev/" />
        </div>
      </div>
      <video class="rounded-lg max-w-80" autoplay loop muted>
        <source src="/photo_desk.webm" type="video/webm" />
      </video>
    </div>
  </MacWindow>
</div>
