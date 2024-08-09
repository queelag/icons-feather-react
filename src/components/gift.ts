import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherGiftElement } from '@aracna/icons-feather-web/elements/gift-element'

export const IconFeatherGift: ElementComponent<IconFeatherGiftElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherGiftElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-gift', IconFeatherGiftElement)
