# SCSS_MAP — структура SCSS theme_ustar

Цель: заменить 32 КБ Raw SCSS (438 `!important`) на слойную систему без каскадных войн.

```text
theme_ustar/scss/
├── pre.scss            # только переменные (из tokens.css):
│                       #   $primary: #EBC500; $body-bg: #F4F4F1; ...
│                       #   $border-radius: .375rem→8px; $btn-border-radius: 6px;
│                       #   $font-family-sans-serif: Manrope...; $headings-font-family: Montserrat...
├── post/
│   ├── _tokens-css.scss      # экспорт CSS-переменных (--surface-*, --status-*)
│   ├── _shell.scss           # navbar, drawer, mobilenav (scoped: .ustar-shell)
│   ├── _components.scss      # перенос components.css (BEM-классы .ustar-*)
│   ├── _course.scss          # format_ustar path (scoped: .format-ustar)
│   ├── _quiz.scss            # scoped .path-mod-quiz — БЕЗ z-index/pointer-events хаков
│   ├── _admin-compat.scss    # .path-admin: только читаемость (контраст/типографика)
│   └── _states.scss          # empty/loading/error partials
└── fonts/                    # manrope-*.woff2, montserrat-*.woff2 + @font-face
```

## Порядок демонтажа текущего Raw SCSS
1. Инвентаризация: каждое правило → категория (token / component / hack / dead).
2. token-правила → pre.scss; component-правила → post/, переписав селекторы на классы шаблонов theme_ustar.
3. hack-правила (z-index, pointer-events, `body::after` оверлей) — не переносить; причины закрываются шаблонами.
4. Конфликты закрыть однозначно: фон `#F4F4F1` (светлая рабочая область по новой системе), удалить `navbartint #650AFA`.
5. Стейджинг-прогон: diff скомпилированного CSS + визуальная регрессия по selectors/*.md.
