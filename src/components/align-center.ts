import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherAlignCenterElement } from '@aracna/icons-feather-web/elements/align-center-element'

export const IconFeatherAlignCenter: ElementComponent<IconFeatherAlignCenterElement, IconProps> = createBaseElementComponent<
  IconFeatherAlignCenterElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-align-center', IconFeatherAlignCenterElement)
