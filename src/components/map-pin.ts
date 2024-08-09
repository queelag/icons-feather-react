import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherMapPinElement } from '@aracna/icons-feather-web/elements/map-pin-element'

export const IconFeatherMapPin: ElementComponent<IconFeatherMapPinElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMapPinElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-map-pin', IconFeatherMapPinElement)
