import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherArrowDownLeftElement } from '@aracna/icons-feather-web/elements/arrow-down-left-element'

export const IconFeatherArrowDownLeft: ElementComponent<IconFeatherArrowDownLeftElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherArrowDownLeftElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-arrow-down-left', IconFeatherArrowDownLeftElement)
