/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import * as boostrap from 'bootstrap';
import '../styles/main.scss';
import 'regenerator-runtime';
import App from './views/app';

/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
  const storedTheme = localStorage.getItem('theme');

  const getPreferredTheme = () => {
    if (storedTheme) {
      return storedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const setTheme = function (theme) {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme);
    }
  };

  setTheme(getPreferredTheme());

  const showActiveTheme = (theme) => {
    const activeThemeIcon = document.querySelector('.theme-icon-active');
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`);
    const iconsOfActiveBtn = btnToActive.querySelector('i').dataset.themeIcon;

    document.querySelectorAll('[data-bs-theme-value]').forEach((element) => {
      element.classList.remove('active');
    });

    btnToActive.classList.add('active');
    activeThemeIcon.classList.remove(activeThemeIcon.dataset.themeIconsActive);
    activeThemeIcon.classList.add(iconsOfActiveBtn);
    activeThemeIcon.dataset.iconActive = iconsOfActiveBtn;
  };

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (storedTheme !== 'light' || storedTheme !== 'dark') {
      setTheme(getPreferredTheme());
    }
  });

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme());

    document.querySelectorAll('[data-bs-theme-value]')
      .forEach((toggle) => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value');
          localStorage.setItem('theme', theme);
          setTheme(theme);
          showActiveTheme(theme);
        });
      });
  });
})();

const app = new App({
  button: document.querySelector('.navbar-toggler'),
  drawer: document.querySelector('.navbar'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
