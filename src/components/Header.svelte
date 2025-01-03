<script>
	import { page } from '$app/stores';
	$: pathname = $page.url.pathname;
</script>

<header class="sticky top-0 z-20 bg-slate-100">
	<nav
		class="max-w-[700px] mx-auto flex justify-center gap-x-5 md:gap-x-28 py-3 font-light text-gray-600 md:text-lg"
	>
		<a href="/"
			><img class="p-1 h-7 rounded-full hover:bg-gray-800 mx-1" src="/M_logo.svg" alt="M logo" /></a
		>
		<a
			class="hover:text-gray-800 px-3 {pathname === '/about' ? 'bg-gray-300 rounded-xl' : ''}"
			href="/about">About</a
		>
		<a
			class="hover:text-gray-800 px-3 {pathname === '/posts' ? 'bg-gray-300 rounded-xl' : ''}"
			href="/posts">Posts</a
		>
		<!-- <a
			class="hover:text-gray-800 px-3 {pathname === '/projects' ? 'bg-gray-300 rounded-xl' : ''}"
			href="/projects">Projects</a
		> -->
	</nav>
</header>
