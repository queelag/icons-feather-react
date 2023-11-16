import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherArrowUpElement } from '@aracna/icons-feather-web/elements/arrow-up-element'

export const IconFeatherArrowUp: ElementComponent<IconFeatherArrowUpElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherArrowUpElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-arrow-up', IconFeatherArrowUpElement)
