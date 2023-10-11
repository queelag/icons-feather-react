import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMinimizeElement } from '@aracna/icons-feather-web/elements/minimize-element'

export const IconFeatherMinimize: ElementComponent<IconFeatherMinimizeElement, IconProps> = createBaseElementComponent<
  IconFeatherMinimizeElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-minimize', IconFeatherMinimizeElement)
