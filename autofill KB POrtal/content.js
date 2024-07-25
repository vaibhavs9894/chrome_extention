chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (window.location.href.includes("kaushalbharat.gov.in/training-progress")) {
    try {
      document.querySelector('#candidateEnrolled').value = request.candidatesEnrolled;
      document.querySelector('#candidatesFreezed').value = request.candidatesFreezed;
      document.querySelector('#trained').value = request.trained;
      document.querySelector('#dropout').value = request.dropout;
      document.querySelector('#undergoing').value = request.undergoing;
      document.querySelector('#assessed').value = request.assessed;
      document.querySelector('#certified').value = request.certified;
      document.querySelector('#appointed').value = request.appointed;
      document.querySelector('#monthlyContinuity').value = request.monthlyContinuity;
      document.querySelector('#placed').value = request.placed;
      sendResponse({ success: true });
    } catch (error) {
      console.error('Error filling the form:', error);
      sendResponse({ success: false });
    }
  }
  return true;
});
