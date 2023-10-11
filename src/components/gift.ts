import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherGiftElement } from '@aracna/icons-feather-web/elements/gift-element'

export const IconFeatherGift: ElementComponent<IconFeatherGiftElement, IconProps> = createBaseElementComponent<
  IconFeatherGiftElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-gift', IconFeatherGiftElement)
