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

### Важно: настройка Pages

Сейчас на GitHub должно быть так:

1. **Settings → Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `main`, папка **`/docs`** (не корень `/`)

### Обновление сайта после изменений в коде

```bash
npm run deploy:pages
git add docs
git commit -m "Обновление сайта на GitHub Pages"
git push
```

Команда `deploy:pages` собирает проект и копирует файлы в папку `docs/`.

Если переименуете репозиторий, измените `base` в `vite.config.js` на `/новое-имя/` и снова выполните `npm run deploy:pages`.

## Технологии

- Vue 3 (Options API)
- Bootstrap 5
- Vite

## Функции

- Список постов (заголовок, текст, дата, картинка)
- Форма добавления нового поста
- Кнопка удаления поста
