var chosenOrganization = 'all organizations split equally';
var instaSlashName = '(none given)';
var donationPromptContent = '';
var state = 0;

function updateChosenOrganization(chosenOrg) {
	chosenOrganization = chosenOrg;
	updateDonationPromptContent();
}

function updateInstaSlashName(theTypedName) {
	instaSlashName = theTypedName;
	updateDonationPromptContent();
}

function updateDonationPromptContent() {
	donationPromptContent = 'Please send my donation to ' + 
		chosenOrganization + '. Please send the receipt to ' + 
		instaSlashName + '.'
	let textarea = document.getElementById('donation-prompt'); 
	textarea.value = donationPromptContent;
}

function updateState(buttonType) {
	document.getElementById('info-copied-span').style.display = 'none';
    if (buttonType === 'next') {
    	state += 1;
    }
    if (buttonType === 'prev') {
    	state -= 1;
    }
    for (let i = 0; i < 5; i++) {
    	console.log(`State: ${state}`);
    	console.log(`i: ${i}`);
    	if (i === state) {
    		document.getElementById(`step-${i}`).style.display = '';
    		continue;
    	}
    	document.getElementById(`step-${i}`).style.display = 'none';
    }
    if (state === 4) {
    	document.getElementById('next-button').disabled = true;
    } else {
    	document.getElementById('next-button').disabled = false;
    }

    if (state === 0) {
    	document.getElementById('prev-button').disabled = true;
    } else {
    	document.getElementById('prev-button').disabled = false;
    }

    document.getElementById(`step-${state}`).scrollIntoView();
}

function copyPromptToClipboard() {
	var copyText = document.getElementById('donation-prompt');
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	document.execCommand('copy');
	document.getElementById('info-copied-span').style.display='';
}



