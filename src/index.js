const $links = document.getElementById('links');
const $name = document.querySelector('h1');
const $nickname = document.querySelector('h2');
const $description = document.querySelector('#description');

const data = {
	name: 'Lucas Frazzetta',
	nickname: 'lufz88',
	description:
		'FrontEnd Developer | JavaScript | React.js | Inglés Intermedio | Siempre proponiéndome nuevos objetivos',
	avatar: '...',
	social: [
		{
			name: 'twitter',
			url: 'https://twitter.com/',
			username: '',
		},
		{
			name: 'instagram',
			url: 'https://instagram.com/',
			username: '',
		},
	],
	links: [
		{
			name: 'blog',
			url: 'https://example.com/',
			color: 'red',
			emoji: '📖',
		},
		{
			name: 'podcast',
			url: 'https://example.com/',
			color: 'yellow',
			emoji: '💬',
		},
	],
	footer: 'Made with Love on Argentina',
};

const main = () => {
	let name = document.createTextNode(data?.name);
	let nickname = document.createTextNode(data?.nickname);
	let description = document.createTextNode(data?.description);

	let links = data?.links
		.map(link => {
			return `
    <div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
      <a class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
                href=${link.url} target="_blank">
                ${link.name}
              </a>
              <span>${link.emoji}</span>
            </div>
    `;
		})
		.join('');
	let newItem = document.createElement('section');
	newItem.innerHTML = links;
	$links.appendChild(newItem);
	$name.appendChild(name);
	$nickname.appendChild(nickname);
	$description.appendChild(description);
};

main();
