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
        EJBCA is a widely used open-source PKI software that many large
        organizations use for their PKIs. I contributed to the project through
        my work at Keyfactor. A highlight of my work was heading the project to
        migrate from Ant to Gradle, resulting in build times reducing by 75%.
      </p>
    </div>
  </MacWindow>
</div>
