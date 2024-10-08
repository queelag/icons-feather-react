import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherArrowUpElement } from '@aracna/icons-feather-web/elements/arrow-up-element'

export const IconFeatherArrowUp: ElementComponent<IconFeatherArrowUpElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherArrowUpElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-arrow-up', IconFeatherArrowUpElement)
