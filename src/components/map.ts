import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherMapElement } from '@aracna/icons-feather-web/elements/map-element'

export const IconFeatherMap: ElementComponent<IconFeatherMapElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMapElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-map', IconFeatherMapElement)
