import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMapElement } from '@aracna/icons-feather-web/elements/map-element.js'

export const IconFeatherMap: ElementComponent<IconFeatherMapElement, IconProps> = createBaseElementComponent<
  IconFeatherMapElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-map', IconFeatherMapElement)
