function showTab(tabId) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
      tab.style.display = 'none';
    });
  
    // Show the selected tab
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
      selectedTab.style.display = 'block';
    }
  }
  
  document.getElementById('tabs').addEventListener('click', function(event) {
    if (event.target.classList.contains('tab')) {
      const tabId = event.target.dataset.tabId;
      showTab(tabId);
    }
  });
  
  // Initial tab display
  showTab('tabOne');  // You can set the default tab here
  