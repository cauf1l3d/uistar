# USTAR Academy UI Prototype — Bolt.new Edition

## 🚀 Быстрый старт в Bolt

### Загрузка в Bolt.new

**Вариант 1: GitHub (рекомендуется)**
1. Создайте репозиторий на GitHub: https://github.com/new
2. Назовите его: `ustar-academy-ui`
3. Загрузите файлы этого проекта туда (через Git или Upload)
4. В **bolt.new** → Create New → Import from GitHub
5. Вставьте: `https://github.com/[ваш-аккаунт]/ustar-academy-ui`
6. Bolt импортирует и откроет live-редактор ✅

**Вариант 2: ZIP Upload**
1. Скачайте этот проект как ZIP
2. В **bolt.new** → Create New → Upload ZIP
3. Выберите файл → Bolt распакует и откроет ✅

---

## 🎨 Три способа редактировать

### 1. ВИЗУАЛЬНО (Select & Edit)
- Кликните на элемент в canvas (StatusChip, Button, Card)
- Справа появилась Properties panel
- Меняйте: цвет, размер, отступы, шрифт
- Результат мгновенно в canvas (live-sync)

**Пример:** StatusStrip маленькие?
```
Клик на StatusChip → Properties → Padding: 12px → 20px
→ canvas обновилась, видите крупнее
```

### 2. ПРОМПТАМИ (AI-редактирование)
- Нажмите Ctrl+K или кнопку "✨ Ask Claude"
- Пишите на русском, что нужно изменить
- Bolt сгенерирует код → результат в canvas

**Примеры промптов:**
```
"StatusChip слишком маленькие, увеличь их вдвое"
→ Bolt обновит padding/font-size в components.css

"Адаптируй таблицу на мобилку < 900px"
→ Bolt добавит media-query и collapse

"Сделай анимацию при наведении на LearningCard"
→ Bolt добавит CSS transition

"Реализуй рабочий quiz: клик на ответ → он подсветится"
→ Bolt добавит обработчик в scripts/
```

### 3. КОДОМ (прямое редактирование)
- File Tree слева → откройте styles/components.css
- Редактируйте как в обычном редакторе
- Ctrl+S → сохранили
- Canvas обновилась

---

## 📋 Структура проекта (видна в Bolt)

```
USTAR_UI_PROTOTYPE_v1/
├── index.html                    # Role selector (Employee/Manager/HR/Executive/Admin)
├── styles/
│   ├── tokens.css               # Палитра: переменные (--ustar-gold и т.д.)
│   ├── base.css                 # App shell, layout
│   ├── components.css           # 25+ компонентов (Button, Card, LearningCard...)
│   └── responsive.css           # Adaptive: mobile/tablet/desktop
├── scripts/
│   └── prototype.js             # Demo-интерактивность (quiz select, filter chips)
├── prototype/
│   ├── employee/
│   │   ├── home.html           # Employee Home
│   │   ├── learning.html       # Список обучений
│   │   ├── course.html         # Путь обучения (шаги)
│   │   ├── activity.html       # Урок
│   │   ├── quiz.html           # Проверка знаний
│   │   ├── knowledge.html      # База знаний
│   │   ├── knowledge-category.html
│   │   ├── knowledge-item.html
│   │   ├── career.html         # Развитие/лестница
│   │   ├── skills.html         # Мои навыки
│   │   ├── team.html           # Команда
│   │   └── login.html
│   ├── manager/
│   │   ├── team.html           # Дашборд команды
│   │   ├── employee.html       # Профиль сотрудника
│   │   └── knowledge.html      # Знания команды
│   ├── hr/
│   │   ├── overview.html       # HR Overview (дефициты, метрики)
│   │   ├── skills.html         # Карта навыков
│   │   ├── skill.html          # Навык (уровни, материалы)
│   │   ├── content.html        # Библиотека материалов
│   │   ├── editor.html         # Редактор материала
│   │   ├── builder.html        # Конструктор обучения
│   │   ├── ladders.html        # Лестницы
│   │   ├── ladder-editor.html  # Редактор лестницы
│   │   ├── employees.html      # Список сотрудников
│   │   └── employee-editor.html
│   ├── executive/
│   │   ├── overview.html       # Обзор готовности компании
│   │   └── department.html     # Отдел (drilldown)
│   └── admin/
│       ├── mode.html           # Переключение режимов
│       └── technical.html      # Технический режим (Moodle)
└── docs/                        # Документация (дизайн-система, user journeys)
```

---

## ⚡ Ваш живой цикл в Bolt

### День 1: Employee (сотрудник)

```
1. index.html → кнопка "Сотрудник" → employee/home.html
2. Видите: StatusStrip (4 чипса), Next Action (жёлтая кнопка), обучение
3. Нашли проблему: "StatusChip мелкие, на мобилке не видно"
   → Кликнули на чип → Properties → padding 12px → 24px → ✅ видно
4. Learning.html → Course.html → Activity.html → Quiz.html
5. В Quiz: "Время слишком маленькое"
   → Ctrl+K → "Увеличь шрифт таймера в quiz до 24px"
   → Bolt обновил → видите результат
6. Career.html → Skills.html → Team.html
```

### День 2: Manager (руководитель)

```
1. manager/team.html → дашборд (просрочки, готовые, полный список)
2. "Нужны кнопки 'Напомнить' рядом с просрочками"
   → Ctrl+K → Bolt добавит кнопки и onclick-обработчики
3. manager/employee.html → Профиль сотрудника (навыки, готовность, действия)
4. Прошли весь flow менеджера
```

### День 3: HR Studio (редактор контента)

```
1. hr/overview.html → Обзор (метрики, дефициты, очередь)
2. "Дефициты слишком светлые, их не видно"
   → Кликнули на gap-row → border color: #D97A1F (warning)
3. hr/skills.html → Карта навыков (таблица)
4. hr/builder.html → Конструктор (шаги обучения)
   - "Шаги нужны перетаскиваемые (drag & drop)"
   → Ctrl+K → Bolt добавит функциональность
5. hr/ladders.html → Лестницы (ступени, требования)
6. hr/employees.html → Таблица (мобильная версия?)
   → Ctrl+K → "Адаптируй на мобилку"
```

### День 4: Executive (CEO)

```
1. executive/overview.html → Готовность компании (4 метрики, список отделов, риски)
2. "Цифры очень маленькие, CEO не видит на планшете"
   → Кликнули на число → font-size 36 → 48px
3. executive/department.html → Drilldown (причины, что делается)
```

### День 5: Admin + палитра

```
1. admin/mode.html → Переключение режимов (USTAR ⇄ TECHNICAL)
2. admin/technical.html → Технический режим (для разработчика)

БОНУС: Меняете палитру (одно место для всех):
├─ Откройте styles/tokens.css
├─ Поменяйте --ustar-gold: #EBC500 → #F5D200
├─ Ctrl+S → ВСЕ экраны перекрасились
└─ Видите результат везде
```

---

## 🎯 Ключевые возможности

✅ **Live preview** — меняешь CSS → canvas обновилась за 100мс
✅ **Токены** — одна палитра для всех компонентов
✅ **Компоненты** — все уже есть (Button, Card, LearningCard, StatusChip и т.д.)
✅ **Mobile-first** — адаптивная разметка для всех размеров
✅ **Share-ссылка** — CEO/коллеги видят актуальный прототип
✅ **AI-промпты** — сложные правки через Ctrl+K
✅ **Экспорт** — Download code → отправить разработчику

---

## 💡 Советы для быстроты

1. **Используйте Ctrl+K часто** — для больших изменений
2. **CSS-переменные** (tokens.css) — меняйте там, применится везде
3. **Responsive** — мобильная версия уже встроена, но адаптируйте для вашего кейса
4. **Комментарии** (Shift+C) — оставляйте себе заметки прямо на canvas
5. **Share link** — отправляйте коллегам при утверждении вариантов

---

## 🚀 Как начать

1. **GitHub**: Создайте репо, загрузите файлы, дайте ссылку
2. **Или ZIP**: Скачайте, в Bolt → Upload ZIP
3. **Bolt откроется** с live-редактором
4. **Начните с index.html** → выберите роль → проходите сценарий → правьте на месте

**Нужна помощь?** Готов помочь с первой загрузкой или написать более сложный промпт для AI.
