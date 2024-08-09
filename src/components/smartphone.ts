import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherSmartphoneElement } from '@aracna/icons-feather-web/elements/smartphone-element'

export const IconFeatherSmartphone: ElementComponent<IconFeatherSmartphoneElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSmartphoneElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-smartphone', IconFeatherSmartphoneElement)
