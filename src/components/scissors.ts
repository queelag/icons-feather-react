import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherScissorsElement } from '@aracna/icons-feather-web/elements/scissors-element'

export const IconFeatherScissors: ElementComponent<IconFeatherScissorsElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherScissorsElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-scissors', IconFeatherScissorsElement)
