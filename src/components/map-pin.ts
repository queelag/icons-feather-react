import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherMapPinElement } from '@aracna/icons-feather-web/elements/map-pin-element'

export const IconFeatherMapPin: ElementComponent<IconFeatherMapPinElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMapPinElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-map-pin', IconFeatherMapPinElement)
