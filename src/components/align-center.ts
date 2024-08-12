import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherAlignCenterElement } from '@aracna/icons-feather-web/elements/align-center-element'

export const IconFeatherAlignCenter: ElementComponent<IconFeatherAlignCenterElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherAlignCenterElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-align-center', IconFeatherAlignCenterElement)
