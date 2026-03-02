# E-commerceProductCatalog

## Опис
Створити каталог товарів для інтернет-магазину з різними підходами до стилізації. Проєкт має демонструвати використання CSS Modules, Tailwind CSS (або іншого utility-first підходу), Material-UI та традиційного CSS/SCSS в різних частинах додатку.

---
### Скріншоти:
<img width="400" alt="image" src="https://github.com/user-attachments/assets/15cd813a-8a66-481f-910e-4ddc0be8a6c8" />
<img width="400" alt="image" src="https://github.com/user-attachments/assets/42c32f9e-9850-4149-8fc8-ba09d49fba08" />
<img width="400" alt="image" src="https://github.com/user-attachments/assets/84e48225-64f0-431a-9e99-c21c34dfd893" />
<img width="400" alt="image" src="https://github.com/user-attachments/assets/f3823421-8428-4373-82fb-d4e99992ff3e" />
<img width="400" alt="image" src="https://github.com/user-attachments/assets/11e262ca-d0e9-4260-aae3-0f7ff7d47721" />
<img width="400" alt="image" src="https://github.com/user-attachments/assets/fb9704db-e4f5-4192-ab1f-d4eb458c157d" />
<img width="400" alt="image" src="https://github.com/user-attachments/assets/121a12af-b5ac-46f7-a10e-5b7fe67cda4c" />
<img width="400" alt="image" src="https://github.com/user-attachments/assets/2ce866da-8541-4c2c-aaab-8df7b15dacf4" />

---

## Функціональні вимоги та структура додатку:

1. Header (Navigation Bar) – CSS Modules + SCSS
   - Логотип, меню, пошук, іконки (сповіщення, обране, кошик), кнопка входу у профіль
   - Sticky, responsive, hover ефекти, анімація badge

2. Sidebar з фільтрами – Material-UI
   - Категорії (Accordion), ціновий діапазон (Slider), бренди (Autocomplete), рейтинг (Rating), доступність (Checkbox)
   - Collapse/Expand для мобільних, кнопка "Скинути фільтри"

3. Каталог товарів (Product Grid) – Tailwind CSS
   - Grid/List view, картки товарів з зображенням, badge, назвою, рейтингом, ціною, кнопками
   - Responsive: мобільні 1 колонка, планшет 2, десктоп 3-4

4. Детальна сторінка товару – CSS Modules + Material-UI + Tailwind
   - Галерея зображень (Zoom, Lightbox), Breadcrumbs, рейтинг, ціна, badges
   - Tabs: опис, характеристики, відгуки, доставка
   - Кнопки дій: додати в кошик, купити, обране
   - Нижня частина: схожі товари, переглядали також

5. Кошик (Shopping Cart) – Material-UI + CSS Modules
   - Список товарів, мініатюри, назва, ціна, кількість, сума, кнопка видалення
   - Sidebar: підсумки, промокод, кнопка оформлення
   - Анімація видалення, Undo (Snackbar), збереження в localStorage

6. Сторінка обраного (Wishlist) – SCSS
   - Grid з товарами, кнопка "Додати всі в кошик", видалення, share link
   - Використано SCSS: змінні, nesting, mixins, функції, partials

7. Footer – CSS
   - Інформація про компанію, швидкі посилання, контакти, соцмережі, copyright

---

## Запуск проєкту
1. Клонувати репозиторій:
```bash
git clone https://github.com/olha-makarchuk/E-commerceProductCatalog.git
```

2. Встановити залежності:
```bash
npm install
```

3. Запустити локально:
```bash
npm ren dev
```
