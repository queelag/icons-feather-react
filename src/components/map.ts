import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherMapElement } from '@aracna/icons-feather-web/elements/map-element'

export const IconFeatherMap: ElementComponent<IconFeatherMapElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMapElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-map', IconFeatherMapElement)
