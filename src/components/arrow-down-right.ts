import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherArrowDownRightElement } from '@aracna/icons-feather-web/elements/arrow-down-right-element'

export const IconFeatherArrowDownRight: ElementComponent<IconFeatherArrowDownRightElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherArrowDownRightElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-arrow-down-right', IconFeatherArrowDownRightElement)
