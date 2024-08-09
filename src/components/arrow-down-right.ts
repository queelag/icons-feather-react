import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherArrowDownRightElement } from '@aracna/icons-feather-web/elements/arrow-down-right-element'

export const IconFeatherArrowDownRight: ElementComponent<IconFeatherArrowDownRightElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherArrowDownRightElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-arrow-down-right', IconFeatherArrowDownRightElement)
