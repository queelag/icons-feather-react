import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherSmartphoneElement } from '@aracna/icons-feather-web/elements/smartphone-element'

export const IconFeatherSmartphone: ElementComponent<IconFeatherSmartphoneElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSmartphoneElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-smartphone', IconFeatherSmartphoneElement)
