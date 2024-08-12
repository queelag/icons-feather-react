import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherFilmElement } from '@aracna/icons-feather-web/elements/film-element'

export const IconFeatherFilm: ElementComponent<IconFeatherFilmElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherFilmElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-film', IconFeatherFilmElement)
