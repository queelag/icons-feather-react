import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherGiftElement } from '@aracna/icons-feather-web/elements/gift-element'

export const IconFeatherGift: ElementComponent<IconFeatherGiftElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherGiftElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-gift', IconFeatherGiftElement)
