import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherShoppingCartElement } from '@aracna/icons-feather-web/elements/shopping-cart-element.js'

export const IconFeatherShoppingCart: ElementComponent<IconFeatherShoppingCartElement, IconProps> = createBaseElementComponent<
  IconFeatherShoppingCartElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-shopping-cart', IconFeatherShoppingCartElement)
