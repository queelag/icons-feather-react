import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMaximize2Element } from '@aracna/icons-feather-web/elements/maximize-2-element'

export const IconFeatherMaximize2: ElementComponent<IconFeatherMaximize2Element, IconProps> = createBaseElementComponent<
  IconFeatherMaximize2Element,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-maximize-2', IconFeatherMaximize2Element)
