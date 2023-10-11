import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherFilmElement } from '@aracna/icons-feather-web/elements/film-element'

export const IconFeatherFilm: ElementComponent<IconFeatherFilmElement, IconProps> = createBaseElementComponent<
  IconFeatherFilmElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-film', IconFeatherFilmElement)
