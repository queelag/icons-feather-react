import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherScissorsElement } from '@aracna/icons-feather-web/elements/scissors-element'

export const IconFeatherScissors: ElementComponent<IconFeatherScissorsElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherScissorsElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-scissors', IconFeatherScissorsElement)
