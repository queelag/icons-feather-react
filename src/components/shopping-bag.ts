import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherShoppingBagElement } from '@aracna/icons-feather-web/elements/shopping-bag-element'

export const IconFeatherShoppingBag: ElementComponent<IconFeatherShoppingBagElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherShoppingBagElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-shopping-bag', IconFeatherShoppingBagElement)
