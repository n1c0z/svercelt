<!-- Component to handle the different icon svg assets -->
<script lang="ts">
	export let name: string;
	export let size: string = '24';
	export let color: string = 'currentColor';

	let icons = [
		{
			box: 20,
			name: 'info',
			svg: `<path stroke=${color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
      d="M8 9h2v5m-2 0h4M9.408 5.5h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>`
		},
		{
			box: 20,
			name: 'check',
			svg: `<path stroke=${color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
      d="m7 10 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>`
		},
		{
			box: 14,
			name: 'close',
			svg: `<path stroke=${color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>`
		},
		{
			box: 20,
			name: 'time',
			svg: `<path stroke=${color} stroke-linejoin="round" stroke-width="2"
      d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>`
		},
		{
			box: 20,
			name: 'error',
			svg: `<path troke=${color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
      d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>`
		}
	];

	let icon = icons.find((i) => i.name === name);
</script>

<svg
	class={$$props.class}
	width={size}
	height={size}
	fill="transparent"
	viewBox="0 0 {icon?.box} {icon?.box}"
>
	{@html icon?.svg}
</svg>
