window.onload = () => {
	const darkModeBtn = document.getElementById('dark-mode');
	const darkModeTxt = document.getElementById('dark-mode-txt');

	chrome.storage.sync.get('dark', (e) => {
		let isToggleOn = e.dark || false;
		darkModeTxt.textContent = isToggleOn ? 'ON' : 'OFF';

		darkModeBtn.addEventListener('click', () => {
			isToggleOn = !isToggleOn;
			darkModeTxt.textContent = isToggleOn ? 'ON' : 'OFF';
			if (isToggleOn) {
				chrome.tabs.executeScript({
					file: 'darkModeOn.js'
				});
			} else {
				chrome.tabs.executeScript({
					file: 'darkModeOff.js'
				});
			}
			chrome.storage.sync.set({ dark: isToggleOn });

			chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
				chrome.tabs.sendMessage(tabs[0].id, { action: 'pageToSpeech' });
			});
		});
	});
};
