import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMapPinElement } from '@aracna/icons-feather-web/elements/map-pin-element'

export const IconFeatherMapPin: ElementComponent<IconFeatherMapPinElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMapPinElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-map-pin', IconFeatherMapPinElement)
