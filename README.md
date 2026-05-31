# Личный блог (Vue.js)

Простой блог на Vue 3: просмотр постов, добавление и удаление.

## Запуск

```bash
npm install
npm run dev
```

Откройте в браузере адрес, который покажет терминал (обычно http://localhost:5173).

## Сборка

```bash
npm run build
```

## GitHub Pages

Сайт: **https://tosovets.github.io/proj/**

1. В репозитории на GitHub: **Settings → Pages**
2. В **Build and deployment** выберите **Source: GitHub Actions** (не «Deploy from a branch»)
3. Закоммитьте и запушьте изменения в `main` — workflow сам соберёт проект и опубликует папку `dist`

Если переименуете репозиторий, измените `base` в `vite.config.js` на `/новое-имя/`.

## Технологии

- Vue 3 (Options API)
- Bootstrap 5
- Vite

## Функции

- Список постов (заголовок, текст, дата, картинка)
- Форма добавления нового поста
- Кнопка удаления поста
