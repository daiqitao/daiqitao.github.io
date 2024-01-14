function toggleDarkMode() {
  document.body.classList.add('dark-mode');
  var targetElements = document.querySelectorAll('a,body,h2,p,span,.label,.Card-Box,.screen,.footer,Card-pinglun,hr');
  for (var i = 0; i < targetElements.length; i++) {
    if (targetElements[i].classList.contains('a')) {
      targetElements[i].classList.remove('a');
      targetElements[i].classList.add('dark-a');
    }
    if (targetElements[i].classList.contains('body')) {
      targetElements[i].classList.remove('body');
      targetElements[i].classList.add('dark-body');
    }
    if (targetElements[i].classList.contains('h2')) {
      targetElements[i].classList.remove('h2');
      targetElements[i].classList.add('dark-h2');
    }
    if (targetElements[i].classList.contains('p')) {
      targetElements[i].classList.remove('p');
      targetElements[i].classList.add('dark-p');
    }
    if (targetElements[i].classList.contains('span')) {
      targetElements[i].classList.remove('span');
      targetElements[i].classList.add('dark-span');
    }
    if (targetElements[i].classList.contains('label')) {
      targetElements[i].classList.remove('label');
      targetElements[i].classList.add('label2');
    }
    if (targetElements[i].classList.contains('Card-Box')) {
      targetElements[i].classList.remove('Card-Box');
      targetElements[i].classList.add('Card-Box2');
    }
    if (targetElements[i].classList.contains('screen')) {
      targetElements[i].classList.remove('screen');
      targetElements[i].classList.add('screen2');
    }
    if (targetElements[i].classList.contains('footer')) {
      targetElements[i].classList.remove('footer');
      targetElements[i].classList.add('footer2');
    }
    if (targetElements[i].classList.contains('Card-pinglun')) {
      targetElements[i].classList.remove('Card-pinglun');
      targetElements[i].classList.add('Card-pinglun2');
    }
    if (targetElements[i].classList.contains('hr')) {
      targetElements[i].classList.remove('hr');
      targetElements[i].classList.add('dark-hr');
    }
  }
}

function toggleLightMode() {
  document.body.classList.remove('dark-mode');
  var targetElements = document.querySelectorAll('.dark-a, .dark-body, .dark-h2, .dark-p, .dark-span, .label2, .Card-Box2, .screen2, .footer2, .Card-pinglun2, .dark-hr');
  for (var i = 0; i < targetElements.length; i++) {
    if (targetElements[i].classList.contains('dark-a')) {
      targetElements[i].classList.remove('dark-a');
      targetElements[i].classList.add('a');
    }
    if (targetElements[i].classList.contains('dark-body')) {
      targetElements[i].classList.remove('dark-body');
      targetElements[i].classList.add('body');
    }
    if (targetElements[i].classList.contains('dark-h2')) {
      targetElements[i].classList.remove('dark-h2');
      targetElements[i].classList.add('h2');
    }
    if (targetElements[i].classList.contains('dark-p')) {
      targetElements[i].classList.remove('dark-p');
      targetElements[i].classList.add('p');
    }
    if (targetElements[i].classList.contains('dark-span')) {
      targetElements[i].classList.remove('dark-span');
      targetElements[i].classList.add('span');
    }
    if (targetElements[i].classList.contains('label2')) {
      targetElements[i].classList.remove('label2');
      targetElements[i].classList.add('label');
    }
    if (targetElements[i].classList.contains('Card-Box2')) {
      targetElements[i].classList.remove('Card-Box2');
      targetElements[i].classList.add('Card-Box');
    }
    if (targetElements[i].classList.contains('screen2')) {
      targetElements[i].classList.remove('screen2');
      targetElements[i].classList.add('screen');
    }
    if (targetElements[i].classList.contains('footer2')) {
      targetElements[i].classList.remove('footer2');
      targetElements[i].classList.add('footer');
    }
    if (targetElements[i].classList.contains('Card-pinglun2')) {
      targetElements[i].classList.remove('Card-pinglun2');
      targetElements[i].classList.add('Card-pinglun');
    }
    if (targetElements[i].classList.contains('dark-hr')) {
      targetElements[i].classList.remove('dark-hr');
      targetElements[i].classList.add('hr');
    }
  }
}

function initializeTheme() {
  const preferredTheme = localStorage.getItem('preferred-theme');

  // 根据用户的首选主题设置页面样式
  if (preferredTheme === 'dark' || (preferredTheme === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    toggleDarkMode();
  } else {
    toggleLightMode();
  }

  // 监听系统模式的变化
  window.matchMedia('(prefers-color-scheme: dark)').addListener(event => {
    if (event.matches) {
      toggleDarkMode();
    } else {
      toggleLightMode();
    }
  });
}

initializeTheme();
