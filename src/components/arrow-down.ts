import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherArrowDownElement } from '@aracna/icons-feather-web/elements/arrow-down-element'

export const IconFeatherArrowDown: ElementComponent<IconFeatherArrowDownElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherArrowDownElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-arrow-down', IconFeatherArrowDownElement)
