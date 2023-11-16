import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherAlignCenterElement } from '@aracna/icons-feather-web/elements/align-center-element'

export const IconFeatherAlignCenter: ElementComponent<IconFeatherAlignCenterElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherAlignCenterElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-align-center', IconFeatherAlignCenterElement)
