import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherShoppingBagElement } from '@aracna/icons-feather-web/elements/shopping-bag-element'

export const IconFeatherShoppingBag: ElementComponent<IconFeatherShoppingBagElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherShoppingBagElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-shopping-bag', IconFeatherShoppingBagElement)
