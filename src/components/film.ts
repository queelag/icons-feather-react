import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherFilmElement } from '@aracna/icons-feather-web/elements/film-element'

export const IconFeatherFilm: ElementComponent<IconFeatherFilmElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherFilmElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-film', IconFeatherFilmElement)
