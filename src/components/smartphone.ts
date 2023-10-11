import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherSmartphoneElement } from '@aracna/icons-feather-web/elements/smartphone-element'

export const IconFeatherSmartphone: ElementComponent<IconFeatherSmartphoneElement, IconProps> = createBaseElementComponent<
  IconFeatherSmartphoneElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-smartphone', IconFeatherSmartphoneElement)
