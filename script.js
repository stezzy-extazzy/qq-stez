document.addEventListener('DOMContentLoaded', () => {
  const telegramBtn = document.querySelector('.btn-telegram');

  if (telegramBtn) {
    telegramBtn.addEventListener('click', () => {
      console.log('Користувач перейшов у Telegram');
    });
  }
});
