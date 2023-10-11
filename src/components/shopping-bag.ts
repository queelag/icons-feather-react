import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherShoppingBagElement } from '@aracna/icons-feather-web/elements/shopping-bag-element'

export const IconFeatherShoppingBag: ElementComponent<IconFeatherShoppingBagElement, IconProps> = createBaseElementComponent<
  IconFeatherShoppingBagElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-shopping-bag', IconFeatherShoppingBagElement)
