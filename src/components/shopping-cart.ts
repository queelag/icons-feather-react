import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherShoppingCartElement } from '@aracna/icons-feather-web/elements/shopping-cart-element'

export const IconFeatherShoppingCart: ElementComponent<IconFeatherShoppingCartElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherShoppingCartElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-shopping-cart', IconFeatherShoppingCartElement)
