# COMPONENT_MAP — компонент прототипа → будущий носитель в Moodle

| Компонент (CSS) | Файл прототипа | Носитель в theme_ustar / local_ustar | Уровень |
|---|---|---|---|
| AppShell `.app` | base.css | `theme_ustar/layout/columns2.php` + шаблон | L3/L5 |
| TopBar `.topbar` | base.css | override `theme_boost/navbar` Mustache | L3 |
| SideNav `.sidenav` | base.css | шаблон drawer + источник пунктов по роли | L3 + узкий L4 |
| MobileNav `.mobilenav` | responsive.css | тот же шаблон, media-scoped | L2/L3 |
| PrimaryAction `.next-action` | components.css | `local_ustar` Home (web service «следующий шаг») | L6 |
| StatusStrip `.status-chip` | components.css | local_ustar Home | L6 |
| LearningCard `.learning-card` | components.css | override шаблонов block_myoverview | L3 |
| LearningStep `.path` | components.css | `format_ustar` templates | L7 |
| ProgressBar `.progress` | components.css | общий partial темы | L2/L3 |
| SkillLevel `.skill-level` | components.css | local_ustar (данные: core_competency + свои таблицы) | L6 |
| ContentGap `.gap-row` | components.css | local_ustar HR Studio | L6 |
| CareerTimeline `.career` | components.css | local_ustar Career | L6 |
| EmployeeRow `.table`+`.person` | components.css | local_ustar Team/Employees (table SQL API) | L6 |
| KnowledgeCard `.knowledge-card` | components.css | local_ustar Knowledge | L6 |
| HR/ExecutiveMetric `.metric` | components.css | local_ustar dashboards | L6 |
| FilterBar `.chip` | components.css | общий partial + AMD-модуль | L3 |
| EmptyState `.empty` | components.css | общий partial | L3 |
| Quiz shell `.quiz-*` | components.css | scoped SCSS + renderer override (см. риски) | L2/L4 |
| Mode-switch / tech-banner | components.css | local_ustar switcher (capability) | L6 |
| Login split `.login-page` | components.css | Union settings + login Mustache | L1–L3 |
