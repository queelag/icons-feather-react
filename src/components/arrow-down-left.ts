import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherArrowDownLeftElement } from '@aracna/icons-feather-web/elements/arrow-down-left-element'

export const IconFeatherArrowDownLeft: ElementComponent<IconFeatherArrowDownLeftElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherArrowDownLeftElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-arrow-down-left', IconFeatherArrowDownLeftElement)
