import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherAlignCenterElement } from '@aracna/icons-feather-web/elements/align-center-element'

export const IconFeatherAlignCenter: ElementComponent<IconFeatherAlignCenterElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherAlignCenterElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-align-center', IconFeatherAlignCenterElement)
