"use strict";

// Taken from https://tailwindcss.com/docs/dark-mode
if (localStorage.getItem('theme') === 'dark' || !('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}