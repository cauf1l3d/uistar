# 06_MOODLE_IMPLEMENTATION_MAP — Перенос целевого UI на Moodle

Основа: OVERRIDE_MATRIX.md из аудита. Уровни: L1 token → L2 SCSS → L3 template → L4 renderer → L5 layout → L6 local_ustar page → L7 format_ustar.
Принцип: минимально достаточный уровень; ноль новых `!important`.

## Стратегия: theme_ustar (grandchild: ustar → boost_union → boost)

| TARGET | CURRENT MOODLE OWNER | SOURCE | RECOMMENDED IMPLEMENTATION | RISK | UPGRADE SAFETY |
|---|---|---|---|---|---|
| Токены (цвет/тип/радиусы) | Boost preset + Union pre-SCSS (конфликтующий Raw SCSS) | boost_union settings | **L1**: SCSS-переменные theme_ustar; демонтаж Raw SCSS | LOW | SAFE |
| Шрифты Manrope/Montserrat | объявлены без ресурсов | bootstrap vars | **L1**: woff2 в теме + `$font-family-*` | LOW | SAFE |
| AppShell (sidebar+topbar) | Union drawers/navbar | `theme_boost/navbar`, drawers | **L3**: Mustache columns2/navbar в theme_ustar; **L5** только если структура shell меняется | MED–HIGH | REVIEW |
| SideNav ролей | Union primary navigation | navigation output | **L4** узкий override источника пунктов (роль → набор) + **L3** шаблон | HIGH | REVIEW |
| Employee Home («Следующий шаг», StatusStrip) | Dashboard + blocks | core blocks | **L6**: страница `local_ustar/home.php` + web services (готовность, дедлайны) | HIGH | SEPARATE CONTRACT |
| Learning list | course overview block | block_myoverview templates | **L3** override шаблонов блока + **L2** SCSS | MED | REVIEW |
| Course path (done/current/locked) | course format | format templates | **L7**: `format_ustar` (шаги, типы, замки) — это новая педагогика, не CSS | HIGH | REVIEW |
| Activity shell | core activity layout | columns2 + module | **L3** activity header/nav templates + **L2** | MED | REVIEW |
| Quiz shell | question engine + quiz renderer | `.que` DOM | **L4 ARCHITECTURAL OVERRIDE REQUIRED** (аудит: текущий CSS компенсирует DOM) + **L2** scoped | HIGH | FRAGILE |
| Knowledge Library | нет аналога (course categories не годятся) | — | **L6**: `local_ustar` (материалы = записи с привязкой к навыкам; хранение — mod_page/mod_resource как backend) | HIGH | SEPARATE CONTRACT |
| Career / лестницы / навыки | нет в core (competencies частично) | core_competency | **L6** поверх core_competency API + свои таблицы `local_ustar_*` | HIGH | SEPARATE CONTRACT |
| Manager Team | reports/gradebook | — | **L6**: страница команды на web services; никакого gradebook в UI | HIGH | SEPARATE CONTRACT |
| HR Studio | course management + admin | — | **L6**: набор страниц local_ustar; создание курсов через core API | HIGH | SEPARATE CONTRACT |
| Executive view | нет | — | **L6**: агрегирующие web services + страница | MED | SEPARATE CONTRACT |
| Login | Union login settings + templates | login templates | **L1/L2** настройки+SCSS; **L3** для split-композиции | LOW–MED | SAFE/REVIEW |
| USTAR ⇄ TECHNICAL MODE | — | — | **L6**: переключатель (capability-based), техрежим = стандартный Moodle c **L2** scoped-токенами читаемости `.path-admin` | MED | REVIEW |
| Footer/уведомления | Union footer, core popover | templates | **L1/L2**; шаблоны — только при изменении структуры | MED | REVIEW |

## Последовательность внедрения
1. **Фаза A (безопасная):** theme_ustar с токенами L1 + шрифты + login. Параллельно: перенос стабильных правил из Raw SCSS в переменные, удаление конфликтов (#161616/#141414, navbartint #650AFA).
2. **Фаза B:** shell-шаблоны (navbar, columns2), learning list, activity shell (L3).
3. **Фаза C:** format_ustar (путь курса) и quiz shell (L4, отдельное ревью рисков).
4. **Фаза D:** local_ustar — Home, Knowledge, Career, Team, HR Studio, Executive (L6, отдельный контракт данных/web services).
5. **Фаза E:** демонтаж остатков Raw SCSS, замер регрессий на стейджинге при обновлении Boost Union.

## Анти-паттерны (запрещено)
- Решать структурные проблемы через `!important` и селекторы на случайную вложенность DOM.
- Форкать core Moodle.
- Копировать методы рендереров целиком ради косметики.
