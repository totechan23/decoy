const output = document.getElementById('output');
const username = document.getElementById('username');

document.getElementById('lookupBtn').addEventListener('click', fetchUser);
document.getElementById('adminBtn').addEventListener('click', fetchAdmin);
document.getElementById('metricsBtn').addEventListener('click', fetchMetrics);

username.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    fetchUser();
  }
});

async function fetchAndRender(url) {
  try {
    const response = await fetch(url);
    const contentType = response.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      const data = await response.json();
      output.textContent = JSON.stringify(data, null, 2);
      return;
    }

    output.textContent = await response.text();
  } catch (error) {
    output.textContent = `Request failed: ${error.message}`;
  }
}

function fetchUser() {
  const value = username.value.trim();
  fetchAndRender(`/api/user?name=${encodeURIComponent(value)}`);
}

function fetchAdmin() {
  fetchAndRender('/api/admin');
}

function fetchMetrics() {
  fetchAndRender('/api/metrics');
}
