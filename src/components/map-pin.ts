import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMapPinElement } from '@aracna/icons-feather-web/elements/map-pin-element.js'

export const IconFeatherMapPin: ElementComponent<IconFeatherMapPinElement, IconProps> = createBaseElementComponent<
  IconFeatherMapPinElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-map-pin', IconFeatherMapPinElement)
