import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherFilmElement } from '@aracna/icons-feather-web/elements/film-element'

export const IconFeatherFilm: ElementComponent<IconFeatherFilmElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherFilmElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-film', IconFeatherFilmElement)
