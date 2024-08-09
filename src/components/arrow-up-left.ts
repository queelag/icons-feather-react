import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherArrowUpLeftElement } from '@aracna/icons-feather-web/elements/arrow-up-left-element'

export const IconFeatherArrowUpLeft: ElementComponent<IconFeatherArrowUpLeftElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherArrowUpLeftElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-arrow-up-left', IconFeatherArrowUpLeftElement)
