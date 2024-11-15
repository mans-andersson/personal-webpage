<script lang="ts">
  let {
    companyName,
    companyLink,
    companyLogo,
    jobTitle,
    timeFrame,
    backgroundColor = "#0000",
  }: {
    companyName: string;
    companyLink: string;
    companyLogo: string;
    jobTitle: string;
    timeFrame: string;
    backgroundColor?: string;
  } = $props();
</script>

<a
  class="flex gap-1 justify-between group-hover:opacity-50 hover:!opacity-100"
  href={companyLink}
  target="_blank"
>
  <img
    src={companyLogo}
    alt="{companyName} logo"
    class="rounded-full p-1 my-auto mr-1"
    style="background-color: {backgroundColor}"
    width="48px"
    height="48px"
  />
  <div class="flex flex-col flex-grow py-5 h-full">
    <span class="text-gray-800 font-semibold flex-grow">{jobTitle}</span>
    <span class="text-gray-600 font-semibold pr-auto">{companyName}</span>
  </div>
  <span class="text-gray-600 py-5 pr-8 h-full">{timeFrame}</span>
</a>
