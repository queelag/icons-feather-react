import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherArrowDownElement } from '@aracna/icons-feather-web/elements/arrow-down-element'

export const IconFeatherArrowDown: ElementComponent<IconFeatherArrowDownElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherArrowDownElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-arrow-down', IconFeatherArrowDownElement)
