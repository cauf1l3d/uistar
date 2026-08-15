# MOODLE_OVERRIDE_PLAN — план внедрения и безопасность обновлений

## Архитектура
```text
boost (core)
  └── boost_union (установлен, v5.1-r20)
        └── theme_ustar (новая grandchild-тема — код, а не Raw SCSS)
local_ustar (продуктовые страницы: Home, Knowledge, Career, Team, HR Studio, Executive, Mode switch)
format_ustar (путь обучения: шаги, типы, замки)
```

## Фазы
| Фаза | Состав | Риск | Откат |
|---|---|---|---|
| A | theme_ustar: токены, шрифты, login, admin-compat | LOW | выбор темы boost_union |
| B | shell-шаблоны (navbar/columns2), myoverview, activity shell | MED | удаление override-файлов |
| C | format_ustar + quiz shell (архитектурное ревью) | HIGH | возврат формата courses на topics |
| D | local_ustar (web services + страницы ролей) | HIGH | feature-flag на пункты навигации |
| E | демонтаж старого Raw SCSS, чистка настроек Union | MED | архив настроек уже снят (ui-audit) |

## Правила безопасности (RULE 20)
- Production не трогаем до приёмки на стейджинге (пункт 39 мастер-промпта).
- Каждый override — минимально достаточного уровня (Decision rule из OVERRIDE_MATRIX).
- Ноль новых `!important`; существующие уходят вместе с Raw SCSS.
- Перед обновлением Boost/Union: diff версий переопределённых шаблонов (версии зафиксированы в комментариях).
- Данные продукта (навыки, ступени, готовность) — только через web services `local_ustar`; никакого скрейпинга DOM.
- USTAR MODE ⇄ TECHNICAL MODE: capability `local/ustar:technicalmode`, переходы логируются.

## Definition of Done внедрения
1. Employee/Manager/HR/Executive сценарии из 04_USER_JOURNEYS.md проходят на стейджинге.
2. Обновление минорной версии Boost Union не ломает shell (визуальная регрессия ≤ согласованного порога).
3. grep компилированного CSS: количество `!important` < 20 (сейчас 438).
4. Lighthouse a11y ≥ 95 на ключевых экранах.
