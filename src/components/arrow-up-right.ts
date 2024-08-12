import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherArrowUpRightElement } from '@aracna/icons-feather-web/elements/arrow-up-right-element'

export const IconFeatherArrowUpRight: ElementComponent<IconFeatherArrowUpRightElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherArrowUpRightElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-arrow-up-right', IconFeatherArrowUpRightElement)
