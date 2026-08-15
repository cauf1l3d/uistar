# 02_UX_CONSTITUTION — Применение правил в прототипе

Конституция принята без изменений (RULE 01–20 мастер-промпта). Ниже — как каждое правило реализовано и как проверяется.

| RULE | Реализация в прототипе | Как проверить |
|---|---|---|
| 01 One clear next action | Блок «Следующий шаг» — первый экранный элемент Home; единственная жёлтая CTA на экране | Home: действие находится < 3 сек |
| 02 No Moodle thinking | Словарь UI: обучение, шаг, урок, практика, проверка, материал, навык, ступень, прогресс, команда | grep по HTML: нет course/section/activity/SCORM/gradebook |
| 03 Progressive disclosure | «Дополнительно ▾» в редакторе материала и конструкторе; сложные настройки скрыты | hr/editor.html, hr/builder.html |
| 04 Role relevance | 5 отдельных оболочек навигации; HR-инструменты не видны сотруднику | Сравнить sidenav ролей |
| 05 Density without chaos | Таблицы для HR/менеджера, карточки только для группировки; тонкие разделители | hr/employees.html vs employee/home.html |
| 06 One product, one shell | Единый AppShell (TopBar+SideNav+Main) во всех ролях; меняется только содержимое навигации | Все страницы |
| 07 Position in journey | Прогресс ступени на Home, career-timeline, stepper курса, «шаг 5 из 7» | employee/career.html, course.html |
| 08 Content gap visible | Компонент ContentGap (жёлтая пунктирная строка) у HR, менеджера и в лестницах | hr/overview.html, hr/ladder-editor.html |
| 09 No duplicate knowledge | Материал — единица библиотеки; в курсе — ссылка «из библиотеки материалов»; связи в редакторе | hr/editor.html «Используется в обучении» |
| 10 Business language | Все тексты — рабочие формулировки; примеры tone of voice соблюдены | Вычитка текстов |
| 11 Mobile first (employee) | Нижняя навигация < 900px, CTA на всю ширину, collapse таблиц | Сузить окно на employee/* |
| 12 Manager = exceptions | Дашборд команды начинается с «Требует вашего действия», список — в конце | manager/team.html |
| 13 CEO = business state | 4 агрегата + отделы + главный риск; ни одного LMS-термина; без действий-редактирования | executive/overview.html |
| 14 HR edits a learning product | HR Studio: обзор → навыки → материалы → обучение → лестницы → сотрудники | hr/* |
| 15 Admin power remains | USTAR MODE ⇄ TECHNICAL MODE; техэкраны не переписываются | admin/mode.html |
| 16 Every screen has a job | У каждого экрана — задача в page-sub; экраны без job удалены (нет «дашборда ради дашборда») | Обход всех экранов |
| 17 No generic AI UI | Нет градиентных бланк-хиро, glassmorphism, декоративных иллюстраций | Визуальный аудит |
| 18 Gamification without childishness | Прогресс, уровни навыков, ступени; игра — необязательный шаг курса; без маскотов и конфетти | employee/career.html |
| 19 Accessibility | Контраст жёлтого только с графитом/чёрным текстом; focus-visible; aria-current; radiogroup в quiz | Tab-обход, контраст-чекер |
| 20 Upgrade safety | Прототип не трогает production; перенос — по уровням OVERRIDE_MATRIX без `!important`-войн | 06_MOODLE_IMPLEMENTATION_MAP.md |
