# 05_DESIGN_SYSTEM — Дизайн-система USTAR

## 1. Токены (источник истины: `styles/tokens.css`)

### Бренд
| Токен | Значение | Роль |
|---|---|---|
| graphite 800/700/600 | #202020 / #282828 / #2B2B2B | shell, инверсные поверхности |
| gold | #EBC500 | primary action, current, selected, progress, identity |
| gold-bright / gold-deep | #F5D200 / #C7A700 | hover / pressed, границы на светлом |
| paper / paper-2 | #F4F4F1 / #EDEDED | фон приложения / утопленные поверхности |
| white | #FFFFFF | карточки |

### Семантика
- Поверхности: `--surface-app`, `--surface-card`, `--surface-sunken`, `--surface-shell`.
- Текст: `--text-primary/secondary/muted`, `--text-on-shell`, `--text-on-gold` (#1F1B00 — контраст на жёлтом).
- Статусы: success #2E8B57, warning #D97A1F, info #2F6FD0, danger #C93B3B (+ парные светлые фоны).
- Радиусы: 4 / 6 / 8 px. Больше — запрещено без функционального основания.
- Тени: одна (`--shadow-pop`) для всплывающих слоёв. Разделение — границами и уровнями поверхностей.

### Правило жёлтого
Жёлтый = «сейчас/важно/действуй». На экране не более одной жёлтой CTA. Жёлтый текст на белом запрещён (контраст); только заливка с тёмным текстом или маркеры на графите.

## 2. Типографика
- Заголовки: Montserrat 700, плотные, короткие. H1 28, H2 22, H3 16.
- UI: Manrope 500–700, базовый 15/1.5, вспомогательный 12–13.
- Большие цифры (36–44) — только в метриках HR/Executive, где число и есть содержание.
- Шрифты подключаются явно (woff2 в теме) — аудит показал, что сейчас ресурсы не поставляются.

## 3. Компоненты (реализованы в `styles/components.css`)
AppShell, TopBar, SideNav, MobileNav, PageHeader, PrimaryAction (next-action), StatusStrip (status-chip), LearningCard, LearningStep (path), ProgressBar, SkillLevel, SkillCoverage (progress в таблицах), ContentGap (gap-row), CareerStep/CareerTimeline (career), EmployeeRow (table+person), TeamRiskCard (risk-card), KnowledgeCard, KnowledgeCategory, HRMetric/ExecutiveMetric (metric), RiskRow (skill-row+badge), CreateMenu (page-head actions), SearchField, FilterBar (chips), EmptyState, Alerts, Builder-step, Quiz-option/Quiz-nav, Mode-switch, Tech-banner, Login split-screen.

## 4. Состояния
- Кнопки: default / hover / focus-visible (жёлтое кольцо) / disabled.
- Шаги пути: done (зелёный) / current (жёлтый + ореол) / locked (серый, opacity .62).
- Материалы: Черновик / На проверке / Опубликован / Устарел (badge-цвета).
- Данные: loading / empty / error — паттерны в hr/content.html.
- Permission denied: заголовок «Этот раздел — для роли X», короткое объяснение, CTA «На мою главную». Без кода ошибки в заголовке.

## 5. Доступность
- Контрасты: текст на paper ≥ 7:1; текст на графите ≥ 8:1; text-on-gold 12+:1.
- `:focus-visible` — везде; `aria-current="page"` в навигации; radiogroup в проверках; таблицы с настоящими `<th>`.
- Цвет никогда не единственный носитель статуса — всегда текст/иконка рядом.
- Touch-цели ≥ 44px на мобильном (нижняя навигация, CTA на всю ширину).

## 6. Сетка и отступы
Шкала 4/8/12/16/20/24/32/40. Контент ≤ 1180px (Executive ≤ 1420px на больших экранах), чтение ≤ 760px. Сайдбар 232px, топбар 56px.
