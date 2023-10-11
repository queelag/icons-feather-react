import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherLayoutElement } from '@aracna/icons-feather-web/elements/layout-element'

export const IconFeatherLayout: ElementComponent<IconFeatherLayoutElement, IconProps> = createBaseElementComponent<
  IconFeatherLayoutElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-layout', IconFeatherLayoutElement)
