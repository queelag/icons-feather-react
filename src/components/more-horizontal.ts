import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherMoreHorizontalElement } from '@aracna/icons-feather-web/elements/more-horizontal-element'

export const IconFeatherMoreHorizontal: ElementComponent<IconFeatherMoreHorizontalElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMoreHorizontalElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-more-horizontal', IconFeatherMoreHorizontalElement)
