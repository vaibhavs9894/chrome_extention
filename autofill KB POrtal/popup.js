document.getElementById('fillForm').addEventListener('click', function() {
    const formData = {
      candidatesEnrolled: document.getElementById('candidatesEnrolled').value,
      candidatesFreezed: document.getElementById('candidatesFreezed').value,
      trained: document.getElementById('trained').value,
      dropout: document.getElementById('dropout').value,
      undergoing: document.getElementById('undergoing').value,
      assessed: document.getElementById('assessed').value,
      certified: document.getElementById('certified').value,
      appointed: document.getElementById('appointed').value,
      monthlyContinuity: document.getElementById('monthlyContinuity').value,
      placed: document.getElementById('placed').value
    };
  
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, formData, function(response) {
        if (response.success) {
          alert('Form filled successfully!');
        } else {
          alert('Failed to fill the form.');
        }
      });
    });
  });
  