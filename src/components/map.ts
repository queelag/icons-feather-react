import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMapElement } from '@aracna/icons-feather-web/elements/map-element'

export const IconFeatherMap: ElementComponent<IconFeatherMapElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMapElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-map', IconFeatherMapElement)
