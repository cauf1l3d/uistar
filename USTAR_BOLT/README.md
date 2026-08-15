# USTAR ACADEMY — UI PROTOTYPE v1

## WHAT THIS IS
Локальный тестовый UI-пакет целевого интерфейса USTAR Academy — корпоративной академии Express Market.
Это НЕ production-код и НЕ тема Moodle. Это спроектированная система (роли, экраны, дизайн-система, словарь)
+ карта её безопасного переноса на Moodle 5.1 (boost_union). Production не затрагивается.

## HOW TO RUN LOCALLY
1. Распакуйте архив.
2. Откройте `index.html` в браузере (двойной клик; сервер не нужен).
3. Интернет не обязателен: без сети вместо Manrope/Montserrat используется системный шрифт.

## ROLE SWITCHING
`index.html` — выбор роли (Сотрудник / Руководитель / HR Studio / CEO / Technical Admin).
Внутри любой страницы: «← Сменить роль» внизу бокового меню.

## SCREENS
- Employee: login, home, learning, course (path), activity, quiz, knowledge (+category, +item), career, skills, team — mobile-first (сузьте окно < 900px: нижняя навигация).
- Manager: team dashboard (исключения → готовые → список), employee detail, team knowledge.
- HR Studio: overview, skills, skill detail, content library (+ демо loading/empty), item editor, course builder, ladders, ladder editor, employees, employee editor.
- Executive: company overview, department drilldown.
- Admin: USTAR ⇄ TECHNICAL mode, technical shell compatibility.

## DESIGN SYSTEM
`styles/tokens.css` — единственный источник значений (цвет/шрифт/радиус/отступ).
`styles/base.css` — AppShell; `styles/components.css` — 25+ компонентов; `styles/responsive.css` — поведение.
Полное описание: `docs/05_DESIGN_SYSTEM.md`.

## KNOWN LIMITATIONS
- Демо-данные зашиты в HTML; поиск, фильтры и формы — визуальные (без логики).
- Игры и SCORM-плеер показаны как шаги пути, отдельный плеер не прототипирован.
- Нет тёмной темы: принято решение «графитовый shell + светлая рабочая область».
- Скриншоты (папка screenshots/) не приложены — прототип живой, смотрите в браузере.
- Уведомления/центр сообщений — в объёме следующей итерации.

## MOODLE MAPPING
- `docs/06_MOODLE_IMPLEMENTATION_MAP.md` — target → owner → уровень → риск.
- `implementation/` — COMPONENT_MAP, TEMPLATE_MAP, SCSS_MAP, MOODLE_OVERRIDE_PLAN.

## NEXT IMPLEMENTATION STEPS
1. Утвердить прототип с бизнесом (пройти сценарии из docs/04_USER_JOURNEYS.md).
2. Стейджинг: создать theme_ustar (Фаза A — токены, шрифты, login).
3. Контракт данных local_ustar (навыки, ступени, готовность, дефициты).
4. Фазы B–E по implementation/MOODLE_OVERRIDE_PLAN.md.
