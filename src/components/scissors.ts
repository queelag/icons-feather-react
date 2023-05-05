import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherScissorsElement } from '@aracna/icons-feather-web/elements/scissors-element.js'

export const IconFeatherScissors: ElementComponent<IconFeatherScissorsElement, IconProps> = createBaseElementComponent<
  IconFeatherScissorsElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-scissors', IconFeatherScissorsElement)
