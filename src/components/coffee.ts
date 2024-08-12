import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCoffeeElement } from '@aracna/icons-feather-web/elements/coffee-element'

export const IconFeatherCoffee: ElementComponent<IconFeatherCoffeeElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCoffeeElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-coffee', IconFeatherCoffeeElement)
