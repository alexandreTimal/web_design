(function () {
  var links = [
    { href: 'index.html',       label: 'Home' },
    { href: 'about.html',       label: 'About' },
    { href: 'portfolio.html',   label: 'Portfolio' },
    { href: 'data.html',        label: 'Projects Data' },
    { href: 'contact.html',     label: 'Contact' },
    { href: 'universities.html',label: 'Universities' },
    { href: 'card.html',        label: 'Card' },
    { href: 'overview.html',    label: 'Overview' },
    { href: 'chatbot.html',     label: 'Chatbot' },
  ];

  var current = window.location.pathname.split('/').pop() || 'index.html';

  var items = links.map(function (link) {
    var isCurrent = link.href === current;
    return '<li><a href="' + link.href + '"' +
      (isCurrent ? ' aria-current="page"' : '') +
      '>' + link.label + '</a></li>';
  }).join('');

  var nav = document.getElementById('main-nav');
  if (nav) {
    nav.setAttribute('aria-label', 'Main navigation');
    nav.innerHTML = '<ul>' + items + '</ul>';
  }
})();
