var form = document.getElementById('project-form');
var tbody = document.getElementById('projects-tbody');
var emptyRow = document.getElementById('empty-row');

function setError(fieldId, msg) {
  var errEl = document.getElementById(fieldId + '-error');
  var input = document.getElementById(fieldId);
  if (errEl) errEl.textContent = msg;
  if (input) {
    if (msg) {
      input.setAttribute('aria-invalid', 'true');
    } else {
      input.removeAttribute('aria-invalid');
    }
  }
}

function clearAllErrors() {
  var ids = ['proj-name', 'proj-desc', 'proj-url', 'proj-image', 'proj-date', 'proj-tech'];
  for (var i = 0; i < ids.length; i++) {
    setError(ids[i], '');
  }
}

function isValidUrl(val) {
  try {
    new URL(val);
    return true;
  } catch (e) {
    return false;
  }
}

function escapeHtml(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function validateForm() {
  var valid = true;

  var name = document.getElementById('proj-name').value.trim();
  if (!name) {
    setError('proj-name', 'Project name is required.');
    valid = false;
  } else {
    setError('proj-name', '');
  }

  var desc = document.getElementById('proj-desc').value.trim();
  if (!desc) {
    setError('proj-desc', 'Description is required.');
    valid = false;
  } else {
    setError('proj-desc', '');
  }

  var url = document.getElementById('proj-url').value.trim();
  if (url && !isValidUrl(url)) {
    setError('proj-url', 'Please enter a valid URL (e.g. https://example.com).');
    valid = false;
  } else {
    setError('proj-url', '');
  }

  var img = document.getElementById('proj-image').value.trim();
  if (img && !isValidUrl(img)) {
    setError('proj-image', 'Please enter a valid image URL.');
    valid = false;
  } else {
    setError('proj-image', '');
  }

  var date = document.getElementById('proj-date').value;
  if (!date) {
    setError('proj-date', 'Completion date is required.');
    valid = false;
  } else {
    setError('proj-date', '');
  }

  var tech = document.getElementById('proj-tech').value;
  if (!tech) {
    setError('proj-tech', 'Please select a technology.');
    valid = false;
  } else {
    setError('proj-tech', '');
  }

  return valid;
}

function addProjectRow(name, desc, url, img, date, tech, status) {
  if (emptyRow) {
    emptyRow.remove();
    emptyRow = null;
  }

  var tr = document.createElement('tr');

  var tdName = document.createElement('td');
  tdName.textContent = name;

  var tdDesc = document.createElement('td');
  tdDesc.textContent = desc;

  var tdUrl = document.createElement('td');
  if (url) {
    var a = document.createElement('a');
    a.href = url;
    a.textContent = 'View';
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    tdUrl.appendChild(a);
  } else {
    tdUrl.textContent = '-';
  }

  var tdTech = document.createElement('td');
  tdTech.textContent = tech + ' (' + status + ')';

  var tdImg = document.createElement('td');
  if (img) {
    var imgEl = document.createElement('img');
    imgEl.src = img;
    imgEl.alt = name + ' thumbnail';
    imgEl.width = 60;
    imgEl.height = 60;
    imgEl.loading = 'lazy';
    imgEl.className = 'thumb';
    tdImg.appendChild(imgEl);
  } else {
    tdImg.textContent = '-';
  }

  var tdDate = document.createElement('td');
  tdDate.textContent = date;

  tr.appendChild(tdName);
  tr.appendChild(tdDesc);
  tr.appendChild(tdUrl);
  tr.appendChild(tdTech);
  tr.appendChild(tdImg);
  tr.appendChild(tdDate);

  tbody.appendChild(tr);

  tr.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!validateForm()) {
    var firstError = form.querySelector('[aria-invalid="true"]');
    if (firstError) firstError.focus();
    return;
  }

  var name = document.getElementById('proj-name').value.trim();
  var desc = document.getElementById('proj-desc').value.trim();
  var url = document.getElementById('proj-url').value.trim();
  var img = document.getElementById('proj-image').value.trim();
  var date = document.getElementById('proj-date').value;
  var tech = document.getElementById('proj-tech').value;
  var status = document.getElementById('proj-status').value;

  addProjectRow(name, desc, url, img, date, tech, status);
  form.reset();
  clearAllErrors();
});

form.addEventListener('reset', function () {
  clearAllErrors();
});
