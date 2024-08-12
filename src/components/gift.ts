import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherGiftElement } from '@aracna/icons-feather-web/elements/gift-element'

export const IconFeatherGift: ElementComponent<IconFeatherGiftElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherGiftElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-gift', IconFeatherGiftElement)
