import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCoffeeElement } from '@aracna/icons-feather-web/elements/coffee-element'

export const IconFeatherCoffee: ElementComponent<IconFeatherCoffeeElement, IconProps> = createBaseElementComponent<
  IconFeatherCoffeeElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-coffee', IconFeatherCoffeeElement)
