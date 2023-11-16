import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherSmartphoneElement } from '@aracna/icons-feather-web/elements/smartphone-element'

export const IconFeatherSmartphone: ElementComponent<IconFeatherSmartphoneElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSmartphoneElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-smartphone', IconFeatherSmartphoneElement)
