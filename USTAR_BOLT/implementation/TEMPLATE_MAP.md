# TEMPLATE_MAP — какие Mustache-шаблоны переопределяет theme_ustar

Базируется на maps/TEMPLATE_MAP.md аудита (владельцы подтверждены снапшотами Boost/Boost Union).

## Переопределяем в theme_ustar (L3)
- `theme_boost/navbar` — TopBar: поиск, пользователь, без «глассморфизма»; текущий Raw SCSS, завязанный на точных детей navbar, удаляется.
- `theme_boost/columns2` / drawers — AppShell с ролевым SideNav.
- `core/loginform` (частично через Boost Union настройки) — сплит-композиция логина.
- `block_myoverview/*` — LearningCard-список вместо карточной сетки Moodle.
- `core_courseformat/local/*` (в связке с format_ustar) — путь шагов.
- `mod_scorm/*` player/exit bar — рамка «Урок» без упоминания SCORM.
- footer Union — минимальный, ссылки поддержки.

## НЕ переопределяем (используем настройки/SCSS)
- Admin-таблицы и формы — только scoped-токены `.path-admin` (читаемость).
- Уведомления/сообщения — сначала L2; шаблоны только при доказанной необходимости.

## Правило
Каждый override сопровождается комментарием с версией исходного шаблона (boost 2025100600 / boost_union v5.1-r20) для контроля при обновлениях.
