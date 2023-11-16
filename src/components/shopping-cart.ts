import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherShoppingCartElement } from '@aracna/icons-feather-web/elements/shopping-cart-element'

export const IconFeatherShoppingCart: ElementComponent<IconFeatherShoppingCartElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherShoppingCartElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-shopping-cart', IconFeatherShoppingCartElement)
