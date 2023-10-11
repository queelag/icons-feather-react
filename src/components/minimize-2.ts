import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMinimize2Element } from '@aracna/icons-feather-web/elements/minimize-2-element'

export const IconFeatherMinimize2: ElementComponent<IconFeatherMinimize2Element, IconProps> = createBaseElementComponent<
  IconFeatherMinimize2Element,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-minimize-2', IconFeatherMinimize2Element)
